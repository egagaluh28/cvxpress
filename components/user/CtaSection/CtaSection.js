// components/CtaSection.js
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="cta-section py-5">
      <div className="container text-center">
        <h2>Ready to Create Your CV?</h2>
        <p>
          Join thousands of users who have used CVXpress to get their dream
          jobs.
        </p>
        <Link href="#" className="btn btn-lg btn-primary">
          Create My CV Now
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
