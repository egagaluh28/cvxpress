import { useEffect } from "react";
import Image from "next/image";

export default function ToolsSection() {
  useEffect(() => {
    const toolCards = document.querySelectorAll(".tool-card");

    function animateOnScroll() {
      const viewHeight = window.innerHeight;

      toolCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Jika card sudah terlihat di viewport
        if (rect.top <= viewHeight * 0.8) {
          card.style.opacity = "1"; // Munculkan card
          card.style.transform = "translateY(0)"; // Kembalikan posisi
        }
      });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Trigger pada load

    return () => window.removeEventListener("scroll", animateOnScroll); // Cleanup
  }, []);

  return (
    <div id="tools" className="py-3">
      <section id="tools" className="tools-section py-5">
        <div className="container-sm container-md container-lg">
          <h2 className="text-center mb-4">Our Tools</h2>
          <p className="text-center mb-5">
            Powerful and easy-to-use tools to help you create your perfect CV.
          </p>

          <div className="row">
            <div className="col-md-4 d-flex justify-content-center mb-4 tool-card">
              <div className="card shadow-sm p-3 text-center">
                <Image
                  src="/img/icons/tool1.png"
                  alt="Tool 1"
                  className="mb-3"
                  width={100}
                  height={100}
                />
                <h5>CV Builder</h5>
                <p>
                  Create your professional CV effortlessly using our advanced CV
                  builder.
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center mb-4 tool-card">
              <div className="card shadow-sm p-3 text-center">
                <Image
                  src="/img/icons/tool2.png"
                  alt="Tool 2"
                  className="mb-3"
                  width={100}
                  height={100}
                />
                <h5>Cover Letter Maker</h5>
                <p>
                  Craft the perfect cover letter to complement your CV and
                  increase your chances of landing the job.
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center mb-4 tool-card">
              <div className="card shadow-sm p-3 text-center">
                <Image
                  src="/img/icons/tool3.png"
                  alt="Tool 3"
                  className="mb-3"
                  width={100}
                  height={100}
                />
                <h5>Job Tracker</h5>
                <p>
                  Track your job applications and follow up with companies in
                  one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
