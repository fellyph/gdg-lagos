'use client';

import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ORGANIZERS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Community Lead',
    bio: 'Google Developer Expert in Web Technologies',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Adebayo',
    role: 'Technical Lead',
    bio: 'Senior Software Engineer & Cloud Architect',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Chioma Okonkwo',
    role: 'Event Coordinator',
    bio: 'Community Builder & Tech Evangelist',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const OrganizerSpotlight = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Organizers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            The passionate individuals behind GDG Lagos
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ORGANIZERS.map((organizer) => (
            <div key={organizer.id} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={organizer.imageUrl}
                  alt={organizer.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{organizer.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{organizer.role}</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">{organizer.bio}</p>
              <div className="mt-4 flex space-x-4">
                <a href={organizer.social.twitter} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={organizer.social.linkedin} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={organizer.social.github} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizerSpotlight;