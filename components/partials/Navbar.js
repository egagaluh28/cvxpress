import Link from "next/link";
import image from "next/image";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top">
    <div className="container-sm container-md container-lg">
      <a className="navbar-brand" href="#">
        <img src="/img/logo/logo (3).png" height="40" alt="CVXpress Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-lg-4">
          <li className="nav-item">
            <Link href="/#Home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#tools" className="nav-link">
              Tools
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              CV Templates
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#TestimonialSection" className="nav-link">
              testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#CareerBlog" className="nav-link">
              Career Blog
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto gap-lg-4 justify-content-end">
          <li className="nav-item">
            <Link
              href="#"
              className="nav-link btn btn-primary text-white px-4 rounded-pill p-3">
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
