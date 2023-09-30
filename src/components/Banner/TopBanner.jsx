const TopBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-4  lg:grid-cols-12">
        <div className="bg-cyan-700 border-2 p-1 col-span-4 lg:col-span-3">
          Column 3/12
        </div>
        <div className="border-2 p-1 col-span-4  lg:col-span-6 bg-[url('/src/assets/topBanner/1.jpg')]">
          <div>
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
        </div>
        <div className="bg-cyan-700 border-2 p-1 col-span-4 lg:col-span-3">
          Column 3/12
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
