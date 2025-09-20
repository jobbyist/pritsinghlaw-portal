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

// Enhanced Audio Player Component for catalog
function PodcastEpisode({ 
  title, 
  description, 
  audioSrc, 
  duration, 
  date, 
  category 
}: { 
  title: string; 
  description: string; 
  audioSrc: string; 
  duration: string;
  date: string;
  category: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded">{category}</span>
            <span className="text-white/60 text-sm">{date}</span>
            <span className="text-white/60 text-sm">• {duration}</span>
          </div>
          <h3 className="font-semibold text-lg mb-3">{title}</h3>
          <p className="text-white/80 text-sm mb-4">{description}</p>
        </div>
      </div>
      <audio controls className="w-full">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default function PodcastCatalogPage() {
  const episodes = [
    {
      title: "Legal Ethics in Modern Practice",
      description: "A comprehensive discussion on maintaining ethical standards in today's legal environment, covering client confidentiality, conflicts of interest, and professional responsibility.",
      audioSrc: "/audio/sample1.mp3",
      duration: "28:45",
      date: "Dec 15, 2024",
      category: "Ethics"
    },
    {
      title: "Immigration Law Updates 2024",
      description: "Latest changes in immigration policies and their implications for practitioners and clients. Covering new visa categories, policy changes, and practical applications.",
      audioSrc: "/audio/sample2.mp3",
      duration: "32:12",
      date: "Dec 10, 2024",
      category: "Immigration"
    },
    {
      title: "Contract Disputes: Best Practices",
      description: "How to handle contract disputes effectively for clients, including negotiation strategies, mediation approaches, and litigation preparation.",
      audioSrc: "/audio/sample3.mp3",
      duration: "24:33",
      date: "Dec 5, 2024",
      category: "Contract Law"
    },
    {
      title: "Family Law: Child Custody Trends",
      description: "Recent trends and considerations in child custody cases, including best interest standards, parental rights, and emerging legal precedents.",
      audioSrc: "/audio/sample4.mp3",
      duration: "29:18",
      date: "Nov 28, 2024",
      category: "Family Law"
    },
    {
      title: "Business Formation Legal Guide",
      description: "Essential legal considerations when starting a business, covering entity selection, regulatory compliance, and initial documentation requirements.",
      audioSrc: "/audio/sample5.mp3",
      duration: "35:42",
      date: "Nov 22, 2024",
      category: "Business Law"
    },
    {
      title: "Employment Law Essentials",
      description: "Key employment law principles every business owner should know, including hiring practices, workplace policies, and compliance requirements.",
      audioSrc: "/audio/sample6.mp3",
      duration: "26:55",
      date: "Nov 15, 2024",
      category: "Employment"
    },
    {
      title: "Real Estate Transaction Basics",
      description: "Fundamentals of real estate transactions, including purchase agreements, title issues, and closing procedures for residential and commercial properties.",
      audioSrc: "/audio/sample7.mp3",
      duration: "31:20",
      date: "Nov 8, 2024",
      category: "Real Estate"
    },
    {
      title: "Intellectual Property Protection",
      description: "Understanding intellectual property rights, trademark registration, copyright protection, and trade secret safeguards for businesses.",
      audioSrc: "/audio/sample8.mp3",
      duration: "27:14",
      date: "Nov 1, 2024",
      category: "IP Law"
    },
    {
      title: "Personal Injury Claims Process",
      description: "Step-by-step guide through the personal injury claims process, from initial consultation to settlement or trial, including client communication strategies.",
      audioSrc: "/audio/sample9.mp3",
      duration: "33:08",
      date: "Oct 25, 2024",
      category: "Personal Injury"
    },
    {
      title: "Estate Planning Fundamentals",
      description: "Basic estate planning concepts including wills, trusts, power of attorney, and healthcare directives. Essential information for clients and practitioners.",
      audioSrc: "/audio/sample10.mp3",
      duration: "30:45",
      date: "Oct 18, 2024",
      category: "Estate Planning"
    }
  ];

  const categories = ["All", "Ethics", "Immigration", "Contract Law", "Family Law", "Business Law", "Employment", "Real Estate", "IP Law", "Personal Injury", "Estate Planning"];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="text-accent hover:text-accent-dark">← Back to Home</Link>
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">The Job Post Podcast Catalog</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Legal insights, practice tips, and professional development content for attorneys and law students.
          </p>
        </div>
        
        {/* Top Banner Ad */}
        <div className="mt-6">
          <AdPlaceholder size="728x90" position="Catalog Header" />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Category Filter */}
          <div className="card mb-6">
            <h3 className="font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button 
                  key={category}
                  className="btn-ghost text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Episodes List */}
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <PodcastEpisode key={index} {...episode} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn">Load More Episodes</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Sidebar Ad */}
          <AdPlaceholder size="300x250" position="Catalog Sidebar Top" />
          
          <div className="card-muted">
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p className="text-white/80 text-sm mb-4">
              Get notified when new episodes are released.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input text-sm"
              />
              <button className="btn w-full text-sm">Subscribe</button>
            </div>
          </div>

          <div className="card-muted">
            <h3 className="font-semibold mb-3">Recent Episodes</h3>
            <ul className="space-y-3 text-sm">
              {episodes.slice(0, 5).map((episode, index) => (
                <li key={index}>
                  <div className="font-medium text-white">{episode.title}</div>
                  <div className="text-white/60 text-xs">{episode.date} • {episode.duration}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Another Sidebar Ad */}
          <AdPlaceholder size="300x600" position="Catalog Sidebar Bottom" />
        </aside>
      </div>

      {/* Footer Ad */}
      <div className="text-center mt-12">
        <AdPlaceholder size="970x250" position="Catalog Footer" />
      </div>
    </main>
  );
}