// components/MyGallery.tsx
import Image from 'next/image';
import { FaCamera } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import swimmingImg from "../swimming.jpg";
import videoImg from "../video.jpg";
import playgameImg from "../playgame.jpg";
import travelingImg from "../traveling.jpg";

const HobbyCard: React.FC<{ title: string; description: string; image: any }> = ({ title, description, image }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg shadow-md overflow-hidden flex flex-col
      ${theme === 'light' ? 'bg-white' : ''}
      ${theme === 'dark' ? 'bg-gray-700' : ''}
      ${theme === 'red' ? 'bg-red-700' : ''}
    `}>
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className={`text-xl font-semibold mb-2
          ${theme === 'light' ? 'text-gray-800' : ''}
          ${theme === 'dark' ? 'text-white' : ''}
          ${theme === 'red' ? 'text-white' : ''}
        `}>{title}</h3>
        <p className={`
          ${theme === 'light' ? 'text-gray-600' : ''}
          ${theme === 'dark' ? 'text-gray-300' : ''}
          ${theme === 'red' ? 'text-red-100' : ''}
        `}>{description}</p>
      </div>
    </div>
  );
};

const MyGallery: React.FC = () => {
  const { theme } = useTheme();
  
  const hobbies = [
    {
      title: "Berenang",
      description: "Berenang menjadi hobi yang terjangkau dan menyehatkan bagi saya. Di akhir pekan, menghabiskan waktu di kolam renang umum atau di fasilitas perumahan memberikan kesegaran setelah seminggu penuh bekerja. Selain itu, berenang adalah latihan fisik yang menyenangkan dan membuat tubuh tetap bugar.",
      image: swimmingImg
    },
    {
      title: "Videografi",
      description: "Videografi menjadi media saya untuk mengekspresikan kreativitas dan merekam momen berharga bersama keluarga atau teman. Dengan menggunakan kamera ponsel atau alat sederhana, saya bisa mengabadikan momen penting seperti perayaan keluarga, liburan, atau sekadar jalan-jalan. Mengedit video untuk diunggah ke media sosial juga menjadi kesenangan tersendiri.",
      image: videoImg
    },
    {
      title: "Bermain Game",
      description: "Game menjadi hiburan yang terjangkau di rumah. Dari bermain game di ponsel hingga konsol, ini bukan hanya soal hiburan, tapi juga kesempatan untuk bersosialisasi dengan teman dan keluarga. Bermain game memberi kesempatan untuk rileks dan melepas stres setelah hari yang panjang.",
      image: playgameImg
    },
    {
      title: "Bepergian",
      description: "Bepergian adalah hobi yang selalu memberi pengalaman baru, meski dengan anggaran sederhana. Menjelajahi tempat wisata lokal atau destinasi terjangkau di sekitar kota memberikan kesenangan dan kesempatan untuk melepas penat. Meski belum jauh ke luar negeri, setiap perjalanan tetap memberi cerita dan pengalaman baru.",
      image: travelingImg
    }
  ];      

  return (
    <section className={`py-8
      ${theme === 'light' ? 'bg-gray-100' : ''}
      ${theme === 'dark' ? 'bg-gray-900' : ''}
      ${theme === 'red' ? 'bg-red-900' : ''}
    `}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-6 flex items-center justify-center
          ${theme === 'light' ? 'text-gray-800' : ''}
          ${theme === 'dark' ? 'text-white' : ''}
          ${theme === 'red' ? 'text-white' : ''}
        `}>
          <FaCamera className={`mr-2
            ${theme === 'light' ? 'text-blue-500' : ''}
            ${theme === 'dark' ? 'text-blue-400' : ''}
            ${theme === 'red' ? 'text-red-300' : ''}
          `} />
          My Hobby Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyGallery;