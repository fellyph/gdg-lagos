import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
      <div className="flex-shrink-0 relative h-48">
        <Image
          className="object-cover"
          src={event.imageUrl}
          alt={event.title}
          fill
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
            <Calendar className="h-4 w-4 mr-1" />
            {formattedDate}
          </div>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{event.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-4 w-4 text-gray-400" />
            <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
            <span
              className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                event.type === 'conference'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  : event.type === 'workshop'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}
            >
              {event.type ? event.type.charAt(0).toUpperCase() + event.type.slice(1) : 'Event'}
            </span>
          </div>
          <Link
            href={event.registrationUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;