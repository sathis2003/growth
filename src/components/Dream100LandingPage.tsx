import Dream100Hero from './Hero';
import Dream100Stats from './Statistics';
import Dream100Benefits from './Benifits';
import Dream100Tools from './Tools';
import Dream100Network from './Network';
import Dream100Membership from './Form';
import Dream100Footer from './Footer';
import Dream100FAQ from './Faq';
import Dream100SuccessStories from './SuccessStories';
import Dream100Urgency from './Urgency';
const Dream100LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Dream100Hero />
      <Dream100Stats />
      <Dream100Benefits />
      <Dream100Tools />
      <Dream100Network />
      <Dream100SuccessStories />
      <Dream100Urgency />
      <div data-section="membership">
        <Dream100Membership />
      </div>
      <Dream100FAQ />
      <Dream100Footer />
    </div>
  );
};

export default Dream100LandingPage;