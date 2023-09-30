/* eslint-disable react/prop-types */
const ShopNowButton = ({ color, link }) => {
  return (
    <a
      href={link}
      className={`bg-${color} text-white font-bold rounded-3xl`}
      style={{ padding: "10px 15px", fontSize: "14px" }}
    >
      Shop Now
    </a>
  );
};

export default ShopNowButton;
