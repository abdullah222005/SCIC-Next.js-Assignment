import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import BrandStory from "../components/BrandStory";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import WhyClothique from "../components/WhyClothique";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Categories />
        <BestSellers />
        <NewArrivals />
        <WhyClothique />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  );
}
