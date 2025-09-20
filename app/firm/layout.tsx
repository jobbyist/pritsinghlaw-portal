'use client';
export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="card flex items-center justify-between">
        <h1>Career Resources</h1>
        <div className="text-white/60 text-sm">For Young Professionals (18-34)</div>
      </div>
      {children}
    </div>
  );
}
