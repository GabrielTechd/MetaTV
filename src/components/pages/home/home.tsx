"use client";

import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionButton = motion(Button); // Cria uma versão animada do botão

const HomePage = () => {
  return (
    <>

      <div className="relative min-h-screen bg-dark-bg text-dark-text flex items-center justify-center">
        {/* Fundo com imagem ou GIF */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            {/* GIF de fundo com efeito de câmera lenta */}
            <Image
              src="/gif.gif" // Caminho do GIF
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0 blur-md shadow-lg"
            />
            {/* Sobreposição para escurecer o fundo */}
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
          </div>
        </div>

        {/* Conteúdo da Página */}
        <div className="relative  z-20 max-w-4xl p-6 flex flex-col items-start justify-center text-start md:mr-96">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
              className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl"
            >
              Transforme seu entretenimento com o <span className="text-teal-400">Meta TV</span>!
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
              className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl"
            >
              Mergulhe em uma nova era de entretenimento com o Meta TV. Explore uma vasta biblioteca de filmes, séries e TV com qualidade de imagem incomparável e recomendações personalizadas. O próximo grande show da sua vida está a um clique de distância. Descubra o futuro do entretenimento agora mesmo!
            </motion.p>



            {/* Botões com animações de entrada */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <MotionButton
                variant="default"
                className='text-white duration-500'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.2 }}
              >
                Venha conhecer !
              </MotionButton>
              <MotionButton
                variant="outline"
                className='text-white duration-500'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.4 }}
              >
                Baixe agora !
              </MotionButton>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
