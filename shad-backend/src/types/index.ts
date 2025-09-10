export interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  projectName: string;
  description: string;
  budget: string;
  timeline: string;
  features: string;
  inspiration?: string;
  additionalInfo?: string;
  wantsConsultation: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  createdAt: Date;
}

export interface Ticket {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}