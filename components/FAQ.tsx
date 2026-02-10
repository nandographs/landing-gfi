import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';
import MotionViewport, { containerVariants, itemVariants } from './MotionViewport';
import { motion, AnimatePresence } from 'framer-motion';

const faqData: FAQItem[] = [
  {
    question: "O que é o modelo SCP da GFI?",
    answer: "A Sociedade em Conta de Participação (SCP) é um modelo jurídico sólido previsto no Código Civil. Nele, a GFI atua como Sócio Ostensivo, sendo 100% responsável pela operação, riscos e gestão, enquanto você entra como Sócio Participante, aportando capital e participando dos lucros de forma direta e sem burocracia."
  },
  {
    question: "Preciso trabalhar ou gerir o negócio?",
    answer: "Não. Esse é o grande diferencial. O sistema da GFI opera de forma profissional todos os dias do ano. Você não precisa se preocupar com logística, contratações ou vendas. A GFI cuida de toda a execução para que você apenas colha os resultados como sócio."
  },
  {
    question: "Como funciona a distribuição de lucros?",
    answer: "Os resultados são distribuídos aos sócios conforme o desempenho da operação, seguindo estritamente o que foi definido no contrato SCP. É uma participação real nos lucros gerados pelo ecossistema de vendas da GFI."
  },
  {
    question: "O modelo possui segurança jurídica?",
    answer: "Total. O modelo SCP está devidamente regulamentado pelos Artigos 991 a 996 do Código Civil Brasileiro. É uma estrutura empresarial legítima que separa a responsabilidade da gestão (GFI) do direito à participação nos resultados (Você)."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionViewport className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">Perguntas Frequentes</h2>
          <p className="text-neutral-400">Tire suas dúvidas sobre o modelo de sociedade.</p>
        </MotionViewport>

        <MotionViewport
          variants={containerVariants}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-white/10 rounded-2xl bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-8">{item.question}</span>
                <span className="text-neutral-400">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-white/5 mt-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </MotionViewport>
      </div>
    </section>
  );
};

export default FAQ;