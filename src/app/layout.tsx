import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const lato = localFont({
  variable: "--font-lato",
  display: "swap",
  src: [
    { path: "./fonts/lato/Lato-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/lato/Lato-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "./fonts/lato/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/lato/Lato-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "./fonts/lato/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/lato/Lato-Italic.ttf", weight: "400", style: "italic" },

    { path: "./fonts/lato/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/lato/Lato-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "./fonts/lato/Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/lato/Lato-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
});


export const metadata: Metadata = {
  title: "Chase's Server",
  description: "Chase's homelab server for all projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}

