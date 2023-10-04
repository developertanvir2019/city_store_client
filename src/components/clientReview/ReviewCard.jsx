/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";

const ReviewCard = ({ img, name, role }) => {
  return (
    <div className="rounded bg-white text-center shadow-md shadow-slate-200 lg:w-96 md:w-80 sm:w-72 py-5 px-4">
      {/*  <!-- Image --> */}
      <header className="my-4">
        <h3 className="text-2xl font-semibold text-primary">{name}</h3>
        <p className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          deserunt, eaque deleniti quidem eius dignissimos obcaecati aliquid
          quas quibusdam voluptas officia rem inventore suscipit.
        </p>
        <h3 className="text-2xl font-semibold text-red-600 pt-3">{role}</h3>
      </header>
      <figure className="pb-2">
        <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
          <img
            src={img}
            alt="user name"
            title="user name"
            width="80"
            height="80"
            className="max-w-full rounded-full"
          />
        </span>
      </figure>
      <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="orange"
      />
    </div>
  );
};

export default ReviewCard;
