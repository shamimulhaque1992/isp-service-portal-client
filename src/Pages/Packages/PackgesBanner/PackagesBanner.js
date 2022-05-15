import React from "react";
import were from "../../../assets/images/kenny-eliason-uq5RMAZdZG4-unsplash.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';
import "./PackagesBanner.css"

const PackagesBanner = ({currentDate, setCurrentDate}) => {
  let footer = <p>Please pick a day.</p>;
  if (currentDate) {
    footer = <p>You picked {format(currentDate, "PP")}.</p>;
  }
  return (
    <div>
      <div className=" packagesBanner mx-auto hero min-h-screen bg-base-200">
        <div className="w-full hero-content flex-col lg:flex-row-reverse justify-around">
          <img
            src={were}
            className="max-w-sm max-h-96 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="card lg:card-side bg-base-100 w-64 sm:w-96 overflow-x-auto border-2 border-red-500">
            <DayPicker
              mode="single"
              selected={currentDate}
              onSelect={setCurrentDate}
              footer={footer}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesBanner;
