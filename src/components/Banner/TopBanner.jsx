import ShopNowCard from "./ShopNowCard";
import img2 from "../../assets/topBanner/2.jpg";
import img3 from "../../assets/topBanner/3.jpg";
import img6 from "../../assets/topBanner/6.jpg";
import img4 from "../../assets/topBanner/4.jpg";
import img5 from "../../assets/topBanner/5.jpg";

const TopBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-4  lg:grid-cols-12">
        <div className="bg-cyan-700 p-1 col-span-4 lg:col-span-3">
          Column 3/12
        </div>
        <div className="col-span-4 lg:col-span-6">
          <div className="bg-cover  mt-2 bg-[url('/src/assets/topBanner/1.jpg')] px-5 py-20 h-96  p-1">
            <h3 className="text-xl text-primary font-semibold">All products</h3>
            <h1 className="text-4xl py-2 text-secondary font-bold">
              MEGASTORE
            </h1>
            <h3 className="text-xl font-semibold">Save up to 20% off</h3>
            <div className="mt-5">
              <a
                href="#"
                className="text-white font-semibold bg-primary px-3 py-2 rounded-xl"
              >
                Shop now
              </a>
            </div>
          </div>
          <div className="lg:flex mt-3">
            <ShopNowCard
              title={"Smart Watch"}
              description={"SPEACIAL OFFER"}
              color={"primary"}
              image={img4}
            />
            <div className="w-2"></div>
            <ShopNowCard
              title={"Stylish Chair"}
              description={"WEEKEND SALE"}
              color={"yellow-500"}
              image={img5}
            />
          </div>
        </div>
        <div className=" p-1 col-span-4 lg:col-span-3 mt-1">
          <ShopNowCard
            title={"Smart Glasses"}
            description={"BEST CHOISE"}
            color={"secondary"}
            image={img2}
          />
          <ShopNowCard
            title={"Smart Led Tv"}
            description={"NOW 70% OFF"}
            color={"green-600"}
            image={img6}
          />
          <ShopNowCard
            title={"Smart Phone"}
            description={"SPECIAL OFFER"}
            color={"primary"}
            image={img3}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
