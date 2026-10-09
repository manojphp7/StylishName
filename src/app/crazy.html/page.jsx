import Footer from "../../components/Footer";
import StylishNameGenerator from "../../components/StylishNameGenerator";

export const metadata = {
  title: "Crazy Stylish Name Generator",
  description:
    "Generate Crazy Stylish Name fonts for your Insta Bio, Profile and Chating",
};

export default function CrazyPage() {
  return (
    <>
      <StylishNameGenerator selectedCategory="Crazy" />;
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-3">
              Crazy Name Style Generator – Unique Fonts for Instagram & WhatsApp
            </h1>

            <p>
              Want to add a wild twist to your display name or username? Our{" "}
              <strong>crazy name style</strong> generator helps you transform
              plain text into funky, unpredictable, and eye-catching fonts.
              These crazy styles are perfect for standing out in a crowd,
              whether you're updating your social media profile or just having
              fun with a new nickname.
            </p>

            <p>
              From zigzag letters to quirky shapes and mirrored effects, this
              generator turns your name into something playful and
              attention-grabbing. You don't need any design skills — just type
              your text, and the tool instantly gives you dozens of crazy font
              styles to copy and paste anywhere.
            </p>

            <h2 className="mt-4">Crazy Font Style for Instagram</h2>
            <p>
              Instagram is all about visuals and aesthetics — and your name or
              bio deserves the same level of creativity. Our tool offers a wide
              range of <strong>crazy font style for Instagram</strong> that work
              perfectly in bios, captions, story highlights, and usernames.
              These fonts make your profile unique and more memorable.
            </p>

            <p>
              Whether you want something chaotic and bold or funky and cute,
              there’s a font style here that matches your vibe. Once generated,
              simply copy the font and paste it into your Instagram profile —
              it’s fully compatible and mobile-friendly.
            </p>

            <h2 className="mt-4">Crazy Font Style for WhatsApp</h2>
            <p>
              Give your WhatsApp name, status, or group title a dose of
              creativity with our <strong>crazy font style for WhatsApp</strong>
              . From twisted letters to cool spacing, these fonts make chatting
              more fun and personal. You can surprise your friends or express
              your personality using fonts that go beyond the ordinary.
            </p>

            <p>
              The best part? These styles use Unicode characters, so they work
              seamlessly across WhatsApp chats, groups, and even on WhatsApp
              Web. You don’t need to download any app or plugin — everything
              happens right in your browser.
            </p>

            <h2 className="mt-4">Why Use Crazy Font Styles?</h2>
            <ul>
              <li>Make your social media profiles more fun and attractive</li>
              <li>Give your name or nickname a bold, original touch</li>
              <li>
                Perfect for captions, bios, group names, and display names
              </li>
              <li>
                Easy to copy and paste on Instagram, WhatsApp, Facebook, and
                more
              </li>
              <li>No app needed — completely web-based and free</li>
            </ul>

            <p>
              Whether you’re feeling silly, bold, dramatic, or just want to try
              something new, this tool offers the perfect mix of fonts to match
              your mood. From upside-down text to crazy patterns, every name
              gets a unique transformation.
            </p>

            <p>
              Start creating your own <strong>crazy name style</strong> now and
              give your profile the personality it deserves. Have fun, get
              creative, and stand out like never before.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
