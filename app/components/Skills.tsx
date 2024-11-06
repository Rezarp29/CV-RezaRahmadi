// components/Skills.tsx
import { FaCode, FaPaintBrush, FaFileAlt, FaVideo } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const SkillBar: React.FC<{ skill: string; percentage: number; icon: React.ReactNode }> = ({ skill, percentage, icon }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        {icon}
        <span className={`text-lg font-semibold ml-2
          ${theme === 'light' ? 'text-gray-800' : ''}
          ${theme === 'dark' ? 'text-white' : ''}
          ${theme === 'red' ? 'text-white' : ''}
        `}>{skill}</span>
        <span className={`ml-auto font-medium
          ${theme === 'light' ? 'text-gray-700' : ''}
          ${theme === 'dark' ? 'text-gray-300' : ''}
          ${theme === 'red' ? 'text-red-200' : ''}
        `}>{percentage}%</span>
      </div>
      <div className={`w-full rounded-full h-3
        ${theme === 'light' ? 'bg-gray-200' : ''}
        ${theme === 'dark' ? 'bg-gray-700' : ''}
        ${theme === 'red' ? 'bg-red-700' : ''}
      `}>
        <div 
          className={`h-3 rounded-full transition-all duration-300 ease-in-out
            ${theme === 'light' ? 'bg-blue-500' : ''}
            ${theme === 'dark' ? 'bg-blue-400' : ''}
            ${theme === 'red' ? 'bg-red-400' : ''}
          `}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skills = [
    { name: 'MS. Office', percentage: 75, icon: <FaFileAlt className={`text-xl ${theme === 'light' ? 'text-blue-500' : theme === 'dark' ? 'text-blue-400' : 'text-red-300'}`} /> },
    { name: 'Web Development', percentage: 90, icon: <FaCode className={`text-xl ${theme === 'light' ? 'text-blue-500' : theme === 'dark' ? 'text-blue-400' : 'text-red-300'}`} /> },
    { name: 'Desain Grafis', percentage: 75, icon: <FaPaintBrush className={`text-xl ${theme === 'light' ? 'text-blue-500' : theme === 'dark' ? 'text-blue-400' : 'text-red-300'}`} /> },
    { name: 'Video Editing', percentage: 70, icon: <FaVideo className={`text-xl ${theme === 'light' ? 'text-blue-500' : theme === 'dark' ? 'text-blue-400' : 'text-red-300'}`} /> },
  ];

  return (
    <section className={`shadow-lg rounded-lg p-6
      ${theme === 'light' ? 'bg-white' : ''}
      ${theme === 'dark' ? 'bg-gray-800' : ''}
      ${theme === 'red' ? 'bg-red-800' : ''}
    `}>
      <h2 className={`text-2xl font-bold mb-6 flex items-center
        ${theme === 'light' ? 'text-gray-800' : ''}
        ${theme === 'dark' ? 'text-white' : ''}
        ${theme === 'red' ? 'text-white' : ''}
      `}>
        <FaCode className={`mr-2
          ${theme === 'light' ? 'text-blue-500' : ''}
          ${theme === 'dark' ? 'text-blue-400' : ''}
          ${theme === 'red' ? 'text-red-300' : ''}
        `} />
        Skills
      </h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            skill={skill.name} 
            percentage={skill.percentage} 
            icon={skill.icon} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;