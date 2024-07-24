import React from 'react';
import { motion } from 'framer-motion';

const InstallationPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gradient">
          Como Instalar
        </h1>

        {/* Seção: Baixar em Celular */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="flex-1 md:ml-8 md:order-2">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Baixar em Celular</h2>
            <ul className="list-disc pl-5 space-y-4 text-lg">
              <li>Clique em download Android Celular e confirme o download.</li>
              <li>Clique em abrir e selecione a opção instalar.</li>
              <li>Selecione a opção “Mais detalhes” e clique em “Instalar mesmo assim”.</li>
              <li>Aguarde a instalação e abra, aproveite agora!</li>
            </ul>
          </div>
          <div className="flex-1 md:order-1 mt-8 md:mt-0">
            <div className="relative aspect-w-16 w aspect-h-9">
              <iframe
                className='w-full h-96'
                src="https://www.youtube.com/embed/zGjd75fbbtQ"
                title="Meta TV o melhor streaming que combina vivo e vod"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Seção: Baixar em Smart TV e TV Box */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="flex-1 md:order-1">
            <h2 className="text-2xl font-bold mb-6 text-gradient">INSTALAR EM SMART TV</h2>
            <p className="text-lg">Clique no vídeo para etapas detalhadas de instalação.</p>
          </div>
          <div className="flex-1 md:order-2 mt-8 md:mt-0">
            <video className="w-full h-auto object-cover rounded-lg shadow-lg" controls>
              <source src="https://www.meta-tv.net/_nuxt/videos/6cf305f7a74b72480ea8103092aa2919.40e85a6.mp4" type="video/mp4" />
              Seu navegador não suporta o formato de vídeo.
            </video>
          </div>
        </motion.div>

        {/* Seção: INSTALAR EM TV BOX */}
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="flex-1 md:ml-8 md:order-2">
            <h2 className="text-2xl font-bold mb-6 text-gradient">INSTALAR EM TV BOX</h2>
            <p className="text-lg">Clique no vídeo para etapas detalhadas de instalação.</p>
          </div>
          <div className="flex-1 md:order-1 mt-8 md:mt-0">
            <video className="w-full h-auto object-cover rounded-lg shadow-lg" controls>
              <source src="https://www.meta-tv.net/_nuxt/videos/250dcccb78b81cd1e7703b427be8fdc3.9dc5395.mp4" type="video/mp4" />
              Seu navegador não suporta o formato de vídeo.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstallationPage;
