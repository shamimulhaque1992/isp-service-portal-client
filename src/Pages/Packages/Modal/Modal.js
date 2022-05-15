import { format } from "date-fns";
import React from "react";

const Modal = ({ subscription, currentDate,setSubscription }) => {
  const {_id, name, slots } = subscription;
  const handleSubscription = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(_id, name,email);
    setSubscription(null);
  };
  return (
    <div>
      <input type="checkbox" id="subscription-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="subscription-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Subscription for: {name}</h3>
          <form onSubmit={handleSubscription} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subscription Date</span>
              </label>
              <input
                type="text"
                value={format(currentDate, "PP")}
                disabled
                placeholder="Subscription Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subscription Slot</span>
              </label>
              <select name="slot" className="select select-bordered w-full ">
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="modal-action form-control mt-6">
              <input
                value="Subscrib"
                type="submit"
                htmlFor="subscription-modal"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
