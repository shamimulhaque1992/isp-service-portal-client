import { format } from "date-fns";
import React, { useState } from "react";
import usePackages from "../../../hooks/usePackages";
import Modal from "../Modal/Modal";
import SinglePackages from "./SinglePackages";

const AvailablePackages = ({ currentDate }) => {
  const [packages] = usePackages([]);
  const [subscription, setSubscription] = useState(null);
  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="currentDate mb-20">
        <h1 className="text-2xl text-sky-400">
          Availabel Packages on {format(currentDate, "PP")}
        </h1>
        <p>Please select a package</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {packages.map((singlepackage) => (
          <SinglePackages
            key={singlepackage._id}
            singlepackage={singlepackage}
            setSubscription={setSubscription}
          ></SinglePackages>
        ))}
      </div>
      {subscription && (
        <Modal
          key={subscription._id}
          subscription={subscription}
          currentDate={currentDate}
          setSubscription={setSubscription}
        ></Modal>
      )}
    </div>
  );
};

export default AvailablePackages;
