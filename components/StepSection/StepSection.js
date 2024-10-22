import Image from "next/image"; // For optimized image loading in Next.js

export default function StepSection() {
  return (
    <section className="step-section py-5">
      <div className="container-sm container-md container-lg">
        <h2 className="text-center mb-lg-5 pb-xl-3">
          Make a job-winning CV in four simple steps
        </h2>
        <div className="row text-center">
          {/* Step 1 */}
          <div className="col-md-3 step-item">
            <Image
              src="https://via.placeholder.com/100"
              alt="Pick a Template"
              width={100}
              height={100}
              className="mb-3"
            />
            <div className="px-2">
              <button className="rounded-2 step-label">STEP 1</button>
            </div>
            <h3>Pick a template</h3>
            <p>
              Select from 18 professional templates crafted by career experts
              and designers to boost your chances of landing an interview.
            </p>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 step-item">
            <Image
              src="https://via.placeholder.com/100"
              alt="Use Expert Prompts"
              width={100}
              height={100}
              className="mb-3"
            />
            <div className="px-2">
              <button className="rounded-2 step-label">STEP 2</button>
            </div>
            <h3>Use expert prompts to fill it out</h3>
            <p>
              Quickly add customized, job-specific content to your resume
              created by Certified Professional Resume Writers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 step-item">
            <Image
              src="https://via.placeholder.com/100"
              alt="Play with Design"
              width={100}
              height={100}
              className="mb-3"
            />
            <div className="px-2">
              <button className="rounded-2 step-label">STEP 3</button>
            </div>
            <h3>Play with the design</h3>
            <p>
              Easily adjust colors, fonts, and layout using our intuitive
              interface.
            </p>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 step-item">
            <Image
              src="https://via.placeholder.com/100"
              alt="Hit Download and Enjoy"
              width={100}
              height={100}
              className="mb-3"
            />
            <div className="px-2">
              <button className="rounded-2 step-label">STEP 4</button>
            </div>
            <h3>Hit download and enjoy</h3>
            <p>
              Download your polished resume in the preferred file format and
              apply for your dream job right away.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary px-4 py-2 rounded-5">
            Create Your CV Now
          </a>
        </div>
      </div>
    </section>
  );
}
