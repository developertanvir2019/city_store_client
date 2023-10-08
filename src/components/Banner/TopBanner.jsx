import ShopNowCard from "./ShopNowCard";
import img2 from "../../assets/topBanner/2.jpg";
import img3 from "../../assets/topBanner/3.jpg";
import img6 from "../../assets/topBanner/6.jpg";
import img4 from "../../assets/topBanner/4.jpg";
import img5 from "../../assets/topBanner/5.jpg";
import category1 from "../../assets/topBanner/category1.png";
import category2 from "../../assets/topBanner/category2.png";
import category3 from "../../assets/topBanner/category3.png";
import category4 from "../../assets/topBanner/category4.png";
import category5 from "../../assets/topBanner/category5.png";
import category6 from "../../assets/topBanner/category6.png";
import category7 from "../../assets/topBanner/category7.png";

const categoryItems = [
  { id: 1, img: category1, title: "Furniture" },
  { id: 2, img: category2, title: "Electronics" },
  { id: 3, img: category3, title: "Fashion" },
  { id: 7, img: category7, title: " Shoes" },
  { id: 4, img: category4, title: "Cloths" },
  { id: 5, img: category5, title: "Cosmetic" },
  { id: 6, img: category6, title: "Bycycle" },
  { id: 8, img: category5, title: "Gym" },
];

const TopBanner = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-4  lg:grid-cols-12">
        <div className="p-1 col-span-4 lg:col-span-3 mx-8 mt-2">
          {/*<!-- Component: Leading Image One Line List --> */}
          <ul className="divide-y divide-slate-200  border-2">
            {categoryItems?.map((item) => (
              <li
                key={item?.id}
                className="flex items-center gap-4 px-4 py-[1.2rem]"
              >
                <div className="flex items-center self-center">
                  <img
                    src={item?.img}
                    alt="product image"
                    className="w-8 rounded"
                  />
                </div>

                <div className="flex min-h-[2rem] min-w-0 flex-1 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    {item?.title}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
          {/*<!-- End Leading Image One Line List --> */}
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
              color={"secondary"}
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
            color={"secondary"}
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
