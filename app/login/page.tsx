'use client';
import { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';
import Link from 'next/link';

// Google Adsense Placeholder Component
function AdPlaceholder({ size, position }: { size: string; position: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
      <div className="text-white/60 text-sm">Google Adsense</div>
      <div className="text-white/40 text-xs">{size} - {position}</div>
    </div>
  );
}

export default function LoginPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    window.location.href = '/portal';
  }

  return (
    <main className="max-w-5xl mx-auto px-4 pt-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-full bg-white/10" />
        <div>
          <p className="uppercase tracking-widest text-white/60 text-xs">SECURE CLIENT PORTAL</p>
          <h1 className="text-3xl font-semibold">Law Offices of Pritpal Singh</h1>
        </div>
      </div>

      {/* Top Banner Ad */}
      <div className="mb-8">
        <AdPlaceholder size="728x90" position="Login Header" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <section className="card">
          <h2 className="mb-2">Launch the Dashboard</h2>
          <p className="text-white/80 mb-4">View account info, request updates, manage documents, and pay bills.</p>
          <form onSubmit={signIn} className="space-y-3">
            <div><label className="label">Email</label>
              <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></div>
            <div><label className="label">Password</label>
              <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <button className="btn" disabled={loading} type="submit">{loading ? "Signing in..." : "LAUNCH THE DASHBOARD"}</button>
          </form>
          <div className="mt-6">
            <p className="text-white/60 text-sm">Or sign in with</p>
            <div className="flex gap-3 mt-2">
              <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })} className="btn-ghost">Google</button>
              <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })} className="btn-ghost">GitHub</button>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          {/* Sidebar Ad */}
          <AdPlaceholder size="300x250" position="Login Sidebar" />
          
          <div className="card-muted">
            <h3 className="mb-2">Need help?</h3>
            <p className="text-white/80 text-sm">Email <a href="mailto:info@pritsinghlaw.com">info@pritsinghlaw.com</a> or call <a href="tel:+15104432123">(510) 443-2123</a>.</p>
          </div>

          <div className="card-muted">
            <h3 className="mb-2">Not a client yet?</h3>
            <p className="text-white/80 text-sm mb-3">Learn more about our services and recent legal insights.</p>
            <Link href="/" className="btn-ghost text-sm">Visit Main Site</Link>
          </div>
        </aside>
      </div>
      
      {/* Footer Ad */}
      <div className="text-center mt-12">
        <AdPlaceholder size="970x250" position="Login Footer" />
      </div>
    </main>
  );
}
