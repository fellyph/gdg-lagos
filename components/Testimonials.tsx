'use client';

import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    content: "Being part of GDG Lagos has been transformative for my career. The community's support and learning opportunities are unmatched.",
    author: {
      name: "Oluwaseun Adebayo",
      role: "Frontend Developer",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
    }
  },
  {
    id: 2,
    content: "The workshops and events organized by GDG Lagos have helped me stay up-to-date with the latest technologies and best practices.",
    author: {
      name: "Emmanuel Okafor",
      role: "Cloud Engineer",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
    }
  },
  {
    id: 3,
    content: "I've met amazing developers and found great opportunities through the GDG Lagos network. It's more than just a tech community.",
    author: {
      name: "Aisha Mohammed",
      role: "Mobile Developer",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
    }
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Community Voices
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Hear from our amazing community members
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
            >
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 dark:text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg text-gray-600 dark:text-gray-300">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="relative h-12 w-12">
                  <Image
                    className="rounded-full"
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    fill
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900 dark:text-white">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;