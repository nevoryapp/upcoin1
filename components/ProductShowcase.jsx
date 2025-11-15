'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductShowcase({ isMobile }) {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: "Introdução ao Mundo das Criptos",
      description: "Entenda o que são criptomoedas, blockchain e como tudo começou."
    },
    {
      title: "Fundamentos do Investimento",
      description: "Aprenda os princípios básicos de investimento aplicados às criptomoedas."
    },
    {
      title: "Análise Técnica Avançada",
      description: "Domine as ferramentas para prever movimentos de mercado."
    },
    {
      title: "Estratégias de Lucro",
      description: "Descubra técnicas comprovadas para multiplicar seus ganhos."
    },
    {
      title: "Segurança e Proteção",
      description: "Proteja seus ativos com as melhores práticas do mercado."
    },
    {
      title: "Futuro das Criptomoedas",
      description: "Explore as tendências que moldarão o futuro do setor."
    }
  ];

  return (
    <section className="section bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O QUE VOCÊ VAI APRENDER
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Um guia completo dividido em 6 capítulos estratégicos
        </motion.p>

        <div className="container-app flex flex-col lg:flex-row gap-8 items-center">
          {/* Mockup do Ebook */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 bg-gradient-primary rounded-2xl shadow-soft-lg transform rotate-3"></div>
              <div className="absolute inset-0 w-64 h-80 md:w-80 md:h-96 bg-dark-700 rounded-2xl shadow-soft-lg transform -rotate-3 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="bg-dark-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">UPCOIN</h3>
                  <p className="text-primary-500 font-semibold">O Segredo das Criptos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lista de Capítulos */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {chapters.map((chapter, index) => (
                <div 
                  key={index}
                  className={`card-glass p-6 cursor-pointer transition-all duration-300 hover:shadow-soft ${
                    activeChapter === index ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setActiveChapter(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      activeChapter === index ? 'bg-primary-500' : 'bg-dark-700'
                    }`}>
                      <span className={`font-bold ${activeChapter === index ? 'text-dark-900' : 'text-gray-400'}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{chapter.title}</h3>
                      <p className="text-gray-400">{chapter.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="btn-primary animate-glow">
            GARANTA SEU EBOOK AGORA
          </button>
        </motion.div>
      </div>
    </section>
  );
}