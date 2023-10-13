/* eslint-disable react/prop-types */
const CategoryCard = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="w-72 overflow-hidden rounded bg-white  shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={data?.img}
            alt={data?.title}
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-3 flex justify-start">
          <div>
            <h2 className="text-xl font-semibold">{data?.title}</h2>
            <div>
              {data?.point?.map((name, i) => (
                <p key={i} className="text-start">
                  <span className="text-red-600 ">●</span> {name}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white transition duration-300  ">
            <span>Buy now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
