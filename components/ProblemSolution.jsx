'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolution({ isMobile }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const problems = [
    {
      title: "Falta de Conhecimento Técnico",
      content: "Muitos investidores entram no mundo das criptomoedas sem entender como elas funcionam, levando a decisões equivocadas e perdas financeiras."
    },
    {
      title: "Mercado Volátil e Imprevisível",
      content: "A volatilidade extrema do mercado faz com que muitos investidores fiquem perdidos, sem saber quando comprar ou vender."
    },
    {
      title: "Informações Conflitantes",
      content: "A quantidade massiva de informações disponíveis muitas vezes é contraditória, confundindo ainda mais os iniciantes."
    },
    {
      title: "Medo de Começar",
      content: "O medo do desconhecido impede muitos de darem o primeiro passo, perdendo oportunidades valiosas."
    }
  ];

  return (
    <section className="py-16 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          VOCÊ JÁ SE IDENTIFICOU COM ALGUM DESTES PROBLEMAS?
        </motion.h2>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="card-glass overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300">{problem.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">EXISTE UMA SOLUÇÃO MELHOR!</h3>
          <p className="text-xl text-primary-500 font-semibold mb-8">
            O UPCOIN: O Segredo das Criptos é o guia definitivo para você dominar o mundo das criptomoedas.
          </p>
          <button className="btn-primary">
            DESCUBRA O SEGREDO AGORA
          </button>
        </motion.div>
      </div>
    </section>
  );
}