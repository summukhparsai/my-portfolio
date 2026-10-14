import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumukh Parsai | Software Developer | AI Enthusiast",
  description:
    "Portfolio of Sumukh Parsai, a B.Tech Computer Science Engineering student building web applications and exploring AI.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Runs before first paint so the saved theme never flashes the wrong look.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='clay'||t==='glass'?t:'glass')}catch(e){document.documentElement.setAttribute('data-theme','glass')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="glass" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
