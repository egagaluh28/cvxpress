import React, { useEffect } from "react";

const WhatSection = () => {
  useEffect(() => {
    // Add fade-in animation using JavaScript or CSS class
    const section = document.querySelector(".what-section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="what-section py-5">
      <div className="container-sm container-md container-lg">
        <div className="row">
          {/* Left column for achievements */}
          <div className="col-md-6 align-content-center">
            <div className="row justify-content-center text-center">
              <div className="col-6 stats-item">
                <h3 className="stats">10K+</h3>
                <h4>Resumes created</h4>
              </div>
              <div className="col-6 stats-item">
                <h3 className="stats">500+</h3>
                <h4>Free guides</h4>
              </div>
            </div>
            <div className="row justify-content-center text-center mt-4">
              <div className="col-6 stats-item">
                <h3 className="stats">20K+</h3>
                <h4>Users a year</h4>
              </div>
              <div className="col-6 stats-item">
                <h3 className="stats">100+</h3>
                <h4>Career Experts</h4>
              </div>
            </div>
          </div>
          {/* Right column for description */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-md-start text-center description">
            <h1 className="mb-3 mt-3">What is CVXpress?</h1>
            <p className="lead">
              CVXpress is an all-in-one resume building platform powered by top
              career experts and trusted by thousands of professionals every
              year.
            </p>
            <p>
              We offer the best resume builder and professional advice from
              career experts. We understand how stressful job hunting can be, so
              we strive to make the process as easy as possible. You can count
              on us throughout your professional journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
