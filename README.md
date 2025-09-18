# Law Offices of Pritpal Singh – Client Portal (Extended)

Now with:
- Staff/Attorney views under `/firm/*`
- Granular case permissions (`case_members`) + role-based RLS
- Full **DocuSign** embedded signing (JWT) end-to-end

## Setup
1. Install deps and copy env
```bash
pnpm i
cp .env.example .env.local
```
2. Create Supabase project. Run **all** SQL under `supabase/` (schema -> migrations_002 -> migrations_003).
3. Create Storage bucket `legal-documents` and add Storage RLS policies (see comments in policies).
4. Stripe/Twilio/DocuSign: set env vars and webhooks. Run dev.
```bash
pnpm dev
```
