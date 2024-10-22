import React, { useEffect, useState } from "react";

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".blog-section");
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
    <section id="CarrerBlog" className="blog-section py-5">
      <div className="container">
        <div className={`row mb-4 text-center ${isVisible ? 'animate-fade-down' : ''}`}>
          <div className="col">
            <h2 className="section-title">Latest Blogs</h2>
            <p className="section-description">
              Stay updated with our latest news and articles.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Blog Post 1 */}
          <div className={`col-lg-4 col-md-6 mb-4 ${isVisible ? 'animate-slide-right' : ''}`}>
            <div className="card h-100">
              <img
                src="/img/blog/blog1.jpg"
                className="card-img-top"
                alt="Blog 1"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 1</h5>
                <p className="card-text">
                  This is a short description of the first blog post. It should
                  give an overview of the blog content.
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
          <div className={`col-lg-4 col-md-6 mb-4 ${isVisible ? 'animate-slide-right' : ''}`}>
            <div className="card h-100">
              <img
                src="/img/blog/blog2.jpg"
                className="card-img-top"
                alt="Blog 2"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 2</h5>
                <p className="card-text">
                  This is a short description of the second blog post.
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
          <div className={`col-lg-4 col-md-6 mb-4 ${isVisible ? 'animate-slide-right' : ''}`}>
            <div className="card h-100">
              <img
                src="/img/blog/blog3.jpg"
                className="card-img-top"
                alt="Blog 3"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Post Title 3</h5>
                <p className="card-text">
                  A short description of the third blog post can go here.
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
