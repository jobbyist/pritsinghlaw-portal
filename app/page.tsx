'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Find the Right Fit for Your Career</h1>
        <p className="text-xl text-white/80 mb-8">
          Jobbyist helps young professionals aged 18-34 discover career opportunities that truly match their potential.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login" className="btn">Get Started</Link>
          <a href="https://audit.jobbyist.africa" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Resume Audit Tool
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card text-center">
          <h3 className="mb-3">Career Matching</h3>
          <p className="text-white/80">
            Our platform helps you find the right fit by matching your skills and aspirations with ideal career opportunities.
          </p>
        </div>
        <div className="card text-center">
          <h3 className="mb-3">Resume Optimization</h3>
          <p className="text-white/80">
            Get professional resume auditing to ensure you present your best self to potential employers.
          </p>
        </div>
        <div className="card text-center">
          <h3 className="mb-3">Young Professional Focus</h3>
          <p className="text-white/80">
            Specifically designed for professionals aged 18-34 starting or advancing their careers.
          </p>
        </div>
      </div>

      <div className="card mb-16">
        <div className="text-center">
          <h2 className="mb-4">Ready to Find Your Perfect Career Match?</h2>
          <p className="text-white/80 mb-6">
            Join thousands of young professionals who have found the right fit for their careers through Jobbyist.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="btn">Start Your Journey</Link>
            <a href="https://audit.jobbyist.africa" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Try Resume Audit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}