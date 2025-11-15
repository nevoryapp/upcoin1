'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SpecialOffer({ isMobile }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-primary relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">OFERTA EXCLUSIVA POR TEMPO LIMITADO!</h2>
          <p className="text-xl text-dark-900 font-semibold">Aprenda a investir em criptomoedas do zero com desconto especial</p>
        </motion.div>

        {/* Timer principal - elemento de urgência principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="card-glass bg-dark-900 bg-opacity-50 p-6">
            <div className="text-dark-900 font-bold mb-4">OFERTA EXPIRA EM:</div>
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-dark-900 text-white flex items-center justify-center text-2xl font-bold rounded-lg">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <span className="text-dark-900 text-sm mt-2">Horas</span>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl font-bold text-dark-900">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-dark-900 text-white flex items-center justify-center text-2xl font-bold rounded-lg">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-dark-900 text-sm mt-2">Minutos</span>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl font-bold text-dark-900">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-dark-900 text-white flex items-center justify-center text-2xl font-bold rounded-lg">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <span className="text-dark-900 text-sm mt-2">Segundos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preço e CTA - foco na conversão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12"
        >
          <div className="text-center">
            <div className="text-2xl text-dark-900 line-through">R$ 56,00</div>
            <motion.div 
              className="text-5xl font-bold text-dark-900"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              R$ 29,90
            </motion.div>
            <div className="text-dark-900 font-semibold mt-2">OU 3x DE R$ 10,90</div>
          </div>
          
          <div className="h-16 w-px bg-dark-900 hidden md:block"></div>
          
          <div className="text-center">
            <div className="text-2xl text-dark-900 font-bold mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GARANTIA DE 7 DIAS
            </div>
            <p className="text-dark-900 max-w-md">Devolvemos 100% se não ficar satisfeito</p>
          </div>
        </motion.div>

        {/* CTA Principal - único e claro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.button 
            className="bg-dark-900 text-white font-bold py-6 px-12 rounded-full text-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0, 0, 0, 0.3)",
                "0 0 0 15px rgba(0, 0, 0, 0)",
                "0 0 0 0 rgba(0, 0, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            onClick={redirectToCheckout}
          >
            <span className="relative z-10">COMEÇAR A APRENDER AGORA</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0"
              whileHover={{ opacity: 0.2 }}
            />
          </motion.button>
          
          {/* Elementos de confiança - sem distrair do CTA */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-dark-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-dark-900">Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-dark-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-dark-900">Atualizações Gratuitas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}