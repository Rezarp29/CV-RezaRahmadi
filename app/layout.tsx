// app/layout.tsx
"use client";
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}