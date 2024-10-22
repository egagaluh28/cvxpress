import React, { useEffect } from "react";

const FeaturesSection = () => {
  useEffect(() => {
    // Add fade-in animation if needed via JS
    const section = document.querySelector(".features-section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="features-section py-5">
      <div className="container-sm container-md container-lg">
        <h2 className="text-center mb-4">Why Choose CVXpress?</h2>
        <div className="row text-center">
          <div className="col-md-4 feature-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Easy to use"
              className="mb-3"
            />
            <h3>Easy to Use</h3>
            <p>
              Get a CV ready in just a few clicks using our simple drag-and-drop
              interface.
            </p>
          </div>
          <div className="col-md-4 feature-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Professional Design"
              className="mb-3"
            />
            <h3>Professional Design</h3>
            <p>
              Choose from a wide range of professional, eye-catching templates.
            </p>
          </div>
          <div className="col-md-4 feature-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Fast Download"
              className="mb-3"
            />
            <h3>Fast Download</h3>
            <p>Instantly download your CV in PDF format with one click.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
