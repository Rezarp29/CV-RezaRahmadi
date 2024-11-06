// components/PersonalInfo.tsx
import { FaUserAlt, FaBirthdayCake, FaVenusMars, FaRulerVertical, FaWeight, FaRing, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const PersonalInfo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`rounded-lg p-6 shadow-lg
      ${theme === 'light' ? 'bg-white text-gray-800' : ''}
      ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}
      ${theme === 'red' ? 'bg-red-800 text-white' : ''}
    `}>
      <h2 className={`text-2xl font-bold mb-4 flex items-center
        ${theme === 'light' ? 'text-gray-800' : ''}
        ${theme === 'dark' ? 'text-white' : ''}
        ${theme === 'red' ? 'text-white' : ''}
      `}>
        <FaUserAlt className={`mr-2
          ${theme === 'light' ? 'text-blue-500' : ''}
          ${theme === 'dark' ? 'text-blue-400' : ''}
          ${theme === 'red' ? 'text-red-300' : ''}
        `} />
        Personal Info
      </h2>
      <ul className="space-y-3">
        {[
          { icon: FaBirthdayCake, label: "TTL", value: "Bandung, 29 Mei 2004" },
          { icon: FaVenusMars, label: "Gender", value: "Laki-laki" },
          { icon: FaRulerVertical, label: "Tinggi Badan", value: "165 cm" },
          { icon: FaWeight, label: "Berat Badan", value: "70 kg" },
          { icon: FaRing, label: "Status Pernikahan", value: "Belum Menikah" },
          { icon: FaWhatsapp, label: "WhatsApp", value: "+62 822-1985-1715" },
          { icon: FaEnvelope, label: "Email", value: "rezarputra@gmail.com" },
        ].map((item, index) => (
          <li key={index} className={`flex items-center
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-gray-300' : ''}
            ${theme === 'red' ? 'text-red-100' : ''}
          `}>
            <item.icon className={`mr-2
              ${theme === 'light' ? 'text-blue-500' : ''}
              ${theme === 'dark' ? 'text-blue-400' : ''}
              ${theme === 'red' ? 'text-red-300' : ''}
            `} />
            <span className="font-semibold mr-2">{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalInfo;