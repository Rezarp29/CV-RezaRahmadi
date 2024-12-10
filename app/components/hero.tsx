"use client";
import Image from 'next/image';
import { FaUniversity, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import foto from "../reza.jpg";

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`
      rounded-lg p-8 flex flex-col md:flex-row items-center shadow-xl
      ${theme === 'light' ? 'bg-gradient-to-r from-blue-100 to-white text-gray-800' : ''}
      ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' : ''}
      ${theme === 'red' ? 'bg-gradient-to-r from-red-700 to-red-900 text-white' : ''}
    `}>
      <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0 px-4">
        <Image
          src={foto}
          alt="Reza Rahmadi Putra Profile Picture"
          width={250}
          height={250}
          className={`rounded-full border-4 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105
            ${theme === 'light' ? 'border-blue-500' : ''}
            ${theme === 'dark' ? 'border-blue-400' : ''}
            ${theme === 'red' ? 'border-red-300' : ''}
          `}
        />
      </div>

      <div className="md:w-2/3 md:pl-6">
        <div className="flex items-center mb-2">
          <FaUser className={`mr-2 text-2xl
            ${theme === 'light' ? 'text-blue-500' : ''}
            ${theme === 'dark' ? 'text-blue-400' : ''}
            ${theme === 'red' ? 'text-red-300' : ''}
          `} />
          <h1 className="text-4xl font-extrabold">Reza Rahmadi Putra</h1>
        </div>

        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className={`mr-2 text-xl
            ${theme === 'light' ? 'text-blue-500' : ''}
            ${theme === 'dark' ? 'text-blue-400' : ''}
            ${theme === 'red' ? 'text-red-300' : ''}
          `} />
          <span className="text-lg font-medium">Bandung, Jawa Barat</span>
        </div>

        <div className="flex items-center mb-4">
          <FaUniversity className={`mr-2 text-2xl
            ${theme === 'light' ? 'text-blue-500' : ''}
            ${theme === 'dark' ? 'text-blue-400' : ''}
            ${theme === 'red' ? 'text-red-300' : ''}
          `} />
          <span className="text-lg font-medium">Mahasiswa S1 Sistem Informasi - Ma'soem University</span>
        </div>

        <div className={`mt-4 text-justify leading-relaxed space-y-4
          ${theme === 'light' ? 'text-gray-700' : ''}
          ${theme === 'dark' ? 'text-gray-300' : ''}
          ${theme === 'red' ? 'text-red-100' : ''}
        `}>
          <p>
            Saya adalah seorang mahasiswa yang penuh semangat dan dedikasi dalam mengejar impian di bidang teknologi informasi. 
            Dengan latar belakang pendidikan di Sistem Informasi, saya memiliki ketertarikan mendalam pada pengembangan software, 
            analisis data, dan solusi teknologi yang dapat memberikan dampak positif bagi masyarakat. Saat ini, saya juga aktif 
            sebagai fotografer dan videografer freelance, mengkombinasikan passion saya di bidang teknologi dengan kreativitas 
            dalam multimedia.
          </p>
          
          <p>
            Sebagai pribadi yang aktif berorganisasi, saya telah membuktikan kemampuan kepemimpinan melalui peran 
            sebagai Ketua UKM Computer Club Universitas Ma'soem untuk dua periode berturut-turut (2023-2024 dan 2024-2025). 
            Selain itu, saya juga aktif terlibat dalam berbagai kepanitiaan event kampus, yang telah mengasah kemampuan 
            manajemen waktu, koordinasi tim, dan problem solving saya. Pengalaman ini telah membantu saya membangun jaringan 
            yang luas dan mengembangkan soft skills yang esensial untuk karir profesional.
          </p>

          <p>
            Sebagai pribadi yang adaptif dan mudah bersosialisasi, saya selalu antusias untuk belajar hal-hal baru dan 
            mengembangkan diri. Saat ini, sambil menjalankan peran kepemimpinan di UKM Computer Club dan menekuni 
            pekerjaan di bidang multimedia, saya terus fokus memperdalam kemampuan dalam pengembangan web, manajemen database, 
            dan analisis sistem. Saya percaya bahwa kombinasi antara pembelajaran akademis, pengalaman organisasi, dan 
            keterampilan praktis dalam teknologi dan multimedia adalah kunci untuk menjadi profesional yang kompeten dan 
            versatil di era digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;