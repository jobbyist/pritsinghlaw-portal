import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Secure Client Portal – Law Offices of Pritpal Singh",
  description: "Client dashboard for real-time account management.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"><body><div className="min-h-screen">{children}</div>
      <footer className="text-center text-white/60 text-sm py-6">
        © {new Date().getFullYear()}, Law Offices of Pritpal Singh
      </footer></body></html>
  );
}
