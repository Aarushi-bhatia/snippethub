import type { Metadata } from "next";
import '../styles/globals.css'
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "SnippetHub",
  description: "Discover and Share Code Snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  );
}
