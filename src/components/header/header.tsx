"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";
import "./header.css";

export default function Header() {
  useEffect(() => {
    // Seleciona os elementos do DOM
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");

    // Função para alternar a classe 'active'
    const handleHamburguerClick = () => {
      hamburguer?.classList.toggle('active');
      navMenu?.classList.toggle('active');
    };

    // Adiciona o event listener
    hamburguer?.addEventListener("click", handleHamburguerClick);

    // Limpeza do event listener quando o componente for desmontado
    return () => {
      hamburguer?.removeEventListener("click", handleHamburguerClick);
    };
  }, []); // O array vazio garante que o effect seja executado apenas uma vez

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="./logo.png" alt="Meta TV Logo" />
          </a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#app">App</a></li>
            <li><a href="#feedbacks">Feedbacks</a></li>
            <li><a href="#planos">Planos</a></li>
          </ul>
        </nav>
        <div className="login">
          <Button variant="default">Assine agora</Button>
        </div>
        <div className="hamburguer">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}