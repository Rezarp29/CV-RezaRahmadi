// app/page.tsx
"use client";
import Hero from "./components/hero";
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
    </div>
  );
}