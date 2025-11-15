'use client';

import { motion } from 'framer-motion';

export default function EasyLearning() {
  const steps = [
    {
      number: "01",
      title: "Conceitos Básicos",
      description: "Aprenda o que são criptomoedas, blockchain e como tudo funciona do zero",
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Primeiros Passos",
      description: "Crie sua primeira carteira digital e faça seu primeiro investimento com segurança",
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Estratégias Simples",
      description: "Aprenda técnicas comprovadas para investir com baixo risco e bons retornos",
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Lucros Reais",
      description: "Multiplique seu dinheiro com estratégias testadas por especialistas",
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-dark-800 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          APRENDA EM APENAS 4 PASSOS SIMPLES
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Nosso método exclusivo foi criado especialmente para iniciantes, sem complicações
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="card-glass p-8 flex flex-col items-center text-center h-full group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 relative">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-dark-900 font-bold text-lg z-10">
                  {step.number}
                </div>
                <div className="w-20 h-20 bg-dark-700 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 transition-all duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA claro e direto */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="btn-primary text-xl px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={redirectToCheckout}
          >
            COMEÇAR A APRENDER AGORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}