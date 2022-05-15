import React from "react";

const SinglePackages = ({ singlepackage, setSubscription }) => {
  const { name, slots } = singlepackage;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p>
            <small>
              {slots.length > 0 ? (
                <span>{slots[0]}</span>
              ) : (
                <span>
                  Sorry Subcriptions Limit Exceeded. Please come letter
                </span>
              )}
            </small>
          </p>
          <p className="font-bold">
            {slots.length}
            {slots.length > 1 ? " Subcriptions" : "Subcription"} available
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setSubscription(singlepackage)}
              disabled={slots.length === 0}
              htmlFor="subscription-modal"
              className="btn btn-primary uppercase"
            >
              Subscribe
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackages;
