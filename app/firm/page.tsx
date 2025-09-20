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

export default function FirmHome() {
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
    <div className="space-y-6">
      {/* Top Banner Ad */}
      <AdPlaceholder size="728x90" position="Firm Dashboard Header" />
      
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-white/60 text-sm">Total Cases (recent sample)</div>
          <div className="text-3xl font-semibold">{stats.total}</div>
        </div>
        <div className="card">
          <div className="text-white/60 text-sm">Open (sample)</div>
          <div className="text-3xl font-semibold">{stats.open}</div>
        </div>
        <div className="lg:col-span-1">
          <AdPlaceholder size="300x250" position="Dashboard Sidebar" />
        </div>
        <div className="lg:col-span-3 card">
          <h3 className="mb-2">Recently Created</h3>
          <div className="space-y-2">
            {recent.map(r => (
              <div key={r.id} className="rounded-lg border border-white/10 p-3">
                <div className="font-medium">{r.title}</div>
                <div className="text-white/60 text-sm">{r.code} · {r.type} · {r.status} · {r.progress}%</div>
              </div>
            ))}
            {recent.length === 0 && <div className="text-white/60">No cases yet.</div>}
          </div>
        </div>
      </div>
      
      {/* Footer Ad */}
      <AdPlaceholder size="970x250" position="Firm Dashboard Footer" />
    </div>
  );
}
