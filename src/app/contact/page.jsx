import Link from "next/link";

export const metadata = {
  title: "Contact Us - StylishName",
  description:
    "Get in touch with StylishName.co.in for feedback, support, or collaboration inquiries.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://stylishname.co.in/contact.html",
  }  
};

export default function ContactPage() {
  return (
    <div className="container py-4">
      <Link key={"All"} href={`/`}>
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "#6d46cb",
          }}
        >
          Stylish Name
        </h1>
      </Link>

      <h2>Contact Us</h2>
      <p>Last updated 12, 2025</p>

      <p>
        We’d love to hear from you! Whether you have feedback, need assistance,
        or want to discuss a collaboration, feel free to reach out to us using
        the details below.
      </p>

      <h2>Email</h2>
      <p>
        For general inquiries and support:
        <br />
        <a href="mailto@stylishname.co.in">
          admin@stylishname.co.in
        </a>
      </p>

      <h2>Social Media</h2>
      <p>
        Follow us for updates, new font styles, and inspiration:
      </p>


      <h2>Business & Partnerships</h2>
      <p>
        If you are interested in partnering with us or exploring business
        opportunities, please email:
      </p>
      <p>
        <a href="mailto@gmail.com">
         manojphp7@gmail.com
        </a>
      </p>

      <h2>Feedback & Suggestions</h2>
      <p>
        We’re always looking to improve our platform. If you have ideas for new
        features or font styles, let us know! Your feedback helps us grow and
        serve you better.
      </p>
    </div>
  );
}