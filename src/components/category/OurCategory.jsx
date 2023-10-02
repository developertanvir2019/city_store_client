import CategoryCard from "./CategoryCard";

const OurCategory = () => {
  const categoryData = [
    {
      id: 1,
      img: "https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/category/1.jpg",
      title: "Fashion and cloth",
      point: [
        "Winter Jacket",
        "Shorts Shoe",
        "Office Blazer",
        "Professional Dress",
      ],
    },
    {
      id: 2,
      img: "https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/category/3.jpg",
      title: "Latest Electronics",
      point: ["Let Tv", "Gaming Phone", "Digital Ac", "Cooling Fan"],
    },
    {
      id: 3,
      img: "https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/category/2.jpg",
      title: "Home Furniture",
      point: ["New Chair", "Air Sofa", "Vip Bed", "Wall shower"],
    },
    {
      id: 4,
      img: "https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/category/4.jpg",
      title: "Beauty and cosmetics",
      point: ["Face Cream", "Body Lotion", "Hair Oil", "New Makeup"],
    },
  ];
  return (
    <div className="text-center mx-5">
      <h2 className="text-3xl uppercase font-semibold inline-block relative mb-12">
        Our Category
        <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {categoryData?.map((data) => (
          <CategoryCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default OurCategory;
