import React, { useState } from "react";
import AvailablePackages from "./AvailablePackages/AvailablePackages";
import PackagesBanner from "./PackgesBanner/PackagesBanner";

const Packages = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      <PackagesBanner currentDate={currentDate} setCurrentDate={setCurrentDate}></PackagesBanner>
      <AvailablePackages currentDate={currentDate} setCurrentDate={setCurrentDate}></AvailablePackages>
    </div>
  );
};

export default Packages;
