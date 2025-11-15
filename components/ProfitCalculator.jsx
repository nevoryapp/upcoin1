'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProfitCalculator() {
  const [investment, setInvestment] = useState(100);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  const calculateProfit = () => {
    setIsCalculating(true);
    
    // Simulação de cálculo para efeito visual
    setTimeout(() => {
      // Fórmula manipulada para mostrar lucros atraentes
      // Crescimento exponencial simulado com baixo risco
      const monthlyGrowth = 1.15; // 15% ao mês (número atrativo)
      const finalValue = investment * Math.pow(monthlyGrowth, months);
      const profit = finalValue - investment;
      
      setResult({
        finalValue: finalValue.toFixed(2),
        profit: profit.toFixed(2),
        roi: ((profit / investment) * 100).toFixed(2)
      });
      
      setIsCalculating(false);
    }, 800);
  };

  const examples = [
    { investment: 50, months: 6, profit: "R$ 150,00" },
    { investment: 100, months: 12, profit: "R$ 450,00" },
    { investment: 200, months: 12, profit: "R$ 1.200,00" }
  ];

  return (
    <section className="section bg-gradient-to-br from-dark-900 to-dark-800">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-app">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CALCULE SEU POTENCIAL LUCRO
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Veja como pouco investimento pode gerar grandes retornos com nossa estratégia comprovada
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculadora */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Simulador de Lucro</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Investimento Inicial (R$)</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-gray-400 mt-1">
                    <span>R$ 50</span>
                    <motion.span 
                      className="text-primary-500 font-bold text-xl"
                      key={investment}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      R$ {investment}
                    </motion.span>
                    <span>R$ 1.000</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Período (meses)</label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-gray-400 mt-1">
                    <span>1 mês</span>
                    <motion.span 
                      className="text-primary-500 font-bold text-xl"
                      key={months}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {months} meses
                    </motion.span>
                    <span>24 meses</span>
                  </div>
                  </div>
              </div>
              
              <motion.button
                className="btn-primary w-full py-4 relative animate-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateProfit}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    CALCULANDO...
                  </div>
                ) : (
                  "CALCULAR LUCRO POTENCIAL"
                )}
              </motion.button>
            </div>
            
            {/* Resultado com animação */}
            {result && (
              <motion.div
                className="mt-8 p-6 bg-dark-700 rounded-lg border border-primary-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-bold mb-4 text-center">Resultado da Simulação</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-green-500">R$ {result.finalValue}</div>
                    <div className="text-gray-400">Valor Final</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-2xl font-bold text-primary-500">R$ {result.profit}</div>
                    <div className="text-gray-400">Lucro Líquido</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-2xl font-bold text-yellow-500">{result.roi}%</div>
                    <div className="text-gray-400">Retorno</div>
                  </motion.div>
                </div>
                
                <motion.div
                  className="mt-6 p-4 bg-dark-800 rounded-lg border border-green-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-center text-gray-300">
                    <span className="text-green-500 font-bold">Zero risco de perda</span> com nossa estratégia protegida
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
          
          {/* Exemplos e CTA */}
          <div>
            <div className="card-glass p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Resultados Reais de Iniciantes</h3>
              
              <div className="space-y-4">
                {examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-dark-700 rounded-lg border-l-4 border-primary-500 hover:border-primary-400 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold">Investimento: R$ {example.investment}</div>
                        <div className="text-gray-400">Período: {example.months} meses</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-500">{example.profit}</div>
                        <div className="text-gray-400">de lucro</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-6 p-4 bg-dark-800 rounded-lg border border-green-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-center text-gray-300">
                  <span className="text-green-500 font-bold">100% de sucesso</span> com nossa metodologia exclusiva
                </p>
              </motion.div>
            </div>
            
            {/* CTA Principal */}
            <motion.div
              className="card-glass p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">COMECE COM APENAS R$ 50</h3>
              <p className="text-gray-300 mb-6">
                Nosso ebook ensina exatamente como replicar esses resultados com segurança
              </p>
              <motion.button
                className="btn-primary w-full py-4 animate-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={redirectToCheckout}
              >
                GARANTIR EBOOK AGORA - R$ 29,90
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}