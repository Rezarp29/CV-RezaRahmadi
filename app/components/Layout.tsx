"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { 
  FaHome, 
  FaGraduationCap, 
  FaBriefcase, 
  FaUser, 
  FaCogs, 
  FaCamera, 
  FaEnvelope,
  FaBars
} from 'react-icons/fa';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/personal-info', label: 'Personal Info', icon: FaUser },
    { path: '/education', label: 'Education', icon: FaGraduationCap },
    { path: '/work', label: 'Work Experience', icon: FaBriefcase },
    { path: '/skills', label: 'Skills', icon: FaCogs },
    { path: '/gallery', label: 'Gallery', icon: FaCamera },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-72
        transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        z-30 shadow-xl
        ${theme === 'light' ? 'bg-white border-r border-gray-200' : ''}
        ${theme === 'dark' ? 'bg-gray-800 border-r border-gray-700' : ''}
        ${theme === 'red' ? 'bg-red-800 border-r border-red-700' : ''}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b
            ${theme === 'light' ? 'border-gray-200' : ''}
            ${theme === 'dark' ? 'border-gray-700' : ''}
            ${theme === 'red' ? 'border-red-700' : ''}
          ">
            <div className="flex justify-between items-center">
              <h2 className={`text-2xl font-bold
                ${theme === 'light' ? 'text-gray-800' : ''}
                ${theme === 'dark' ? 'text-white' : ''}
                ${theme === 'red' ? 'text-white' : ''}
              `}>Portfolio</h2>
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-all duration-200
                    ${pathname === item.path ? `
                      ${theme === 'light' ? 'bg-blue-500 text-white shadow-md' : ''}
                      ${theme === 'dark' ? 'bg-blue-600 text-white shadow-md' : ''}
                      ${theme === 'red' ? 'bg-red-600 text-white shadow-md' : ''}
                    ` : `
                      ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : ''}
                      ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : ''}
                      ${theme === 'red' ? 'text-red-100 hover:bg-red-700' : ''}
                    `}
                  `}
                >
                  <item.icon className="mr-3 text-xl" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile Header */}
        <header className={`
          sticky top-0 z-10 lg:hidden p-4
          ${theme === 'light' ? 'bg-white border-b border-gray-200' : ''}
          ${theme === 'dark' ? 'bg-gray-800 border-b border-gray-700' : ''}
          ${theme === 'red' ? 'bg-red-800 border-b border-red-700' : ''}
        `}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className={`p-2 rounded-lg hover:bg-opacity-80 transition-colors
                ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : ''}
                ${theme === 'dark' ? 'text-white hover:bg-gray-700' : ''}
                ${theme === 'red' ? 'text-white hover:bg-red-700' : ''}
              `}
            >
              <FaBars size={24} />
            </button>
            <h1 className={`text-lg font-semibold
              ${theme === 'light' ? 'text-gray-800' : ''}
              ${theme === 'dark' ? 'text-white' : ''}
              ${theme === 'red' ? 'text-white' : ''}
            `}>
              {navItems.find(item => item.path === pathname)?.label || 'Portfolio'}
            </h1>
            <div className="w-8" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Page Content */}
        <main className={`p-6
          ${theme === 'light' ? 'bg-gray-50' : ''}
          ${theme === 'dark' ? 'bg-gray-900' : ''}
          ${theme === 'red' ? 'bg-red-900' : ''}
        `}>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 