import Link from "next/link";

export const metadata = {
  title: "About Us - StylishName",
  description:
    "Learn more about StylishName.co.in, our mission, and how we help users create stylish names in beautiful, unique font styles.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://stylishname.co.in/aboutus.html",
  }  
};

export default function AboutusPage() {
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

      <h2>About Us</h2>
      <p>Last updated 12, 2025</p>

      <p>
        Welcome to <strong>StylishName.co.in</strong>, your go-to destination
        for creating stylish, unique, and eye-catching text designs. Our
        platform is designed to help you transform plain text into creative
        name styles that stand out on social media, gaming profiles, and
        personal branding.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple — to provide a free, easy-to-use tool that lets
        you express yourself through beautiful and creative font styles. We
        believe your name is your identity, and it deserves to look are.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>
          A wide range of font styles including <em>love, fancy, bold, cursive,
          crazy, and cute</em> designs.
        </li>
        <li>
          Instant name styling for Instagram, WhatsApp, Facebook, Twitter, and
          more.
        </li>
        <li>Mobile-friendly design that works on any device.</li>
        <li>No installation required — 100% browser-based.</li>
      </ul>

      <h2>Who Can Use It?</h2>
      <p>
        Our tool is for everyone — social media users, gamers, content creators,
        influencers, and anyone who wants their name to stand out with style.
      </p>

      <h2>Our Commitment</h2>
      <p>
        We continuously improve our platform by adding new styles, enhancing
        performance, and ensuring a smooth user experience. If you have
        suggestions for new features or styles, we’d love to hear from you.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions, feedback, or collaboration inquiries, please email
        us at:
      </p>
      <p>
        <a href="mailto@stylishname.co.in">
          admin@stylishname.co.in
        </a>
      </p>
    </div>
  );
}
