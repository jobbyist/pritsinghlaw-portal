'use client';
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

// Audio Player Component
function AudioPlayer({ title, description, audioSrc }: { title: string; description: string; audioSrc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-white/80 text-sm mb-3">{description}</p>
      <audio controls className="w-full">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-white/10" />
          <div>
            <h1 className="text-4xl font-bold">Law Offices of Pritpal Singh</h1>
            <p className="text-white/80 text-lg">Professional Legal Services</p>
          </div>
        </div>
        
        {/* Top Banner Ad */}
        <AdPlaceholder size="728x90" position="Header Banner" />
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* The Job Post Section */}
          <section className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">The Job Post</h2>
              <Link href="/podcast-catalog" className="text-accent hover:text-accent-dark text-sm">
                View All Episodes →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <AudioPlayer 
                title="Legal Ethics in Modern Practice"
                description="Discussion on maintaining ethical standards in today's legal environment."
                audioSrc="/audio/sample1.mp3"
              />
              <AudioPlayer 
                title="Immigration Law Updates 2024"
                description="Latest changes in immigration policies and their implications."
                audioSrc="/audio/sample2.mp3"
              />
              <AudioPlayer 
                title="Contract Disputes: Best Practices"
                description="How to handle contract disputes effectively for clients."
                audioSrc="/audio/sample3.mp3"
              />
              <AudioPlayer 
                title="Family Law: Child Custody Trends"
                description="Recent trends and considerations in child custody cases."
                audioSrc="/audio/sample4.mp3"
              />
              <AudioPlayer 
                title="Business Formation Legal Guide"
                description="Essential legal considerations when starting a business."
                audioSrc="/audio/sample5.mp3"
              />
            </div>
          </section>

          {/* Services Section */}
          <section className="card">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Immigration Law</h3>
                <p className="text-white/80 text-sm">Comprehensive immigration services including visa applications, green cards, and citizenship.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Family Law</h3>
                <p className="text-white/80 text-sm">Family legal matters including divorce, custody, and domestic relations.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Business Law</h3>
                <p className="text-white/80 text-sm">Business formation, contracts, and commercial legal services.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Civil Litigation</h3>
                <p className="text-white/80 text-sm">Representation in civil disputes and litigation matters.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="card">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-white/80 text-sm mb-2">📧 Email: <a href="mailto:info@pritsinghlaw.com" className="text-accent hover:text-accent-dark">info@pritsinghlaw.com</a></p>
                <p className="text-white/80 text-sm mb-2">📞 Phone: <a href="tel:+15104432123" className="text-accent hover:text-accent-dark">(510) 443-2123</a></p>
                <p className="text-white/80 text-sm">🏢 Professional legal services with personalized attention</p>
              </div>
              <div>
                <Link href="/login" className="btn inline-block">
                  Client Portal Login
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Sidebar Ad */}
          <AdPlaceholder size="300x250" position="Sidebar Top" />
          
          <div className="card-muted">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/podcast-catalog" className="text-accent hover:text-accent-dark">🎧 Podcast Catalog</Link></li>
              <li><Link href="/login" className="text-accent hover:text-accent-dark">🔐 Client Portal</Link></li>
              <li><a href="mailto:info@pritsinghlaw.com" className="text-accent hover:text-accent-dark">📧 Contact Us</a></li>
              <li><a href="tel:+15104432123" className="text-accent hover:text-accent-dark">📞 Call Now</a></li>
            </ul>
          </div>

          {/* Another Sidebar Ad */}
          <AdPlaceholder size="300x600" position="Sidebar Bottom" />
        </aside>
      </div>

      {/* Footer Ad */}
      <div className="text-center">
        <AdPlaceholder size="970x250" position="Footer Banner" />
      </div>
    </main>
  );
}