// app/page.tsx
"use client";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import Contact from './components/Contact';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';
import MyGallery from './components/MyGallery';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './contexts/ThemeContext';

export default function CV() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen
      ${theme === 'light' ? 'bg-gray-100 text-gray-900' : ''}
      ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}
      ${theme === 'red' ? 'bg-red-900 text-white' : ''}
    `}>
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom 1 */}
          <div className="lg:col-span-1">
            <PersonalInfo />
            <div className="mt-8">
              <Skills />
            </div>
          </div>
          
          {/* Kolom 2 */}
          <div className="lg:col-span-1">
            <RiwayatPendidikan />
          </div>
          
          {/* Kolom 3 */}
          <div className="lg:col-span-1">
            <RiwayatPekerjaan />
          </div>
        </div>
        
        {/* MyGallery section dengan lebar penuh */}
        <div className="mt-8">
          <MyGallery />
        </div>
        
        {/* Contact section dengan lebar penuh */}
        <div className="mt-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}