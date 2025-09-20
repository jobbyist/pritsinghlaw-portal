'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

export default function CareerHome() {
  const supabase = supabaseBrowser();
  const [stats, setStats] = useState<any>({ total: 0, open: 0 });
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data: c } = await supabase.from('cases').select('id,code,title,type,status,progress,created_at').order('created_at', { ascending: false }).limit(5);
      setRecent(c ?? []);
      setStats({ total: c?.length ?? 0, open: (c ?? []).filter(x => x.status === 'Open').length });
    })();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="card">
        <div className="text-white/60 text-sm">Active Job Applications</div>
        <div className="text-3xl font-semibold">{stats.total}</div>
      </div>
      <div className="card">
        <div className="text-white/60 text-sm">In Progress</div>
        <div className="text-3xl font-semibold">{stats.open}</div>
      </div>
      <div className="card">
        <div className="text-white/60 text-sm">Resume Audit</div>
        <div className="text-lg">
          <a href="https://audit.jobbyist.africa" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark">
            Find the Right Fit →
          </a>
        </div>
      </div>
      <div className="lg:col-span-3 card">
        <h3 className="mb-2">Recent Applications</h3>
        <div className="space-y-2">
          {recent.map(r => (
            <div key={r.id} className="rounded-lg border border-white/10 p-3">
              <div className="font-medium">{r.title}</div>
              <div className="text-white/60 text-sm">{r.code} · {r.type} · {r.status} · {r.progress}%</div>
            </div>
          ))}
          {recent.length === 0 && <div className="text-white/60">No applications yet. Ready to find the right fit?</div>}
        </div>
      </div>
    </div>
  );
}
