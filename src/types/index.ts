import React from 'react';

/**
 * Core Type Definitions for Accredian Enterprise Landing Page
 */

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  onClick?: () => void;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;
  padding?: string;
  className?: string;
  id?: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'data-ai' | 'cloud-devops' | 'leadership' | 'product-tech' | 'cybersecurity';
  categoryLabel: string;
  duration: string;
  level: 'Foundational' | 'Intermediate' | 'Executive' | 'Advanced';
  description: string;
  enrolledCount: number;
  rating: number;
  skillsCovered: string[];
  modulesCount: number;
  highlights: string[];
  iconName: string;
  featured?: boolean;
}

export interface Company {
  id: string;
  name: string;
  logoText: string;
  category: 'Tech' | 'Consulting' | 'Finance' | 'Healthcare' | 'Global';
  quote?: string;
  stats?: string;
  industry: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'admin' | 'employee' | 'leadership';
  badge?: string;
  linkText?: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  changeBadge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  metricHighlight?: string;
  companyLogoText: string;
  category: 'Enterprise' | 'Growth' | 'Global';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Programs' | 'Onboarding' | 'Pricing & ROI' | 'Certifications' | 'Enterprise Support';
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  teamSize: string;
  interestedProgram: string;
  message?: string;
}

export interface DemoRequestData extends ContactFormData {
  preferredDate?: string;
  preferredTime?: string;
}

export interface ROICalculatorInput {
  teamSize: number;
  avgSalary: number;
  turnoverRate: number;
  trainingDaysPerYear: number;
}

export interface ROICalculatorOutput {
  annualProductivityGain: number;
  turnoverSavings: number;
  totalFinancialImpact: number;
  estimatedInvestment: number;
  netROIPercentage: number;
  paybackPeriodMonths: number;
}
