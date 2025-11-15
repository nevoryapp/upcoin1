'use client';

import { motion } from 'framer-motion';

export default function Footer({ isMobile }) {
  return (
    <footer className="py-8 px-4 bg-dark-900 border-t border-dark-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              UPCOIN
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}