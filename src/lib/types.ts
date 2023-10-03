export type DomainStatus = "Active" | "Expired" | "Expiring Soon"

export interface Domain {
  domain: string;
  privider: string;
  expires_at: Date;
  status: string;
  description: string;
}

export interface EmailProviderPlan {
  name: string;
  description?: string;
  price: number;
  currency: string;
  type: string;
  features?: string[];
  extra?: string;
}

export interface EmailProvider {
  name: string;
  description: string;
  icon: string;
  plans: EmailProviderPlan[];
}

export interface Duration {
  name: string;
  price: number;
  discount: number;
  currency?: string;
}


export interface EmailAddress {
  username: string;
  email: string;
  storage: string;
  status: string;
}
