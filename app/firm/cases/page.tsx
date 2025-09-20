'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

export default function CareerApplications() {
  const supabase = supabaseBrowser();
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data: memberships } = await supabase.from('case_members').select('case_id').eq('user_id', user.id);
      const ids = memberships?.map(m => m.case_id) ?? [];
      if (ids.length === 0) { setRows([]); return; }
      const { data } = await supabase.from('cases').select('*').in('id', ids).order('created_at', { ascending: false });
      setRows(data ?? []);
    })();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1>Your Job Applications</h1>
        <a href="https://audit.jobbyist.africa" target="_blank" rel="noopener noreferrer" className="btn">
          Get Resume Audit
        </a>
      </div>
      <div className="card">
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr><th className="text-left py-2">Application ID</th><th className="text-left">Company & Role</th><th>Type</th><th>Status</th><th>Progress</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-t border-white/10">
                <td className="py-2">{r.code}</td>
                <td>{r.title}</td>
                <td className="text-center">{r.type}</td>
                <td className="text-center">{r.status}</td>
                <td className="text-center">{r.progress}%</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={5} className="py-3 text-white/60">No applications yet. Time to find the right fit!</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
