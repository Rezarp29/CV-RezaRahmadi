// components/RiwayatPekerjaan.tsx
import { FaBriefcase } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const RiwayatPekerjaan: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`shadow-lg rounded-lg p-6
      ${theme === 'light' ? 'bg-white' : ''}
      ${theme === 'dark' ? 'bg-gray-800' : ''}
      ${theme === 'red' ? 'bg-red-800' : ''}
    `}>
      <h2 className={`text-2xl font-bold mb-4 flex items-center
        ${theme === 'light' ? 'text-gray-800' : ''}
        ${theme === 'dark' ? 'text-white' : ''}
        ${theme === 'red' ? 'text-white' : ''}
      `}>
        <FaBriefcase className={`mr-2
          ${theme === 'light' ? 'text-blue-500' : ''}
          ${theme === 'dark' ? 'text-blue-400' : ''}
          ${theme === 'red' ? 'text-red-300' : ''}
        `} />
        Riwayat Pekerjaan
      </h2>
      <ul className="space-y-6">
        {[
          {
            title: "Chief Marketing Officer",
            company: "Trafigura Group Singapura",
            period: "2021 - sekarang",
            description: "Bertanggung jawab atas strategi pemasaran global dan pengembangan bisnis."
          },
          {
            title: "Director of Human Resources",
            company: "PT. Indofood Sukses Makmur Tbk",
            period: "2017 - 2021",
            description: "Mengelola seluruh aspek sumber daya manusia dan pengembangan organisasi."
          },
          {
            title: "Marketing Manager",
            company: "PT. Gudang Garam Tbk",
            period: "2015 - 2017",
            description: "Memimpin tim pemasaran dan mengembangkan strategi promosi produk."
          },
          {
            title: "Marketing Specialist",
            company: "PT. Mayora Indah Tbk",
            period: "2010 - 2015",
            description: "Mengembangkan dan mengimplementasikan kampanye pemasaran produk."
          }
        ].map((job, index) => (
          <li key={index} className={`border-l-4 pl-4 hover:bg-opacity-10 transition-colors duration-200 rounded-r-lg
            ${theme === 'light' ? 'border-blue-500 hover:bg-blue-100' : ''}
            ${theme === 'dark' ? 'border-blue-400 hover:bg-blue-900' : ''}
            ${theme === 'red' ? 'border-red-300 hover:bg-red-900' : ''}
          `}>
            <div className={`font-semibold text-lg
              ${theme === 'light' ? 'text-gray-800' : ''}
              ${theme === 'dark' ? 'text-white' : ''}
              ${theme === 'red' ? 'text-white' : ''}
            `}>{job.title}</div>
            <div className={`text-md
              ${theme === 'light' ? 'text-blue-600' : ''}
              ${theme === 'dark' ? 'text-blue-400' : ''}
              ${theme === 'red' ? 'text-red-300' : ''}
            `}>{job.company}</div>
            <div className={`text-sm
              ${theme === 'light' ? 'text-gray-600' : ''}
              ${theme === 'dark' ? 'text-gray-400' : ''}
              ${theme === 'red' ? 'text-red-200' : ''}
            `}>{job.period}</div>
            <p className={`text-sm mt-1
              ${theme === 'light' ? 'text-gray-700' : ''}
              ${theme === 'dark' ? 'text-gray-300' : ''}
              ${theme === 'red' ? 'text-red-100' : ''}
            `}>
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RiwayatPekerjaan;