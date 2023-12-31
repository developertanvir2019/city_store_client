import Banner2 from "../components/Banner/Banner2";
import TopBanner from "../components/Banner/TopBanner";
import OurCategory from "../components/category/OurCategory";
import ClientReview from "../components/clientReview/ClientReview";
import DayDeal from "../components/dayDeal/DayDeal";
import Gallery from "../components/gallery/Gallery";
import NewProduct from "../components/products/NewProduct";
import ProductsTab from "../components/productsTab/ProductsTab";
import Service from "../components/service/Service";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Service />
      <NewProduct />
      <Gallery />
      <OurCategory />
      <Banner2 />
      <DayDeal />
      <ProductsTab />
      <ClientReview />
    </div>
  );
};

export default Home;
