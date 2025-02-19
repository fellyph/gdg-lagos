export interface Event {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  imageUrl: string;
  registrationUrl: string;
  type: 'conference' | 'workshop' | 'meetup';
  status: 'upcoming' | 'past';
  agenda: AgendaItem[];
  speakers: Speaker[];
  gallery?: GalleryItem[];
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: Speaker;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
  topics: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description?: string;
}