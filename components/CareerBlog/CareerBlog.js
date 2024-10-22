import React, { useEffect, useState } from "react";

export default function CareerBlogSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".career-blog-section");
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // Trigger when 100px is visible from the bottom

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="CareerBlog" className="career-blog-section py-1">
      <div className="container-sm container-md container-lg">
        <div
          className={`row mb-4 text-center ${
            isVisible ? "animate-fade-down" : ""
          }`}>
          <div className="col">
            <h2 className="section-title">Career Blogs</h2>
            <p className="section-description">
              Insights and tips for your career development.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Blog Post 1 */}
          <div
            className={`col-lg-4 col-md-6 mb-4 ${
              isVisible ? "animate-slide-right" : ""
            }`}>
            <div className="card h-100">
              <img
                src="/img/blog/career1.jpg"
                className="card-img-top"
                alt="Career Blog 1"
              />
              <div className="card-body">
                <h5 className="card-title">Career Tips Title 1</h5>
                <p className="card-text">
                  Short description of the first career blog post. It should
                  give an overview of the content.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div
            className={`col-lg-4 col-md-6 mb-4 ${
              isVisible ? "animate-slide-right" : ""
            }`}>
            <div className="card h-100">
              <img
                src="/img/blog/career2.jpg"
                className="card-img-top"
                alt="Career Blog 2"
              />
              <div className="card-body">
                <h5 className="card-title">Career Tips Title 2</h5>
                <p className="card-text">
                  A brief description of the second career blog post.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div
            className={`col-lg-4 col-md-6 mb-4 ${
              isVisible ? "animate-slide-right" : ""
            }`}>
            <div className="card h-100">
              <img
                src="/img/blog/career3.jpg"
                className="card-img-top"
                alt="Career Blog 3"
              />
              <div className="card-body">
                <h5 className="card-title">Career Tips Title 3</h5>
                <p className="card-text">
                  Description for the third career blog post can go here.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
