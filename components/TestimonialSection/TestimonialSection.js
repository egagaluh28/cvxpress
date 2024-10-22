import Image from "next/image"; // For optimized image loading
import { useEffect } from "react";

export default function TestimonialSection() {
  useEffect(() => {
    // This is to ensure Bootstrap JS works with the carousel
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap");
      new bootstrap.Carousel(document.getElementById("testimonialCarousel"));
    }
  }, []);

  return (
    <section id="TestimonialSection" className="testimonials-section py-5">
      <div className="container-sm container-md container-lg">
        <h2 className="text-center mb-3">
          HR Professionals Recommend CVXpress
        </h2>
        <p className="text-center">
          Industry experts recommend CVXpress as a proven way to boost your
          career.
        </p>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="row">
                {/* First Column */}
                <div className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <Image
                        src="https://via.placeholder.com/100"
                        alt="Toni Frana"
                        width={100}
                        height={100}
                        className="profile-img"
                      />
                      <div className="testimonial-body">
                        <h5>Toni Frana</h5>
                        <p className="role">Career Expert</p>
                        <p>
                          Job seekers have a lot to contend with when looking
                          for a job, and CVXpress resources make things much
                          easier! The streamlined process of creating a new,
                          polished resume removes one of the pain points for job
                          seekers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Column */}
                <div className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <Image
                        src="https://via.placeholder.com/100"
                        alt="Christine Zapata"
                        width={100}
                        height={100}
                        className="profile-img"
                      />
                      <div className="testimonial-body">
                        <h5>Christine Zapata</h5>
                        <p className="role">CEO, Human Insights Consulting</p>
                        <p>
                          What makes CVXpress unique? The ability to enhance
                          your resume using pre-written content that is
                          optimized for ATS screeners. With just a simple click,
                          you can seamlessly incorporate pre-written
                          descriptions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <div className="row">
                {/* First Column */}
                <div className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <Image
                        src="https://via.placeholder.com/100"
                        alt="Caroline Dowd-Higgins"
                        width={100}
                        height={100}
                        className="profile-img"
                      />
                      <div className="testimonial-body">
                        <h5>Caroline Dowd-Higgins</h5>
                        <p className="role">CTO</p>
                        <p>
                          The worker's market has created fierce competition for
                          roles. Your resume is the first impression and an
                          essential opportunity to distinguish yourself. The
                          CVXpress Resume builder is a great tool to help you
                          stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Column */}
                <div className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <Image
                        src="https://via.placeholder.com/100"
                        alt="Margaret Buj"
                        width={100}
                        height={100}
                        className="profile-img"
                      />
                      <div className="testimonial-body">
                        <h5>Margaret Buj</h5>
                        <p className="role">CEO</p>
                        <p>
                          What I like about CVXpress is its user-friendly
                          interface and customization options. You can easily
                          create a unique and professional-looking resume,
                          saving time and getting closer to your dream job.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
