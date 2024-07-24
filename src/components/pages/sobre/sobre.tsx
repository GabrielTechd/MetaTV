import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });
  const [isMuted, setIsMuted] = useState(true);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
    }
  }, [inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    animating: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'mirror' as const,
      },
    },
    still: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="./bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40 blur-lg"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <motion.div
          ref={containerRef}
          className="relative mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            loop
            controls
            muted={isMuted}
            ref={videoRef}
            onClick={handleVideoClick}
            src="./promo-video.mp4"
          >
            Seu navegador não suporta o formato de vídeo.
          </video>
          <motion.button
            className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
            onClick={handleMuteToggle}
            variants={buttonVariants}
            animate={isMuted ? 'animating' : 'still'}
          >
            {isMuted ? 'Ativar Som' : 'Desativar Som'}
          </motion.button>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-gradient">
            Descubra o Meta TV
          </h1>
          <p className="text-lg mb-8">
            Com o Meta TV, você pode assistir a filmes, séries e muito mais em qualquer lugar! Experimente uma nova maneira de desfrutar do seu entretenimento favorito com uma interface fácil de usar e funcionalidades incríveis.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            Conheça o App
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
