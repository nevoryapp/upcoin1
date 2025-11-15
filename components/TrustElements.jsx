'use client';

import { motion } from 'framer-motion';

export default function TrustElements() {
  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "American Express", icon: "💳" },
    { name: "PayPal", icon: "🅿️" },
    { name: "Pix", icon: "💰" },
    { name: "Boleto", icon: "📄" }
  ];

  const trustSeals = [
    { name: "Compra Segura", icon: "🔒" },
    { name: "7 Dias de Garantia", icon: "↩️" },
    { name: "Suporte 24/7", icon: "🎧" },
    { name: "Entrega Imediata", icon: "⚡" }
  ];

  return (
    <section className="py-12 bg-dark-900 border-y border-dark-700">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Selos de Confiança */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Compra 100% Segura</h3>
            <div className="grid grid-cols-2 gap-6">
              {trustSeals.map((seal, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-dark-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-3xl mb-2">{seal.icon}</span>
                  <span className="text-gray-300 font-medium">{seal.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Métodos de Pagamento */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Métodos de Pagamento</h3>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-dark-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-3xl mb-2">{method.icon}</span>
                  <span className="text-gray-300 text-sm">{method.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}