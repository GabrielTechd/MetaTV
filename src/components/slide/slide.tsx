/** @format */
"use client";

import React from 'react';
import { FaFilm, FaTv, FaPlayCircle, FaUserAlt, FaStar, FaCameraRetro } from 'react-icons/fa';
import { GiFilmSpool, GiPopcorn, GiVideoCamera, GiTicket } from 'react-icons/gi';
import { MdTheaters, MdLocalMovies, MdMovie } from 'react-icons/md';
import { motion } from 'framer-motion';
import './slide.css';

const icons = [
  { Icon: FaFilm, color: "text-red-500" },
  { Icon: FaTv, color: "text-blue-500" },
  { Icon: FaPlayCircle, color: "text-green-500" },
  { Icon: FaUserAlt, color: "text-purple-500" },
  { Icon: FaStar, color: "text-yellow-500" },
  { Icon: GiFilmSpool, color: "text-orange-500" },
  { Icon: GiPopcorn, color: "text-yellow-600" },
  { Icon: GiVideoCamera, color: "text-gray-500" },
  { Icon: MdTheaters, color: "text-indigo-600" },
  { Icon: MdLocalMovies, color: "text-teal-500" },
  { Icon: MdMovie, color: "text-pink-500" },
  { Icon: GiTicket, color: "text-red-600" },
  { Icon: FaCameraRetro, color: "text-blue-400" },
];

const Slide: React.FC = () => {
  return (
    <div className='bg-gray-900'>
      <motion.div
        className="scroll"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="scroll_container">
          {icons.map(({ Icon, color }, index) => (
            <div key={index} className="scroll_item">
              <Icon className={`h-16 w-16 ${color}`} />
            </div>
          ))}
          {icons.map(({ Icon, color }, index) => (
            <div key={index + icons.length} className="scroll_item">
              <Icon className={`h-16 w-16 ${color}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Slide;
