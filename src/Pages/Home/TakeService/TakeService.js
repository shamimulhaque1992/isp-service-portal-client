import React from "react";
import "./TakeSerivce.css"

const TakeService = () => {
  return (
    <div className="">
      <div className="hero takeServiceHero min-h-screen bg-base-200">
        <div className="relative hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            className="takeServiceImg max-w-sm rounded-lg shadow-2xl" alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeService;
