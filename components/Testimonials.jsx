'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials({ isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  // Testemunhos com fotos reais (usando placeholders por enquanto)
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      age: 32,
      city: "São Paulo, SP",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      text: "Comecei do zero e em 3 meses já tinha dobrado meu dinheiro. O ebook explica tudo de forma simples e prática.",
      investment: "R$ 150",
      profit: "R$ 320"
    },
    {
      id: 2,
      name: "Maria Oliveira",
      age: 28,
      city: "Rio de Janeiro, RJ",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      text: "Nunca tinha investido em nada antes. Agora trabalho com criptos há 6 meses e minha renda extra é maior que meu salário.",
      investment: "R$ 80",
      profit: "R$ 540"
    },
    {
      id: 3,
      name: "Roberto Santos",
      age: 45,
      city: "Belo Horizonte, MG",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      text: "Aposentado e com medo de perder dinheiro. O método é seguro e fácil de seguir. Já tenho R$ 2.000 de lucro em 4 meses.",
      investment: "R$ 300",
      profit: "R$ 2.000"
    },
    {
      id: 4,
      name: "Ana Costa",
      age: 35,
      city: "Porto Alegre, RS",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      text: "Mãe de dois filhos e sem tempo para complicação. O passo a passo é tão simples que até eu consegui lucrar.",
      investment: "R$ 100",
      profit: "R$ 450"
    },
    {
      id: 5,
      name: "Pedro Almeida",
      age: 29,
      city: "Curitiba, PR",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      text: "Trabalho com TI mas nunca entendi investimentos. Este ebook me fez ganhar R$ 1.200 em 2 meses sem riscos.",
      investment: "R$ 200",
      profit: "R$ 1.200"
    }
  ];

  // Auto avançar carousel
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  return (
    <section className="py-16 px-4 bg-dark-800 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O QUE NOSSOS LEITORES DIZEM
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Histórias reais de pessoas comuns que começaram do zero e hoje lucram consistentemente
        </motion.p>

        {/* Carousel para mobile */}
        {isMobile ? (
          <div className="relative h-96">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 card-glass p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-primary p-1 mx-auto mb-4 overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].photo} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-400">{testimonials[currentIndex].age} anos, {testimonials[currentIndex].city}</p>
              </div>
              
              <p className="text-gray-300 mb-6 italic text-lg">"{testimonials[currentIndex].text}"</p>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="bg-dark-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Investido</div>
                  <div className="font-bold text-green-500 text-xl">{testimonials[currentIndex].investment}</div>
                </div>
                <div className="bg-dark-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Lucro</div>
                  <div className="font-bold text-primary-500 text-xl">{testimonials[currentIndex].profit}</div>
                </div>
              </div>
            </motion.div>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-80 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary-500' : 'bg-dark-700'}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid para desktop */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="card-glass p-8 flex flex-col items-center text-center h-full hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary p-1 mx-auto mb-4 overflow-hidden">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.age} anos, {testimonial.city}</p>
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-dark-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Investido</div>
                    <div className="font-bold text-green-500 text-xl">{testimonial.investment}</div>
                  </div>
                  <div className="bg-dark-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Lucro</div>
                    <div className="font-bold text-primary-500 text-xl">{testimonial.profit}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Selos de confiança */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl font-bold text-primary-500 mb-2">1.200+</div>
            <div className="text-gray-400">Leitores Satisfeitos</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-5xl font-bold text-green-500 mb-2">98%</div>
            <div className="text-gray-400">Taxa de Sucesso</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-yellow-500 mb-2">R$ 2.5M</div>
            <div className="text-gray-400">Lucro Total</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="text-5xl font-bold text-blue-500 mb-2">6</div>
            <div className="text-gray-400">Meses Média</div>
          </motion.div>
        </div>

        {/* CTA claro */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="btn-primary text-xl px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={redirectToCheckout}
          >
            COMEÇAR A LUCRAR AGORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}