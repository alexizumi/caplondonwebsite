import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CAP London Church',
  description: 'A Family Church, Apostolic and Prophetic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
