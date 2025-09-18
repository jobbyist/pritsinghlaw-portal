'use client';
import { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

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

        <aside className="card-muted">
          <h3 className="mb-2">Need help?</h3>
          <p className="text-white/80 text-sm">Email <a href="mailto:info@pritsinghlaw.com">info@pritsinghlaw.com</a> or call <a href="tel:+15104432123">(510) 443-2123</a>.</p>
        </aside>
      </div>
    </main>
  );
}
