import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UpcomingEvents from '@/components/UpcomingEvents';
import PhotoGallery from '@/components/PhotoGallery';
import OrganizerSpotlight from '@/components/OrganizerSpotlight';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <UpcomingEvents />
        <PhotoGallery />
        <OrganizerSpotlight />
        <Testimonials />
      </div>
    </>
  );
}