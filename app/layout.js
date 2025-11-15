import '../styles/globals.css';

export const metadata = {
  title: 'UPCOIN - O Segredo das Criptos',
  description: 'Aprenda a investir em criptomoedas do zero com nosso ebook completo',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}