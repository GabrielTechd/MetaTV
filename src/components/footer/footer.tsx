// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* About Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h6 className="text-white text-lg uppercase mb-4">Sobre</h6>
            <p className="text-base leading-relaxed">
              O Meta TV é uma iniciativa para oferecer a melhor experiência de streaming para você. Oferecemos uma vasta seleção de filmes, séries e conteúdos de TV, com a melhor qualidade de vídeo e áudio. Acreditamos que assistir TV deve ser simples e prazeroso.
            </p>
          </div>

          {/* Categories Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h6 className="text-white text-lg uppercase mb-4">Categorias</h6>
            <ul className="list-none pl-0 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Filmes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Séries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Desenhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Cinemas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Personagens</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Conteúdos Especiais</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full lg:w-1/3 px-4 mb-8 md:mb-0">
            <h6 className="text-white text-lg uppercase mb-4">Links Rápidos</h6>
            <ul className="list-none pl-0 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Contribua</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Mapa do Site</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-600 opacity-50 my-8" />
        
        <div className="flex flex-wrap -mx-4">
          {/* Copyright Section */}
          <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0 text-center md:text-left">

          </div>

          {/* Social Icons Section */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 text-center md:text-right">
            <ul className="list-none pl-0 flex justify-center md:justify-end space-x-4">
              <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200"><FaFacebookF /></a></li>
              <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-200"><FaTwitter /></a></li>
              <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-200"><FaDribbble /></a></li>
              <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-200"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
