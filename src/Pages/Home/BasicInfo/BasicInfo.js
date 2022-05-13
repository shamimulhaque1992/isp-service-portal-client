import React from "react";

const BasicInfo = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center md:flex-row gap-10 mb-20">
      <div class="card w-72 sm:w-96 bg-cyan-200 shadow-xl">
        <div class="card-body flex-row items-center">
          <div class="">
            <i class="fa-solid fa-door-open text-5xl "></i>
          </div>
          <div className="">
            <h2 class="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>

      <div class="card w-72 sm:w-96 bg-gray-500 shadow-xl">
        <div class="card-body flex-row items-center">
          <div class="">
            <i class="fa-solid fa-location-dot text-5xl text-white"></i>
          </div>
          <div className="text-white">
            <h2 class="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>

      <div class="card w-72 sm:w-96 bg-emerald-300 shadow-xl">
        <div class="card-body flex-row items-center">
          <div class="">
            <i class="fa-solid fa-square-phone text-5xl"></i>
          </div>
          <div className="">
            <h2 class="card-title justify-center">Opening Hours</h2>
            <p>We are always at your service!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
