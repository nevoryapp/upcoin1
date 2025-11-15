'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FAQ({ isMobile }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      // Limitar a 2 itens abertos simultaneamente
      if (openIndexes.length >= 2) {
        setOpenIndexes([openIndexes[1], index]);
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    }
  };

  const faqs = [
    {
      question: "O ebook é realmente eficaz para iniciantes?",
      answer: "Absolutamente! O UPCOIN foi desenvolvido especificamente para iniciantes, com uma linguagem simples e passo a passo detalhado. Muitos leitores começaram do zero e hoje lucram consistentemente com criptomoedas."
    },
    {
      question: "Quais criptomoedas são recomendadas no ebook?",
      answer: "O ebook aborda estratégias universais que se aplicam a qualquer criptomoeda, incluindo Bitcoin, Ethereum, Ripple e as principais altcoins. Você aprenderá a analisar e escolher as melhores oportunidades do mercado."
    },
    {
      question: "Com que frequência o conteúdo é atualizado?",
      answer: "Oferecemos atualizações gratuitas trimestrais para todos os compradores, mantendo o conteúdo alinhado com as últimas tendências e inovações do mercado de criptomoedas."
    },
    {
      question: "Há algum suporte após a compra?",
      answer: "Sim! Você terá acesso exclusivo ao nosso grupo VIP no WhatsApp por 1 ano, onde poderá tirar dúvidas diretamente com especialistas e interagir com outros investidores."
    },
    {
      question: "Qual formato o ebook é entregue?",
      answer: "O ebook é entregue em formato digital PDF, otimizado para leitura em qualquer dispositivo - computador, tablet ou smartphone. Você também receberá versões em EPUB e MOBI."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se em 7 dias você não estiver completamente satisfeito com o conteúdo do ebook, basta solicitar o reembolso pelo nosso suporte e devolvemos 100% do seu dinheiro. Sem perguntas."
    }
  ];

  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          PERGUNTAS FREQUENTES
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
                aria-expanded={openIndexes.includes(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndexes.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300">{faq.answer}</p>
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
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">AINDA TEM DÚVIDAS?</h3>
          <button className="btn-primary">
            FALAR COM NOSSO TIME
          </button>
        </motion.div>
      </div>
    </section>
  );
}