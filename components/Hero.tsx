import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './MotionViewport';
import { BlurText } from './ui/blur-text';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Faça seu Dinheiro
              </motion.span>
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600"
              >
                Trabalhar para você
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A oportunidade que você precisa para mudar sua vida financeira. Torne-se um sócio SCP GFI e participe dos lucros enquanto o sistema trabalha.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(91, 222, 64, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596"
                className="px-8 py-4 bg-brand-500 text-black rounded-full font-bold text-lg hover:bg-brand-400 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(91,222,64,0.2)]"
              >
                Seja Sócio
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                href="#resultados"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('resultados');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:border-white/40 transition-all cursor-pointer"
              >
                Como funciona?
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            {/* 3D Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-24 h-24 bg-brand-500/20 rounded-2xl blur-xl -z-10"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -z-10"
            />

            <div className="relative group flex justify-center items-end">
              {/* Background Glow behind the person - stays behind everything */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-500/10 blur-[120px] rounded-full -z-10 group-hover:bg-brand-500/15 transition-colors duration-1000"></div>

              {/* Image Wrapper - Scaled 1.6 for mobile and 1.3 for desktop */}
              <div className="relative w-full scale-[1.6] translate-y-8 lg:scale-[1.3] lg:translate-y-4 transition-transform duration-700">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.7 }}
                  src="/images/FERNANDO-LP.png"
                  alt="Fernando"
                  className="w-full h-auto drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative z-10"
                />

                {/* Name Overlay - Scaled with the person but kept clear */}
                <div className="absolute bottom-5 left-0 right-0 p-8 pt-32 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center"
                  >
                    <p className="text-white font-bold text-xl tracking-tight mb-0.5 drop-shadow-2xl">Fernando Santos</p>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse shadow-[0_0_8px_#5bde40]"></span>
                      <p className="text-brand-400 text-[8px] font-black uppercase tracking-[0.2em] drop-shadow-md">Sócio Executivo</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating 3D-like Info Card - Now outside the scale wrapper, fixed size */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 -right-8 bg-neutral-900/80 backdrop-blur-2xl border border-white/10 text-white p-4 rounded-2xl shadow-2xl cursor-default z-30 hidden lg:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(91,222,64,0.4)]">
                    <TrendingUp className="text-black" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Lucro em 20 Meses</p>
                    <p className="text-2xl font-black text-white">250%</p>
                  </div>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="h-full bg-brand-500"
                  />
                </div>
              </motion.div>

              {/* Floating Security Badge - Fixed size and positioned appropriately */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-20 -left-12 bg-neutral-900/80 backdrop-blur-xl border border-brand-500/20 text-white p-4 rounded-2xl shadow-2xl z-30 hidden lg:flex items-center gap-3 transform hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <ShieldCheck className="text-brand-500" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-500">Garantia</p>
                  <p className="text-sm font-bold">Contrato SCP</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;