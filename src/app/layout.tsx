import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chase's Server",
  description: "Chase's homelab server for all projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

