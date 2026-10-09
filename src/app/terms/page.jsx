import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - StylishName",
  description: "Terms you agree to when using StylishName.co.in.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://stylishname.co.in/terms.html",
  }
};

export default function TermsPage() {
  return (
    <div className="container py-4">
     <Link
          key={"All"}
          href={`/`}
          
        >
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
  <h2>Terms & Conditions</h2>
  <p>Last updated 5, 2025</p>

  <p>Welcome to <strong>StylishName</strong> (https://stylishname.co.in). By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our website.</p>

  <h2>1. Use of the Website</h2>
  <p>StylishName is a free online tool for generating stylish names using Unicode-based fonts. You may use this website for personal, non-commercial purposes only. Unauthorized use of this website or its content is prohibited.</p>

  <h2>2. Intellectual Property</h2>
  <p>All content on this website, including text, logos, graphics, and the underlying code, is the property of StylishName or its content creators. You may not reproduce, distribute, or create derivative works without explicit permission.</p>

  <h2>3. User Conduct</h2>
  <p>When using this site, you agree not to:</p>
  <ul>
    <li>Use the site for any unlawful purpose</li>
    <li>Upload or share malicious content or spam</li>
    <li>Attempt to gain unauthorized access to the site's systems</li>
  </ul>

  <h2>4. Disclaimer</h2>
  <p>This site is provided "as is" without warranties of any kind. While we strive for accuracy, we make no guarantees about the completeness, reliability, or availability of the website or its content.</p>

  <h2>5. Limitation of Liability</h2>
  <p>StylishName and its team shall not be held liable for any damages or losses resulting from the use of this website.</p>

  <h2>6. Third-Party Links</h2>
  <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those external sites.</p>

  <h2>7. Termination</h2>
  <p>We reserve the right to suspend or terminate your access to the site at any time, without notice, for conduct that violates these terms.</p>

  <h2>8. Changes to These Terms</h2>
  <p>We may modify these Terms & Conditions at any time. Updated terms will be posted on this page with a new "Last updated" date.</p>

  <h2>9. Governing Law</h2>
  <p>These terms are governed by and construed in accordance with the laws of India.</p>

  <h2>10. Contact Us</h2>
  <p>If you have any questions about these Terms, please contact us at:</p>
  <p><a href="mailto@stylishname.co.in">admin@stylishname.co.in</a></p>
</div>

  );
}