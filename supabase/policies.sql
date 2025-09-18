-- Enable RLS
alter table profiles enable row level security;
alter table cases enable row level security;
alter table case_members enable row level security;
alter table documents enable row level security;
alter table messages enable row level security;
alter table invoices enable row level security;
alter table tasks enable row level security;

-- Profiles: owner read/write
drop policy if exists "profiles_owner" on profiles;
create policy "profiles_owner" on profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Cases: select if member; update if attorney/admin or can_edit_case; insert by attorney/admin
drop policy if exists "cases_member_can_select" on cases;
create policy "cases_member_can_select" on cases
for select using (exists (select 1 from case_members cm where cm.case_id = cases.id and cm.user_id = auth.uid()));

drop policy if exists "cases_member_can_update" on cases;
create policy "cases_member_can_update" on cases
for update using (exists (select 1 from case_members cm where cm.case_id = cases.id and cm.user_id = auth.uid() and (cm.role in ('attorney','admin') or cm.can_edit_case)));

drop policy if exists "cases_attorney_insert" on cases;
create policy "cases_attorney_insert" on cases
for insert with check (exists (select 1 from profiles p where p.user_id = auth.uid() and p.role in ('attorney','admin')));

-- Case members: members can read; attorneys/admin can manage
create policy "case_members_read" on case_members
for select using (exists (select 1 from case_members cm2 where cm2.case_id = case_members.case_id and cm2.user_id = auth.uid()));
create policy "case_members_manage" on case_members
for all using (exists (select 1 from profiles p where p.user_id = auth.uid() and p.role in ('attorney','admin')))
with check (exists (select 1 from profiles p where p.user_id = auth.uid() and p.role in ('attorney','admin')));

-- Documents/messages/tasks/invoices based on membership
create policy "documents_case_member_select" on documents
for select using ((user_id = auth.uid()) or (case_id is not null and exists (select 1 from case_members cm where cm.case_id = documents.case_id and cm.user_id = auth.uid())));
create policy "documents_case_member_insert" on documents
for insert with check ((user_id = auth.uid()) and ((case_id is null) or exists (select 1 from case_members cm where cm.case_id = documents.case_id and cm.user_id = auth.uid())));
create policy "documents_case_member_update" on documents
for update using ((user_id = auth.uid()) or exists (select 1 from case_members cm where cm.case_id = documents.case_id and cm.user_id = auth.uid() and (cm.role in ('attorney','admin') or cm.can_upload)));

create policy "messages_case_member_select" on messages
for select using ((user_id = auth.uid()) or (case_id is not null and exists (select 1 from case_members cm where cm.case_id = messages.case_id and cm.user_id = auth.uid())));
create policy "messages_case_member_insert" on messages
for insert with check ((user_id = auth.uid()) and ((case_id is null) or exists (select 1 from case_members cm where cm.case_id = messages.case_id and cm.user_id = auth.uid())));

create policy "tasks_case_member_select" on tasks
for select using ((user_id = auth.uid()) or (case_id is not null and exists (select 1 from case_members cm where cm.case_id = tasks.case_id and cm.user_id = auth.uid())));
create policy "tasks_case_member_insert" on tasks
for insert with check ((user_id = auth.uid()) and ((case_id is null) or exists (select 1 from case_members cm where cm.case_id = tasks.case_id and cm.user_id = auth.uid())));
create policy "tasks_case_member_update" on tasks
for update using ((user_id = auth.uid()) or exists (select 1 from case_members cm where cm.case_id = tasks.case_id and cm.user_id = auth.uid() and (cm.role in ('attorney','admin') or cm.can_edit_case)));

create policy "invoices_case_member_select" on invoices
for select using ((user_id = auth.uid()) or (case_id is not null and exists (select 1 from case_members cm where cm.case_id = invoices.case_id and cm.user_id = auth.uid())));
create policy "invoices_case_member_insert" on invoices
for insert with check ((user_id = auth.uid()) and ((case_id is null) or exists (select 1 from case_members cm where cm.case_id = invoices.case_id and cm.user_id = auth.uid())));

-- Storage bucket (create manually in Supabase as 'legal-documents') and set Storage RLS with folder-per-user rules.
