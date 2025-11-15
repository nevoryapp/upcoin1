'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection({ isMobile }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNotification, setCurrentNotification] = useState(null);
  const fullText = "COMECE A LUCRAR COM CRIPTOMOEDAS HOJE";

  // Efeito typewriter
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Notificações de compra em tempo real (uma por vez)
  useEffect(() => {
    const names = ["Carlos", "Maria", "Roberto", "Ana", "Pedro", "Juliana", "Marcos", "Fernanda"];
    const cities = [
      "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília",
      "Curitiba", "Porto Alegre", "Salvador", "Fortaleza",
      "Recife", "Campinas", "Goiânia", "Manaus"
    ];
    
    const generateNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const newNotification = {
        id: Date.now(),
        name: randomName,
        city: randomCity,
        timestamp: new Date()
      };
      
      setCurrentNotification(newNotification);
    };

    // Gera notificações a cada 3-8 segundos (muito mais frequente)
    const interval = setInterval(generateNotification, Math.random() * 5000 + 3000);
    
    // Gera a primeira notificação imediatamente
    generateNotification();
    
    return () => clearInterval(interval);
  }, []);

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 px-4 py-16">
      {/* Partículas de fundo melhoradas */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500 opacity-20"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Notificação de compra em tempo real (uma por vez) - menor e mais rápida */}
      {currentNotification && (
        <motion.div
          key={currentNotification.id}
          className="fixed top-20 right-4 z-50 w-64 max-w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.2 }} // Transição ainda mais rápida
        >
          <div className="bg-dark-700 border-l-2 border-primary-500 p-3 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-white truncate">{currentNotification.name} ({currentNotification.city})</p>
                <p className="text-xs text-gray-400">Acabou de comprar!</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}
          <motion.span
            className="inline-block w-1 h-16 bg-primary-500 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubra o segredo para investir em criptomoedas mesmo sem experiência
        </motion.p>
        
        {/* Foco principal no CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Botão CTA principal com destaque */}
          <motion.button 
            className="btn-primary mb-6 relative text-lg px-10 py-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 107, 0, 0.7)",
                "0 0 0 15px rgba(255, 107, 0, 0)",
                "0 0 0 0 rgba(255, 107, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            onClick={redirectToCheckout}
          >
            QUERO APRENDER AGORA
          </motion.button>
          
          {/* Badge de confiança */}
          <div className="inline-flex items-center gap-2 bg-dark-700 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Aprenda do zero ao avançado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}