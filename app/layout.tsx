import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Jobbyist - Find the Right Fit for Your Career",
  description: "Career platform for young professionals aged 18-34. Find your perfect job match with our resume audit tools and career guidance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"><body><div className="min-h-screen">{children}</div>
      <footer className="text-center text-white/60 text-sm py-6">
        © {new Date().getFullYear()}, Jobbyist - Helping young professionals find the right fit
      </footer></body></html>
  );
}
