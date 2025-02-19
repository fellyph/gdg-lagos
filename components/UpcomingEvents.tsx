'use client';

import EventCard from './EventCard';
import type { Event } from '@/types';

const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "Google I/O Extended Lagos",
    date: "June 15, 2024",
    description: "Join us for an extended celebration of Google I/O, featuring local speakers and hands-on workshops with the latest Google technologies.",
    location: "Zone Tech Park, Lagos",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    registrationUrl: "/events/io-extended"
  },
  {
    id: 2,
    title: "Flutter Forward Lagos",
    date: "July 8, 2024",
    description: "A deep dive into Flutter development with workshops, code labs, and networking opportunities for mobile developers.",
    location: "Impact Hub, Lagos",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    registrationUrl: "/events/flutter-forward"
  },
  {
    id: 3,
    title: "Cloud Next Day",
    date: "August 22, 2024",
    description: "Explore the latest in cloud computing, with a focus on Google Cloud Platform, DevOps, and cloud-native development.",
    location: "Landmark Centre, Lagos",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    registrationUrl: "/events/cloud-next"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Join us at our upcoming events and be part of the tech community
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;