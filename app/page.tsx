export default function HomePage() {
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
          <h2 className="mb-4">Welcome to the Client Portal</h2>
          <p className="text-white/80 mb-4">
            Access your legal documents, case information, and communicate securely with our team.
          </p>
          <a href="/login" className="btn">
            Access Portal
          </a>
        </section>

        <aside className="card-muted">
          <h3 className="mb-2">Need help?</h3>
          <p className="text-white/80 text-sm">
            Email <a href="mailto:info@pritsinghlaw.com">info@pritsinghlaw.com</a> or call{' '}
            <a href="tel:+15104432123">(510) 443-2123</a>.
          </p>
        </aside>
      </div>
    </main>
  );
}