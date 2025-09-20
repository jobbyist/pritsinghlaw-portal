'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

// Google Adsense Placeholder Component
function AdPlaceholder({ size, position }: { size: string; position: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
      <div className="text-white/60 text-sm">Google Adsense</div>
      <div className="text-white/40 text-xs">{size} - {position}</div>
    </div>
  );
}

export default function FirmCases() {
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
      {/* Top Banner Ad */}
      <AdPlaceholder size="728x90" position="Cases Header" />
      
      <h1>All Cases (Assigned)</h1>
      <div className="card">
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr><th className="text-left py-2">Code</th><th className="text-left">Title</th><th>Type</th><th>Status</th><th>Progress</th></tr>
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
            {rows.length === 0 && <tr><td colSpan={5} className="py-3 text-white/60">No assignments yet.</td></tr>}
          </tbody>
        </table>
      </div>
      
      {/* Footer Ad */}
      <AdPlaceholder size="970x250" position="Cases Footer" />
    </div>
  );
}
