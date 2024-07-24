/** @format */
"use client";

import { useEffect } from 'react';
import HomePage from "@/components/pages/home/home";
import PlansPage from "@/components/pages/planos/planos";
import AppDownloadPage from '@/components/pages/app/app';
import AboutPage from '@/components/pages/sobre/sobre';
import FeedbackSection from '@/components/pages/feedback/feedback';
import Slide from '@/components/slide/slide';
import Footer from '@/components/footer/footer';

export default function Home() {
  useEffect(() => {
    const handleAnchorScroll = () => {
      // Selecione todos os links com href começando com #
      const anchorLinks = document.querySelectorAll('a[href^="#"]');

      anchorLinks.forEach(anchor => {
        // Certifique-se de que anchor é um HTMLAnchorElement
        const element = anchor as HTMLAnchorElement;

        // Remova listeners existentes para evitar múltiplos handlers
        element.removeEventListener('click', handleClick);

        // Adicione o event listener
        element.addEventListener('click', handleClick);
      });

      // Função para lidar com o clique
      function handleClick(e: Event) {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Ajuste o valor conforme necessário
            behavior: 'smooth'
          });
        }
      }

      // Limpeza de event listeners
      return () => {
        anchorLinks.forEach(anchor => {
          (anchor as HTMLAnchorElement).removeEventListener('click', handleClick);
        });
      };
    };

    handleAnchorScroll();
  }, []);

  return (
    <main className="h-screen">
      <div>
        <HomePage />
        <AboutPage />
        <Slide />
        <AppDownloadPage />
        <FeedbackSection />
        <PlansPage />
        <Footer />

      </div>
    </main>
  );
}
