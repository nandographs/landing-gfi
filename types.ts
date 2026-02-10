import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  investment: string;
  equity: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}