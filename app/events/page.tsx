'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';
import SpeakerSubmissionForm from '@/components/SpeakerSubmissionForm';
import { Calendar, Filter, Search } from 'lucide-react';
import type { Event } from '@/types';

const EVENTS: Event[] = [
  {
    id: 1,
    title: "Google I/O Extended Lagos",
    date: "2024-06-15",
    startTime: "09:00",
    endTime: "17:00",
    description: "Join us for an extended celebration of Google I/O, featuring local speakers and hands-on workshops with the latest Google technologies.",
    location: "Zone Tech Park, Lagos",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    registrationUrl: "/events/io-extended",
    type: "conference",
    status: "upcoming",
    agenda: [
      {
        time: "09:00",
        title: "Registration & Breakfast",
        description: "Check-in and networking over breakfast"
      },
      {
        time: "10:00",
        title: "Keynote: Future of AI",
        description: "Exploring the latest developments in AI and Machine Learning",
        speaker: {
          id: 1,
          name: "Dr. Sarah Johnson",
          role: "AI Research Lead",
          company: "Google",
          bio: "Leading AI research and development",
          imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
          topics: ["AI", "Machine Learning"]
        }
      }
    ],
    speakers: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        role: "AI Research Lead",
        company: "Google",
        bio: "Leading AI research and development",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        topics: ["AI", "Machine Learning"]
      }
    ],
    gallery: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        title: "Keynote Session"
      }
    ]
  },
  {
    id: 2,
    title: "Flutter Forward Lagos",
    date: "2024-07-08",
    startTime: "10:00",
    endTime: "16:00",
    description: "A deep dive into Flutter development with workshops, code labs, and networking opportunities for mobile developers.",
    location: "Impact Hub, Lagos",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    registrationUrl: "/events/flutter-forward",
    type: "workshop",
    status: "upcoming",
    agenda: [
      {
        time: "10:00",
        title: "Flutter 3.0 Features",
        description: "Exploring the latest Flutter features"
      }
    ],
    speakers: [],
    gallery: []
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('upcoming');

  const filteredEvents = EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Events
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                Join our upcoming events or explore past gatherings
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <section className="py-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-1 gap-4">
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="all">All Types</option>
                  <option value="conference">Conferences</option>
                  <option value="workshop">Workshops</option>
                  <option value="meetup">Meetups</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Speaker Submission */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Want to Speak?
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                Share your knowledge with our community
              </p>
            </div>
            <div className="mt-12">
              <SpeakerSubmissionForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}