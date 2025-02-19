'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Mail, Github, Twitter, Linkedin, Calendar, ArrowRight } from 'lucide-react';

const MEMBERS = [
  {
    id: 1,
    name: 'Oluwaseun Adebayo',
    role: 'Frontend Developer',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bio: 'Passionate about React and web accessibility',
    tags: ['React', 'TypeScript', 'Accessibility'],
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Emmanuel Okafor',
    role: 'Cloud Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bio: 'Google Cloud certified architect',
    tags: ['GCP', 'Kubernetes', 'DevOps'],
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Aisha Mohammed',
    role: 'Mobile Developer',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bio: 'Flutter enthusiast and community organizer',
    tags: ['Flutter', 'Dart', 'Firebase'],
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Inclusive Tech Communities',
    excerpt: 'Learn about our initiatives to make tech more accessible and inclusive for everyone.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Recap: Flutter Forward Lagos',
    excerpt: 'Highlights from our recent Flutter Forward event featuring workshops and amazing speakers.',
    author: 'Michael Adebayo',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    readTime: '8 min read'
  }
];

export default function Community() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const filteredMembers = MEMBERS.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                Our Community
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                Connect with fellow developers and stay updated with the latest from GDG Lagos
              </p>
            </div>
          </div>
        </div>

        {/* Member Directory */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  Member Directory
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Connect with our amazing community members
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="relative h-16 w-16">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Community Blog
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-300">
                Latest updates and insights from our community
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-blue-600 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Stay Connected
              </h2>
              <p className="mt-2 text-xl text-blue-100">
                Subscribe to our newsletter for the latest updates and events
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}