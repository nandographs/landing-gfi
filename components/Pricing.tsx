
import React from 'react';
import { PlusIcon, ShieldCheckIcon, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from './ui/border-trail';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Empreendedor",
    investment: "$100",
    equity: "Retorno Total: $250",
    features: [
      "Contrato: 20 meses",
      "Rentabilidade: 250%",
      "Equiparação: 30%",
      "Acesso à plataforma"
    ],
    recommended: false
  },
  {
    name: "Empresário",
    investment: "$600",
    equity: "Retorno Total: $1.500",
    features: [
      "Contrato: 20 meses",
      "Rentabilidade: 250%",
      "Equiparação: 40%",
      "Suporte prioritário"
    ],
    recommended: false
  },
  {
    name: "Executivo",
    investment: "$1.000",
    equity: "Retorno Total: $2.500",
    features: [
      "Contrato: 20 meses",
      "Rentabilidade: 250%",
      "Equiparação: 50%",
      "Mentoria Exclusiva",
      "Acesso ao Board"
    ],
    recommended: true
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 bg-black text-white" id="investir">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5 text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 font-mono text-sm text-brand-400">
              Seja um Sócio SCP
            </div>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Escolha seu Modelo <span className="text-brand-500">SCP</span>
          </h2>
          <p className="text-neutral-400 mt-5 text-base md:text-lg max-w-lg mx-auto">
            Faça seu dinheiro trabalhar com a velocidade do nosso negócio. Selecione o nível de aporte ideal para você.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Background Grid Pattern */}
          <div
            className={cn(
              'z-0 pointer-events-none absolute inset-0 size-full opacity-20',
              'bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]',
              'bg-[size:32px_32px]',
              '[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]',
            )}
          />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8",
                  tier.recommended
                    ? "border-brand-500/30 bg-neutral-900/80 shadow-[0_0_50px_rgba(91,222,64,0.1)]"
                    : "border-white/10 hover:border-white/20 transition-colors"
                )}
              >
                {/* Plus Icons for decoration */}
                <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/10" />
                <PlusIcon className="absolute -top-3 -right-3 size-6 text-white/10" />
                <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-white/10" />
                <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/10" />

                {tier.recommended && (
                  <BorderTrail
                    className="bg-brand-500"
                    style={{
                      boxShadow: '0px 0px 60px 30px rgba(91, 222, 64, 0.2), 0 0 100px 60px rgba(91, 222, 64, 0.1)',
                    }}
                    size={80}
                  />
                )}

                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className={cn("text-xl font-semibold", tier.recommended ? "text-white" : "text-neutral-300")}>
                      {tier.name}
                    </h3>
                    {tier.recommended && (
                      <Badge variant="default" className="bg-brand-500 text-black border-none animate-pulse">
                        Recomendado
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500 font-mono">
                    {tier.equity}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    {tier.investment}
                  </span>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-0.5 rounded-full p-0.5 shrink-0",
                        tier.recommended ? "bg-brand-500/20 text-brand-400" : "bg-white/10 text-neutral-400"
                      )}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={tier.recommended ? "default" : "outline"}
                  asChild
                >
                  <a href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596" target="_blank" rel="noopener noreferrer">
                    Aplicar agora
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-neutral-500 border border-white/5 rounded-full px-4 py-2 bg-neutral-900/50">
              <ShieldCheckIcon className="size-4 text-brand-500" />
              <span>Garantia SCP registrada em contrato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;