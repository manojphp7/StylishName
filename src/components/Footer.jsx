import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid pb-4">
    <footer className="bg-light py-3 mt-5 border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left */}
        <div className="mb-2 mb-md-0 text-muted fw-bold">
         <h1
        style={{
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "#6d46cb",
        }}
      >
        Stylish Name
      </h1>
        </div>

        {/* Center */}
        <div className="d-flex gap-3 justify-content-center">
           <Link href="/blog" className="text-muted text-decoration-none">
            Blog
           </Link>
          <Link href="/aboutus.html" className="text-muted text-decoration-none">
            About Us
          </Link>
          <Link href="/privacy-policy.html" className="text-muted text-decoration-none">
            Privacy Policy
          </Link>
          <Link href="/terms.html" className="text-muted text-decoration-none">
            Terms & Conditions
          </Link>
          <Link href="/contact.html" className="text-muted text-decoration-none">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
