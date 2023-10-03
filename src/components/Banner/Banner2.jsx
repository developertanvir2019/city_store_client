import img from "../../assets/banner2.jpg";
const Banner2 = () => {
  return (
    <div
      className="bg-cover py-28 flex justify-end px-6 mt-20"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <h3 className="text-2xl font-semibold text-secondary">
          Summer Sale 20% Off
        </h3>
        <h3 className="text-5xl py-2 font-bold text-primary">
          Shoes Collection
        </h3>
        <h3 className="text-2xl font-semibold text-secondary mb-6">
          Fashion Trends
        </h3>
        <a
          href="#"
          className={"bg-primary text-white font-bold rounded-3xl"}
          style={{ padding: "14px 50px", fontSize: "14px" }}
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner2;
