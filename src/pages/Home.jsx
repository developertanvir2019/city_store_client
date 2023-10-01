import TopBanner from "../components/Banner/TopBanner";
import NewProduct from "../components/products/NewProduct";
import Service from "../components/service/Service";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Service />
      <NewProduct />
    </div>
  );
};

export default Home;
