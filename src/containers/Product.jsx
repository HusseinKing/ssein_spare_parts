const BestProducts = () => {
  // Array for Toyota Parts
  const parts = [
    {
      id: 1,
      name: "Air & Fuel Delivery",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/fuel-system.webp",
      //add react details please
      details: "Description for Air & Fuel Delivery part",
    },
    {
      id: 2,
      name: "Automatic Transmission",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/automatic-transmission.webp",
      details: "Description for Automatic Transmission part",
    },
    {
      id: 3,
      name: "Belts & Cooling",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/cooling-system.webp",
      details: "Description for Belts & Cooling part",
    },
    {
      id: 4,
      name: "Body",
      imageUrl: "https://cdn.revolutionparts.com/assets/categories/body.webp",
      details: "Description for Body part",
    },
    {
      id: 5,
      name: "Brakes",
      imageUrl: "https://cdn.revolutionparts.com/assets/categories/brakes.webp",
      details: "Description for Brakes part",
    },
    {
      id: 6,
      name: "Cargo Management",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/cargo-management.webp",
      details: "Description for Cargo Management part",
    },
    {
      id: 7,
      name: "Clutch",
      imageUrl: "https://cdn.revolutionparts.com/assets/categories/clutch.webp",
      details: "Description for Clutch part",
    },
    {
      id: 8,
      name: "Cooling System",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/cooling-system.webp",
      details: "Description for Cooling System part",
    },
    {
      id: 9,
      name: "Driveline & Axles",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/front-drive-axle.webp",
      details: "Description for Driveline & Axles part",
    },
    {
      id: 10,
      name: "Electrical",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/electrical.webp",
      details: "Description for Electrical part",
    },
    {
      id: 11,
      name: "Electronics",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/electronics.webp",
      details: "Description for Electronics part",
    },
    {
      id: 12,
      name: "Emission System",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/emission-system.webp",
      details: "Description for Emission System part",
    },
  ];

  // Array for Toyota Accessories
  const accessories = [
    {
      id: 19,
      name: "Interior",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/interior.webp",
      description: "Description for Interior part",
    },
    {
      id: 15,
      name: "Exterior",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/exterior.webp",
      details: "Description for Exterior part",
    },
    {
      id: 6,
      name: "Cargo Management",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/cargo-management.webp",
      details: "Description for Cargo Management part",
    },
    {
      id: 11,
      name: "Electronics",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/electronics.webp",
      details: "Description for Electronics part",
    },
    {
      id: 22,
      name: "Performance",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/performance.webp",
      details: "Description for Performance part",
    },
    {
      id: 28,
      name: "Wheels",
      imageUrl: "https://cdn.revolutionparts.com/assets/categories/wheels.webp",
      details: "Description for Wheels part",
    },
    {
      id: 23,
      name: "Serviceable Components",
      imageUrl:
        "https://cdn.revolutionparts.com/assets/categories/serviceable-components.webp",
      details: "Description for Serviceable Components part",
    },
  ];

  return (
    <div>
      {/* Section for Toyota Parts */}
      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="container mx-auto">
          <h1 className="mb-4 text-3xl font-semibold">Popular Toyota Parts</h1>
          <p className="w-2/3 mb-8 text-gray-600">
            Checkout the most bought & viewed parts for vehicles like yours.
            Select a part below to get started or checkout our most popular
            accessories.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((part) => (
              <div key={part.id} className="p-6 bg-white rounded-lg shadow-md">
                <img
                  className="object-contain w-full h-40 mb-4 rounded"
                  src={part.imageUrl}
                  alt={`Product ${part.id}`}
                />
                <h3 className="mb-2 text-xl font-semibold">{part.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section for Toyota Accessories */}
      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="container mx-auto">
          <h1 className="mb-4 text-3xl font-semibold">
            Popular Toyota Accessories
          </h1>
          <p className="w-2/3 mb-8 text-gray-600">
            Everyone loves to accessorize their vehicle. So we have pulled
            together our most viewed accessories to make your parts-shopping
            experience as quick and easy as possible.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {accessories.map((accessory) => (
              <div
                key={accessory.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <img
                  className="object-contain w-full h-40 mb-4 rounded"
                  src={accessory.imageUrl}
                  alt={`Product ${accessory.id}`}
                />
                <h3 className="mb-2 text-xl font-semibold">{accessory.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProducts;
