import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const toggleButton = document.getElementById("menu-toggle");
    const wrapper = document.getElementById("wrapper");

    const handleToggle = (e) => {
      e.preventDefault();
      wrapper.classList.toggle("toggled");
    };

    if (toggleButton) {
      toggleButton.addEventListener("click", handleToggle);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <div className="d-flex" id="wrapper">
      {/* Side Navigation */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">CVXpress Admin </div>
        <div className="list-group list-group-flush">
          <Link
            href="/admin/dashboard"
            className="list-group-item list-group-item-action bg-light">
            Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="list-group-item list-group-item-action bg-light">
            User Management
          </Link>
          <Link
            href="/admin/cv"
            className="list-group-item list-group-item-action bg-light">
            CV Management
          </Link>
          <Link
            href="/admin/templates"
            className="list-group-item list-group-item-action bg-light">
            Template Management
          </Link>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
            onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button className="btn btn-primary" id="menu-toggle">
            Toggle Menu
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid mt-4">{children}</div>
      </div>

      {/* Styling dan Layout */}
      <style jsx>{`
        #wrapper {
          display: flex;
          width: 100%;
        }

        #sidebar-wrapper {
          min-height: 100vh;
          width: 250px;
          margin-left: -250px;
          transition: margin 0.25s ease-out;
        }

        #sidebar-wrapper .sidebar-heading {
          padding: 0.875rem 1.25rem;
          font-size: 1.2rem;
        }

        #sidebar-wrapper .list-group {
          width: 250px;
        }

        #page-content-wrapper {
          width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
          margin-left: 0;
        }

        /* Media Queries */
        @media (min-width: 768px) {
          #sidebar-wrapper {
            margin-left: 0;
          }

          #page-content-wrapper {
            min-width: 0;
            width: 100%;
          }

          #wrapper.toggled #sidebar-wrapper {
            margin-left: -250px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
