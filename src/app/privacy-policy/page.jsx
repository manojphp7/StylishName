import Link from "next/link";
import unicodeStyles, {
  UnicodeStyle,
  categories,
} from "../../../styles/unicodeStyles";


export const metadata = {
  title: "Privacy Policy - StylishName",
  description: "Learn how StylishName handles your data and privacy.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://stylishname.co.in/privacy-policy.html",
  }
};

export default function PrivacyPolicyPage() {
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
      <h2>Privacy Policy</h2>
      <p>Last updated 5, 2025</p>

      <p>
        Welcome to <strong>StylishName</strong> (https://stylishname.co.in). We
        value your privacy and are committed to protecting your personal
        information. This privacy policy explains how we collect, use, and
        safeguard your data when you use our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not require you to create an account or provide personal
        information to use our tool. However, we may collect limited technical
        data for analytics and improvement purposes, including:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Referring pages</li>
        <li>Time and date of access</li>
      </ul>

      <h2>2. Use of Information</h2>
      <p>The information we collect is used for:</p>
      <ul>
        <li>Improving user experience</li>
        <li>Monitoring and analyzing usage trends</li>
        <li>Fixing bugs and optimizing site performance</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        Our website may use cookies or similar technologies to enhance
        functionality and performance. By continuing to use our site, you
        consent to the use of cookies in accordance with this policy.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We may use third-party services such providers or ad
        networks (e.g., Google Analytics, Google AdSense) which may collect data their own privacy policies.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your data. However,
        no method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        StylishName is not directed toward children under the age of 13. We do
        not knowingly collect personal information from children.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this privacy policy at any time. When we do, we will
        revise the "Last updated" date at the top of this page.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact us
        at:
      </p>
      <p>
        <a href="mailto@stylishname.co.in">admin@stylishname.co.in</a>
      </p>
    </div>
  );
}
