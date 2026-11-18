import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abstract Energy",
  description: "Real-time, AI-driven energy audits and measurement & verification.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-white antialiased">
        {children}
      </body>
    </html>
  );
}