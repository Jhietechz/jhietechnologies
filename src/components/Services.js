import React from "react";

const Services = () => {
  return (
    <section className="row g-4 mb-5">
      <div className="col-md-4">
        <div className="card bg-secondary text-white">
          <div className="card-body">
            <h3 className="card-title">Web Development</h3>
            <p>Building stunning and efficient websites tailored to your needs.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-secondary text-white">
          <div className="card-body">
            <h3 className="card-title">Digital Design</h3>
            <p>Creating visually appealing designs to elevate your brand.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-secondary text-white">
          <div className="card-body">
            <h3 className="card-title">Social Media</h3>
            <p>Helping you establish and grow your online presence.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;