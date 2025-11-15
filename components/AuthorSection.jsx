'use client';

import { motion } from 'framer-motion';

export default function AuthorSection({ isMobile }) {
  return (
    <section className="section bg-dark-800">
      <div className="container-app">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CONHEÇA SEU AUTOR
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem do Autor */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-primary rounded-full"></div>
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 bg-dark-700 rounded-full flex items-center justify-center border-4 border-dark-900">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-64 md:h-64" />
              </div>
            </div>
          </motion.div>

          {/* Informações do Autor */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Alexandre Crypto</h3>
            <p className="text-primary-500 font-semibold mb-6">Especialista em Criptomoedas e Blockchain</p>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                Com mais de 8 anos de experiência no mercado de criptomoedas, Alexandre já ajudou milhares de pessoas a entenderem e lucrarem com o mundo das criptos.
              </p>
              <p>
                Formado em Engenharia de Software e pós-graduado em Finanças Digitais, ele é reconhecido internacionalmente por suas análises precisas e estratégias inovadoras.
              </p>
              <p>
                Autor de diversos artigos publicados em revistas especializadas, Alexandre é também fundador da maior comunidade brasileira de investidores em criptomoedas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="card-glass p-4 text-center">
                <div className="text-2xl font-bold text-primary-500">8+</div>
                <p className="text-sm text-gray-400">Anos de Experiência</p>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-2xl font-bold text-primary-500">10k+</div>
                <p className="text-sm text-gray-400">Alunos Impactados</p>
              </div>
            </div>

            <button className="btn-primary animate-glow">
              CONHECER ESTRATÉGIAS
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}