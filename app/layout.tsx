import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Locally",
  description: "Locally is an app to share your music collection, listen to music, for free, with no ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
