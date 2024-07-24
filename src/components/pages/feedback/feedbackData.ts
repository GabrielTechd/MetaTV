// src/feedbackData.ts

export type Feedback = {
  name: string;
  stars: number;
  comment: string;
  photo: string;
};

export const feedbacks: Feedback[] = [
  {
    name: 'João Silva',
    stars: 5,
    comment: 'Excelente app! Muito fácil de usar e com uma ótima seleção de filmes e séries. A melhor experiência de streaming!',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg', // Foto genérica
  },
  {
    name: 'Maria Oliveira',
    stars: 4,
    comment: 'Bom aplicativo com uma interface amigável. A biblioteca é vasta e o desempenho é muito bom. Um pouco mais de personalização seria perfeito!',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg', // Foto genérica
  },
  {
    name: 'Carlos Pereira',
    stars: 5,
    comment: 'Adoro este app! A qualidade do streaming é excepcional e a seleção de conteúdo é sempre atualizada. Recomendo muito!',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg', // Foto genérica
  },
  {
    name: 'Ana Souza',
    stars: 4,
    comment: 'App muito bom com uma seleção de conteúdos impressionante. A navegação é intuitiva e a experiência geral é ótima. Algumas pequenas melhorias seriam bem-vindas!',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg', // Foto genérica
  },
  {
    name: 'Ricardo Lima',
    stars: 4,
    comment: 'O app é excelente com uma ótima biblioteca de filmes e séries. Encontrei alguns pequenos problemas técnicos, mas nada que afete muito a experiência.',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg', // Foto genérica
  },
  {
    name: 'Fernanda Costa',
    stars: 5,
    comment: 'Fantástico! A qualidade dos vídeos é sempre alta e a experiência de usuário é muito fluida. O suporte ao cliente é muito responsivo e útil.',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg', // Foto genérica
  },
  {
    name: 'Paulo Martins',
    stars: 5,
    comment: 'O app superou minhas expectativas! Navegar entre filmes e séries é um prazer, e a qualidade de streaming é sempre excelente.',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg', // Foto genérica
  },
  {
    name: 'Juliana Ferreira',
    stars: 4,
    comment: 'Ótimo app com uma interface agradável e fácil de usar. A experiência geral é muito boa, embora sempre haja espaço para algumas melhorias.',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg', // Foto genérica
  },
  {
    name: 'Eduardo Campos',
    stars: 5,
    comment: 'Uma experiência de streaming incrível! O app é rápido, responsivo e a seleção de conteúdo é excelente. Altamente recomendado!',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg', // Foto genérica
  },
];
