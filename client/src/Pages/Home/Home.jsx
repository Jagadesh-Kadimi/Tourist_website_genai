import Navbar from "../../Component/layout/Navbar";
import Hero from "../../Component/home/Hero";
import Footer from "../../Component/layout/Footer";
import PopularDestinations from "../../Component/home/PopularDestinations";
import Categories from "../../Component/home/Categories";
import FeaturedTours from "../../Component/home/Features";
import Testimonials from "../../Component/home/Testimonials";
import FeaturedPlaces from "../../Component/home/FeaturePlaces";
import Newsletter from "../../Component/home/newsletter";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <Categories />
      <FeaturedPlaces/>
      <FeaturedTours />
      <Testimonials />
      <Newsletter/>
      <Footer />
    </>
  );
}

export default Home;