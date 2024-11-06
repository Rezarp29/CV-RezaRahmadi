// components/riwayatPendidikan.tsx
import { FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const RiwayatPendidikan: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`
      shadow-lg rounded-lg p-6
      ${theme === 'light' ? 'bg-white' : ''}
      ${theme === 'dark' ? 'bg-gray-800' : ''}
      ${theme === 'red' ? 'bg-red-800' : ''}
    `}>
      <h2 className={`
        text-2xl font-bold mb-4 flex items-center
        ${theme === 'light' ? 'text-gray-800' : ''}
        ${theme === 'dark' ? 'text-white' : ''}
        ${theme === 'red' ? 'text-white' : ''}
      `}>
        <FaGraduationCap className="mr-2 text-blue-500" />
        Riwayat Pendidikan
      </h2>
      <ul className="space-y-4">
        <li className={`
          border-l-4 border-blue-500 pl-4 transition-colors duration-200
          ${theme === 'light' ? 'hover:bg-gray-50' : ''}
          ${theme === 'dark' ? 'hover:bg-gray-700' : ''}
          ${theme === 'red' ? 'hover:bg-red-700' : ''}
        `}>
          <div className={`
            text-lg font-semibold
            ${theme === 'light' ? 'text-gray-800' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>SDN KORPRI</div>
          <div className={`
            text-md
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-gray-300' : ''}
            ${theme === 'red' ? 'text-gray-300' : ''}
          `}>2010 - 2016</div>
          <div className={`
            text-sm
            ${theme === 'light' ? 'text-gray-600' : ''}
            ${theme === 'dark' ? 'text-gray-400' : ''}
            ${theme === 'red' ? 'text-gray-400' : ''}
          `}>Sekolah Dasar</div>
        </li>

        <li className={`
          border-l-4 border-blue-500 pl-4 transition-colors duration-200
          ${theme === 'light' ? 'hover:bg-gray-50' : ''}
          ${theme === 'dark' ? 'hover:bg-gray-700' : ''}
          ${theme === 'red' ? 'hover:bg-red-700' : ''}
        `}>
          <div className={`
            text-lg font-semibold
            ${theme === 'light' ? 'text-gray-800' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>SMPN 37 Bandung</div>
          <div className={`
            text-md
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-gray-300' : ''}
            ${theme === 'red' ? 'text-gray-300' : ''}
          `}>2016 - 2019</div>
          <div className={`
            text-sm
            ${theme === 'light' ? 'text-gray-600' : ''}
            ${theme === 'dark' ? 'text-gray-400' : ''}
            ${theme === 'red' ? 'text-gray-400' : ''}
          `}>Sekolah Menengah Pertama</div>
        </li>

        <li className={`
          border-l-4 border-blue-500 pl-4 transition-colors duration-200
          ${theme === 'light' ? 'hover:bg-gray-50' : ''}
          ${theme === 'dark' ? 'hover:bg-gray-700' : ''}
          ${theme === 'red' ? 'hover:bg-red-700' : ''}
        `}>
          <div className={`
            text-lg font-semibold
            ${theme === 'light' ? 'text-gray-800' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>SMKS BPP Bandung</div>
          <div className={`
            text-md
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-gray-300' : ''}
            ${theme === 'red' ? 'text-gray-300' : ''}
          `}>2019 - 2022</div>
          <div className={`
            text-sm
            ${theme === 'light' ? 'text-gray-600' : ''}
            ${theme === 'dark' ? 'text-gray-400' : ''}
            ${theme === 'red' ? 'text-gray-400' : ''}
          `}>Sekolah Menengah Kejuruan</div>
        </li>
      </ul>
    </section>
  );
};

export default RiwayatPendidikan;