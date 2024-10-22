import Image from "next/image"; // For optimized image loading in Next.js

export default function HelpSection() {
  return (
    <section className="help-section py-5">
      <div className="container-sm container-md container-lg">
        <h2>How Can We Help You?</h2>
        <div className="row gy-4">
          {/* Resume Builder */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing Resume Builder"
                width={64}
                height={64}
              />
              <div>
                <h5>Resume Builder</h5>
                <p>
                  cvxpress <a href="#">resume builder</a> will save you time and
                  provide expert tips every step of the way. Creating a resume
                  has never been easier.
                </p>
              </div>
            </div>
          </div>

          {/* Cover Letter Builder */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing Cover Letter Builder"
                width={64}
                height={64}
              />
              <div>
                <h5>Cover Letter Builder</h5>
                <p>
                  Smoothly <a href="#">generate a job-winning cover letter</a>{" "}
                  with our drag-and-drop interface.
                </p>
              </div>
            </div>
          </div>

          {/* ATS-Friendly Resume Templates */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing ATS-Friendly Resume Templates"
                width={64}
                height={64}
              />
              <div>
                <h5>ATS-Friendly Resume Templates</h5>
                <p>
                  Grab recruiters’ attention with one of{" "}
                  <a href="#">18 professional resume templates</a> designed by
                  career experts.
                </p>
              </div>
            </div>
          </div>

          {/* Free Career Advice Resources */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing Free Career Advice Resources"
                width={64}
                height={64}
              />
              <div>
                <h5>Free Career Advice Resources</h5>
                <p>
                  Consciously shape your career with helpful guides and resume
                  examples. Writing the perfect job application? Asking for a
                  raise? Learn it all on <a href="#">our blog</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Resume Check */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing Resume Check"
                width={64}
                height={64}
              />
              <div>
                <h5>Resume Check</h5>
                <p>
                  <a href="#">Score and check your resume</a> in real-time with
                  our resume checker. Get actionable tips to improve your
                  resume.
                </p>
              </div>
            </div>
          </div>

          {/* Ready-Made Content Suggestions */}
          <div className="col-md-4">
            <div className="help-box">
              <Image
                src="https://via.placeholder.com/64"
                alt="Icon representing Ready-Made Content Suggestions"
                width={64}
                height={64}
              />
              <div>
                <h5>Ready-Made Content Suggestions</h5>
                <p>
                  Discover expert-crafted content suggestions and create a
                  professional job application in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
