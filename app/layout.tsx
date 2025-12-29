import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmaus Bible Chapel",
  description: "A Christ-centered church community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Navbar mounts here later */}
          <main className="flex-1">{children}</main>
          {/* Footer mounts here later */}
        </div>
      </body>
    </html>
  );
}
