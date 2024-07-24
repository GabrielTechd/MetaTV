import React from 'react';
import { motion } from 'framer-motion';
import { Feedback, feedbacks } from './feedbackData'; // Importe o tipo e os dados

const FeedbackSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 text-center text-gradient">
          O que nossos usuários dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={feedback.photo}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{feedback.name}</h3>
                  <div className="flex items-center">
                    {[...Array(feedback.stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5L12 2z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400">{feedback.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
