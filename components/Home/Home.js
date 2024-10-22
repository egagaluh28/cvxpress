import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Animasi untuk gambar
    const img = document.querySelector(".img-slide-in");
    if (img) {
      img.style.opacity = "1";
      img.style.transform = "translateX(0)";
    }

    // Animasi untuk teks
    const texts = document.querySelectorAll(".text-fade-down");
    texts.forEach((text, index) => {
      setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
      }, index * 200);
    });

    // Animasi untuk tombol
    const btn = document.querySelector(".btn-fade-in");
    if (btn) {
      setTimeout(() => {
        btn.style.opacity = "1";
        btn.style.transform = "scale(1)";
      }, 600);
    }

    // Animasi untuk logo wrapper
    const logoWrapper = document.querySelector(".logo-wrapper");
    const logoInner = document.querySelector(".logo-inner");
    if (logoWrapper && logoInner) {
      const logoWidth = logoInner.scrollWidth;
      const scrollDuration = 20000;
      logoWrapper.style.animationDuration = `${scrollDuration}ms`;
      logoWrapper.style.width = `${logoWidth * 2}px`;
    }

    // Animasi saat scroll
    const sections = document.querySelectorAll(
      ".what-section, .features-section, .stats-item, .feature-item, .description, .step-section, .step-item, .help-section, .help-box, .testimonials-section, .testimonial-card, .tool-card"
    );
    function animateOnScroll() {
      const viewHeight = window.innerHeight;
      sections.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewHeight * 0.6) {
          element.classList.add("animated");
        }
      });
    }

    let debounceTimer;
    window.addEventListener("scroll", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(animateOnScroll, 100);
    });

    animateOnScroll(); // Trigger on load
  }, []); // Hanya dijalankan sekali setelah halaman di-render

  return (
    <div id="Home" className="hero-section py-4">
      <section className="hero-section">
        <div className="container-sm container-md container-lg">
          <div className="row align-items-center">
            {/* Animasi untuk teks dari atas */}
            <div className="col-lg-6 text-lg-start text-center">
              <h1 className="text-fade-down">
                CV Maker
                <br />
                Build Your Professional CV Online
              </h1>
              <p className="text-fade-down">Fast. Easy. Effective.</p>
              <p className="mb-3 text-fade-down">
                Create a standout CV in minutes. Use our easy-to-use CV maker
                and land your dream job today.
              </p>
              <a
                href="/template-cv/cv"
                className="btn btn-primary p-3 m-2 d-lg-inline d-block mx-auto rounded-5 btn-fade-in">
                Create Your CV Now
              </a>
            </div>
            {/* Animasi untuk gambar dari samping kanan */}
            <div className="col-lg-6 hero-image d-flex justify-content-center mt-3">
              <Image
                src="/img/konten1.jpg" // Image path should match your Next.js public folder structure
                alt="CV Example"
                width={700} // Set the width of the image
                height={500} // Set the height of the image
                className="img-slide-in"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
