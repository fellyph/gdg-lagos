import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ArrowRight, Users, Target, Heart, Lightbulb, HandshakeIcon, Trophy } from 'lucide-react';

const CORE_VALUES = [
  {
    icon: Users,
    title: 'Community First',
    description: 'Building an inclusive, supportive environment where every developer can thrive and grow.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies and fostering creative problem-solving.'
  },
  {
    icon: Heart,
    title: 'Diversity & Inclusion',
    description: 'Celebrating diverse perspectives and ensuring equal opportunities for all.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Promoting knowledge sharing and professional development.'
  }
];

const PARTNERS = [
  {
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Strategic technology partner providing resources and support.'
  },
  {
    name: 'Impact Hub Lagos',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Premier venue partner for community events and workshops.'
  },
  {
    name: 'Tech4Dev',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Collaboration partner for developer training programs.'
  }
];

const IMPACT_METRICS = [
  { number: '5,000+', label: 'Community Members' },
  { number: '100+', label: 'Events Organized' },
  { number: '50+', label: 'Expert Speakers' },
  { number: '1,000+', label: 'Developers Trained' }
];

const SUCCESS_STORIES = [
  {
    name: 'Lagos DevFest 2023',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Our largest tech conference yet, bringing together over 1,000 developers for two days of learning and networking.'
  },
  {
    name: 'Women Techmakers',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Successfully launched initiative to support women in tech, training over 200 female developers in 2023.'
  }
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* History and Mission */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Founded in 2015, GDG Lagos has grown from a small group of passionate developers to Lagos's largest tech community.
              </p>
            </div>
            <div className="mt-10">
              <div className="prose prose-blue mx-auto dark:prose-invert">
                <p className="text-gray-500 dark:text-gray-300">
                  Our mission is to create an inclusive environment where developers can learn, connect, and grow together. We focus on fostering innovation through knowledge sharing, hands-on workshops, and collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Core Values
              </h2>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {CORE_VALUES.map((value, index) => (
                  <div key={index} className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <value.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-12 bg-blue-600 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {IMPACT_METRICS.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-5xl font-extrabold text-white">
                    {metric.number}
                  </p>
                  <p className="mt-2 text-xl text-blue-100">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Partners
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Working together to empower the developer community
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {PARTNERS.map((partner, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="relative h-40 w-full mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Success Stories
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Celebrating our community's achievements
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {SUCCESS_STORIES.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {story.name}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-300">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}