'use client';
export default function FirmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="card flex items-center justify-between">
        <h1>Firm</h1>
        <div className="text-white/60 text-sm">Staff & Attorney Views</div>
      </div>
      {children}
    </div>
  );
}
