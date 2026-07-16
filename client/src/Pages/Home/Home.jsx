import Navbar from "../../Component/layout/Navbar";
import Hero from "../../Component/home/Hero";
import Footer from "../../Component/layout/Footer";
import PopularDestinations from "../../Component/home/PopularDestinations";
import Categories from "../../Component/home/Categories";
import FeaturedTours from "../../Component/home/Features";
import Testimonials from "../../Component/home/Testimonials";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <Categories />
      <FeaturedTours />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;