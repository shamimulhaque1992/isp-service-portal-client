import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="packages">
        <h4 className="text-xl">Our packages</h4>
        <h2 className="text-3xl text-sky-400 mb-10">
          Some of Our Hot Packages
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-10 mb-20">
        <div class="cursor-pointer card w-72 sm:w-96 bg-stone-50 shadow-xl">
          <div class="badge bg-red-500 border-0 text-white ">NEW</div>
          <div class="card-body flex-col items-center">
            <div class="">
              <i class="fa-brands fa-hotjar text-5xl text-red-500"></i>
            </div>
            <div className="">
              <h2 class="card-title justify-center">Hot Package</h2>
              <h2 class="card-title justify-center">30 Mbps</h2>
              <p>
                Take Our 30 Mbps package for only ৳ <strong>1500</strong> BDT.
              </p>
            </div>
          </div>
        </div>

        <div class="cursor-pointer card w-72 sm:w-96 bg-neutral-200 shadow-xl">
          <div class="card-body flex-col items-center">
            <div class="">
              <i class="fa-solid fa-dove text-5xl"></i>
            </div>
            <div className="">
              <h2 class="card-title justify-center">Most Popular Package</h2>
              <h2 class="card-title justify-center">20 Mbps</h2>
              <p>
                Take Our 20 Mbps package for only ৳ <strong>1000</strong> BDT.
              </p>
            </div>
          </div>
        </div>

        <div class="cursor-pointer card w-72 sm:w-96 bg-zinc-100 shadow-xl">
          <div class="card-body flex-col items-center">
            <div class="">
              <i class="fa-solid fa-dollar-sign text-5xl text-lime-700"></i>
            </div>
            <div className="e">
              <h2 class="card-title justify-center">Budget Package</h2>
              <h2 class="card-title justify-center">8 Mbps</h2>
              <p>
                Take Our 8 Mbps package for only ৳ <strong>500</strong> BDT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
