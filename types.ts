
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  status?: 'completed' | 'in-progress';
  details?: ProjectDetails;
}

export interface ProjectDetails {
  client: string;
  industry: string;
  timeline: string;
  techStackDetailed: string[];
  overview: string;
  role: string[];
  features: string[];
  architecture?: string;
  challenges: { challenge: string; solution: string }[];
  takeaways: string;
  galleryImages: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
}

export interface Award {
  title: string;
  description: string;
  year: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}
