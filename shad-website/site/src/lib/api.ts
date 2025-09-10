const API_BASE_URL = 'http://localhost:5000/api';

export interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectName?: string;
  projectType?: string; // Add this field
  projectDescription?: string;
  budget?: string;
  timeline?: string;
  features?: string;
  inspiration?: string;
  additionalInfo?: string;
  requestCall?: boolean;
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
  quoteId?: string;
  timestamp?: string;
}

export const submitQuoteRequest = async (quoteData: QuoteRequest): Promise<ApiResponse<any>> => {
  const response = await fetch(`${API_BASE_URL}/quotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quoteData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};