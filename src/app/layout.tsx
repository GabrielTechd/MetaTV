import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaTV - Transforme Seu Entretenimento",
  description: "Meta TV é seu destino definitivo para assistir filmes, séries e TV ao vivo. Explore uma vasta coleção de conteúdos e tenha acesso aos seus programas favoritos a qualquer hora, em qualquer lugar.",
  keywords: "MetaTV, filmes, séries, TV ao vivo, streaming, IPTV, entretenimento, novelas, futebol ao vivo, conteúdo on-demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
