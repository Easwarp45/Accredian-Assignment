export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
  meta?: Record<string, any>;
}

export interface IFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'admin' | 'employee' | 'leadership';
  badge?: string;
  linkText?: string;
}

export interface IProgram {
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

export interface IFAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Programs' | 'Onboarding' | 'Pricing & ROI' | 'Certifications' | 'Enterprise Support';
}

export interface ITestimonial {
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

export interface IStatistic {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  changeBadge?: string;
}

export interface IContactSubmission {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  teamSize?: string;
  interestedProgram?: string;
  message?: string;
  createdAt: string;
}

export interface IDemoRequest {
  id: string;
  referenceId: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  designation?: string;
  phone: string;
  organizationSize?: string;
  teamSize?: string;
  interestedProgram?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  createdAt: string;
}
