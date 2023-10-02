import TopBanner from "../components/Banner/TopBanner";
import OurCategory from "../components/category/OurCategory";
import Gallery from "../components/gallery/Gallery";
import NewProduct from "../components/products/NewProduct";
import Service from "../components/service/Service";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Service />
      <NewProduct />
      <Gallery />
      <OurCategory />
    </div>
  );
};

export default Home;
