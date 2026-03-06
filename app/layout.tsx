import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Story Hack - Agentic Video Generator',
  description: 'Transform research papers into engaging videos with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
