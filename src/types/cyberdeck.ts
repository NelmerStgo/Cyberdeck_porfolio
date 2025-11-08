export type Tab = 'projects' | 'skills' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  phone: string;
}