/* eslint-disable react/prop-types */
import ShopNowButton from "../shared/button/ShopNowButton";

const ShopNowCard = ({ title, description, color, image }) => {
  return (
    <div
      className="hero text-white bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        height: "180px",
        marginBottom: "19px",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mt-2 text-2xl font-bold">{title}</h1>
          <p className="my-2">{description}</p>
          <ShopNowButton link={"#"} color={color} />
        </div>
      </div>
    </div>
  );
};

export default ShopNowCard;
