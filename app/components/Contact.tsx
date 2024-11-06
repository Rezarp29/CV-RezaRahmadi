// components/Contact.tsx
"use client";
import { useState, useEffect } from 'react';
import { FaEnvelope, FaComment, FaStar } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

interface Comment {
  name: string;
  comment: string;
  rating: number;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Calculate average rating whenever comments change
  useEffect(() => {
    if (comments.length > 0) {
      const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
      const average = totalRating / comments.length;
      setAverageRating(average);
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Mohon berikan rating terlebih dahulu');
      return;
    }
    const newComment: Comment = {
      name: formData.name,
      comment: formData.comment,
      rating: formData.rating
    };
    const updatedComments = [newComment, ...comments]; // Add new comment at the beginning
    setComments(updatedComments);
    // Save to localStorage
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', comment: '', rating: 0 });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <section className={`shadow-lg rounded-lg p-6 mt-8
      ${theme === 'light' ? 'bg-white' : ''}
      ${theme === 'dark' ? 'bg-gray-800' : ''}
      ${theme === 'red' ? 'bg-red-800' : ''}
    `}>
      <h2 className={`text-2xl font-bold mb-4 flex items-center
        ${theme === 'light' ? 'text-gray-800' : ''}
        ${theme === 'dark' ? 'text-white' : ''}
        ${theme === 'red' ? 'text-white' : ''}
      `}>
        <FaEnvelope className={`mr-2
          ${theme === 'light' ? 'text-blue-500' : ''}
          ${theme === 'dark' ? 'text-blue-400' : ''}
          ${theme === 'red' ? 'text-red-300' : ''}
        `} />
        Contact Form
      </h2>

      {/* Average Rating Display */}
      <div className={`mb-6 p-4 rounded-lg
        ${theme === 'light' ? 'bg-gray-50' : ''}
        ${theme === 'dark' ? 'bg-gray-700' : ''}
        ${theme === 'red' ? 'bg-red-700' : ''}
      `}>
        <h3 className={`text-lg font-semibold mb-2
          ${theme === 'light' ? 'text-gray-800' : ''}
          ${theme === 'dark' ? 'text-white' : ''}
          ${theme === 'red' ? 'text-white' : ''}
        `}>Average Rating:</h3>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={star <= Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}
              size={24}
            />
          ))}
          <span className={`ml-2
            ${theme === 'light' ? 'text-gray-600' : ''}
            ${theme === 'dark' ? 'text-gray-300' : ''}
            ${theme === 'red' ? 'text-red-200' : ''}
          `}>
            ({averageRating.toFixed(1)}) dari {comments.length} penilaian
          </span>
        </div>
      </div>

      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <p>Terima kasih atas komentar dan penilaian Anda!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={`block font-medium mb-2
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors duration-200
              ${theme === 'light' ? 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500' : ''}
              ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-400' : ''}
              ${theme === 'red' ? 'bg-red-700 text-white border-red-600 focus:ring-red-300' : ''}
            `}
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label htmlFor="comment" className={`block font-medium mb-2 flex items-center
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>
            <FaComment className={`mr-2
              ${theme === 'light' ? 'text-blue-500' : ''}
              ${theme === 'dark' ? 'text-blue-400' : ''}
              ${theme === 'red' ? 'text-red-300' : ''}
            `} />
            Komentar
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors duration-200
              ${theme === 'light' ? 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500' : ''}
              ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-400' : ''}
              ${theme === 'red' ? 'bg-red-700 text-white border-red-600 focus:ring-red-300' : ''}
            `}
            placeholder="Masukkan komentar Anda"
          />
        </div>

        <div className="flex items-center">
          <span className={`mr-4
            ${theme === 'light' ? 'text-gray-700' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"}`}
              size={24}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>

        <button
          type="submit"
          className={`mt-4 px-4 py-2 rounded-lg font-semibold
            ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
            ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
            ${theme === 'red' ? 'bg-red-600 text-white hover:bg-red-700' : ''}
          `}
        >
          Kirim Komentar
        </button>
      </form>

      <div className={`mt-8 ${comments.length > 0 ? 'border-t pt-6' : ''}
        ${theme === 'light' ? 'border-gray-200' : ''}
        ${theme === 'dark' ? 'border-gray-700' : ''}
        ${theme === 'red' ? 'border-red-700' : ''}
      `}>
        {comments.length > 0 && (
          <h3 className={`text-xl font-bold mb-4
            ${theme === 'light' ? 'text-gray-800' : ''}
            ${theme === 'dark' ? 'text-white' : ''}
            ${theme === 'red' ? 'text-white' : ''}
          `}>
            Komentar Terbaru
          </h3>
        )}
        
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className={`p-4 rounded-lg
              ${theme === 'light' ? 'bg-gray-50' : ''}
              ${theme === 'dark' ? 'bg-gray-700' : ''}
              ${theme === 'red' ? 'bg-red-700' : ''}
            `}>
              <div className="flex items-center justify-between mb-2">
                <span className={`font-semibold
                  ${theme === 'light' ? 'text-gray-800' : ''}
                  ${theme === 'dark' ? 'text-white' : ''}
                  ${theme === 'red' ? 'text-white' : ''}
                `}>
                  {comment.name}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= comment.rating ? "text-yellow-400" : "text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
              </div>
              <p className={`text-sm
                ${theme === 'light' ? 'text-gray-600' : ''}
                ${theme === 'dark' ? 'text-gray-300' : ''}
                ${theme === 'red' ? 'text-red-200' : ''}
              `}>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;