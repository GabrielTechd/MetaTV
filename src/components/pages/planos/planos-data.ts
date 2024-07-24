export interface Plan {
  title: string;
  price: string;
  monthlyPrice?: string;
  duration: string;
  features: string[];
  link: string; // Novo campo para o link de compra
}

// Ordene os planos por preço (conversão de string para número para a comparação)
const parsePrice = (price: string) => parseFloat(price.replace("R$", "").replace(",", "."));

export const planos: Plan[] = [
  {
    title: "Um dispositivo",
    price: "R$34,85",
    duration: "Um mês",
    features: [
      "Acesso 1 dispositivo + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/um-dispositivo-1-mes" // Exemplo de link
  },
  {
    title: "Dispositivo duplo",
    price: "R$49,50",
    duration: "1 mês",
    features: [
      "Acesso 2 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/dispositivo-duplo-1-mes"
  },
  {
    title: "Dispositivo duplo",
    price: "R$128,31",
    duration: "3 meses",
    features: [
      "Acesso 2 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/dispositivo-duplo-3-meses"
  },
  {
    title: "Um dispositivo",
    price: "R$90,59",
    monthlyPrice: "R$30,32/mês",
    duration: "3 meses",
    features: [
      "Acesso 1 dispositivo + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado Adicionalmente"
    ],
    link: "/comprar/um-dispositivo-3-meses"
  },
  {
    title: "Dispositivo duplo",
    price: "R$238,95",
    duration: "(6+1) meses",
    features: [
      "Acesso 2 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/dispositivo-duplo-6-meses"
  },
  {
    title: "Um dispositivo",
    price: "R$169,26",
    monthlyPrice: "R$21,18/mês",
    duration: "(6+1) meses",
    features: [
      "Acesso 1 dispositivo + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/um-dispositivo-6-meses"
  },
  {
    title: "Quarto dispositivos",
    price: "R$221,23",
    duration: "3 meses",
    features: [
      "Acesso 4 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado Adicionalmente"
    ],
    link: "/comprar/quarto-dispositivos-3-meses"
  },
  {
    title: "Dispositivo duplo",
    price: "R$365,04",
    duration: "(12+2) meses",
    features: [
      "Acesso 2 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/dispositivo-duplo-12-meses"
  },
  {
    title: "Quarto dispositivos",
    price: "R$416,00",
    duration: "(6+1) meses",
    features: [
      "Acesso 4 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/quarto-dispositivos-6-meses"
  },
  {
    title: "Quarto dispositivos",
    price: "R$676,00",
    duration: "(12+2) meses",
    features: [
      "Acesso 4 dispositivos + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/quarto-dispositivos-12-meses"
  },
  {
    title: "Um dispositivo",
    price: "R$263,38",
    monthlyPrice: "R$18,81/mês",
    duration: "(12+2) meses",
    features: [
      "Acesso 1 dispositivo + (1 Celular) por vez",
      "Todos os canais locais brasileiros Live",
      "+15.000 VOD em português e inglês",
      "Suporte UHD e FHD",
      "Suporte para caixa de TV e celular Android (SO minimo 5.1.1 superior)",
      "Excluindo o IVA, que será cobrado adicionalmente"
    ],
    link: "/comprar/um-dispositivo-12-meses"
  }
].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
