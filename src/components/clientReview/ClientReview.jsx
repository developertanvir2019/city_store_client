import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  return (
    <div className="text-center mx-5">
      <h2 className="text-3xl uppercase font-semibold inline-block relative mb-12 mt-20">
        Our Happy Clients
        <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <ReviewCard
          name={"Nichole Jones"}
          img={
            "https://themes.pixelstrap.com/bigdeal/assets/images/testimonial/1.jpg"
          }
          role={"Designer"}
        />
        <ReviewCard
          name={"Harry Cane"}
          img={
            "https://themes.pixelstrap.com/bigdeal/assets/images/testimonial/2.jpg"
          }
          role={"Developer"}
        />
        <ReviewCard
          name={"Robarto"}
          img={
            "https://themes.pixelstrap.com/bigdeal/assets/images/testimonial/4.jpg"
          }
          role={"Manager"}
        />
      </div>
    </div>
  );
};

export default ClientReview;
