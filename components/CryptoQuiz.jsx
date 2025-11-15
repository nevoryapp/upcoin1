'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CryptoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Qual seu principal objetivo com criptomoedas?",
      options: [
        { text: "Preservar meu dinheiro da inflação", value: "conservador" },
        { text: "Aumentar minha renda mensal", value: "renda" },
        { text: "Construir riqueza a longo prazo", value: "riqueza" },
        { text: "Aprender sobre tecnologia financeira", value: "aprendizado" }
      ]
    },
    {
      id: 2,
      question: "Quanto você gostaria de investir inicialmente?",
      options: [
        { text: "Até R$ 100", value: "baixo" },
        { text: "Entre R$ 100 e R$ 500", value: "medio" },
        { text: "Entre R$ 500 e R$ 1.000", value: "alto" },
        { text: "Mais de R$ 1.000", value: "muito_alto" }
      ]
    },
    {
      id: 3,
      question: "Qual sua experiência com investimentos?",
      options: [
        { text: "Nenhuma experiência", value: "nenhuma" },
        { text: "Pouca experiência (poupança, CDB)", value: "pouca" },
        { text: "Experiência moderada (ações, fundos)", value: "moderada" },
        { text: "Muita experiência (day trade, forex)", value: "muita" }
      ]
    }
  ];

  // Função para redirecionar ao checkout
  const redirectToCheckout = () => {
    window.open('https://pay.kiwify.com.br/vIpQ4tB?afid=sQ8RUc5h', '_blank');
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular resultado baseado nas respostas
      calculateResult(newAnswers);
      setShowResult(true);
    }
  };

  const calculateResult = (answers) => {
    // Lógica simples para determinar o perfil
    const perfil = answers[0].value; // Baseado no objetivo principal
    setResult({
      perfil,
      title: "Você precisa deste ebook!",
      message: "Nosso guia foi criado especialmente para pessoas como você que querem começar a investir em criptomoedas de forma segura e inteligente. Com as estratégias certas, você pode alcançar seus objetivos financeiros sem correr riscos desnecessários."
    });
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  return (
    <section className="section bg-dark-800">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-app max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          DESCUBRA SEU PERFIL DE INVESTIDOR
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Responda algumas perguntas e descubra por que este ebook é exatamente o que você precisa
        </motion.p>

        <div className="card-glass p-8">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Pergunta {currentQuestion + 1} de {questions.length}</span>
                    <span className="text-gray-400">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full" 
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-center">{questions[currentQuestion].question}</h3>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className="w-full text-left p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-all duration-300 border border-dark-600 hover:border-primary-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{result.title}</h3>
                  <p className="text-gray-300 mb-8">{result.message}</p>
                </div>

                {/* CTA manipulativo */}
                <motion.div
                  className="bg-dark-700 p-6 rounded-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-primary-500">Por que este ebook é perfeito para você:</h4>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Explicado de forma simples, sem termos técnicos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Passo a passo comprovado por iniciantes reais</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Risco mínimo, retorno máximo garantido</span>
                    </li>
                  </ul>
                  
                  <motion.button
                    className="btn-primary w-full animate-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={redirectToCheckout}
                  >
                    GARANTIR EBOOK AGORA - R$ 29,90
                  </motion.button>
                </motion.div>

                <button
                  className="text-primary-500 hover:text-primary-400 transition-colors"
                  onClick={restartQuiz}
                >
                  Refazer teste
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}