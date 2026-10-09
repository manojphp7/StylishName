import StylishNameGenerator from "../components/StylishNameGenerator";
import Footer from "../components/Footer";

export const metadata = {
  title: "Stylish Name Generator | Stylish Name for Instagram,WhatsApp etc",
  description:
    "Stylish name for instagram, beautiful stylish name ideas and names in stylish font for whatsApp,Chating, games much more. Try our free Stylish Name Generator!",
};

export default function HomePage() {
  return (
    <>
      {/* <Header selectedCategory="All" /> */}
      <StylishNameGenerator selectedCategory="All" />
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4">
              Generate Your Stylish Name in Beautiful Fonts
            </h1>

            <p>
              Welcome to <strong>StylishName.co.in</strong> — your ultimate free
              tool to generate a <strong>stylish name</strong> for Instagram,
              Facebook, WhatsApp, Free Fire, BGMI, and more. Whether you want a{" "}
              <strong>beautiful stylish name</strong> for your social media
              profile, a unique gaming ID, or a creative username that truly
              stands out, we make it effortless to craft the perfect{" "}
              <strong>name in stylish font</strong> — no sign-up, no downloads,
              completely free!
            </p>

            <p>
              Our tool is trusted by millions of users across India who want to
              express their personality through unique and eye-catching font
              styles. From cute cursive scripts to bold decorative letters,
              every style is just one click away.
            </p>

            <h2 className="mt-5">
              Create Stylish Name for Instagram, Gaming & Social Media
            </h2>
            <p>
              With our powerful online <strong>Stylish Name Generator</strong>,
              you can instantly convert any name or text into a stunning{" "}
              <strong>stylish name for Instagram</strong>, gaming platforms like
              Free Fire or BGMI, or handles for TikTok, YouTube, and Snapchat.
              Our generator offers <strong>100+ unique font styles</strong> —
              including fancy symbols, cursive lettering, bubble text, mirror
              fonts, and more — making it easy to discover a{" "}
              <strong>name in stylish font</strong> that perfectly reflects your
              vibe and personality.
            </p>
            <p>
              Whether you're a content creator looking to strengthen your brand
              identity, a gamer wanting a fierce and cool username, or someone
              simply refreshing their social media presence — our{" "}
              <strong>stylish name</strong> generator has something for
              everyone.
            </p>

            <h2 className="mt-5">Why Choose Our Stylish Name Generator?</h2>
            <ul className="list-unstyled ps-3">
              <li>
                ✅ <strong>100+ fancy, cool & stylish fonts</strong> to choose
                from
              </li>
              <li>
                ✅ Perfect for <strong>Instagram stylish names</strong>, bios &
                captions
              </li>
              <li>
                ✅ Instant <strong>copy & paste</strong> — works everywhere
              </li>
              <li>✅ No app download or login required</li>
              <li>
                ✅ Fully compatible with all devices — mobile, tablet & desktop
              </li>
              <li>✅ Updated regularly with new font styles & symbols</li>
              <li>✅ 100% free to use, forever</li>
            </ul>

            <h2 className="mt-5">
              Design Your Beautiful Stylish Name in Seconds
            </h2>
            <p>
              Using our tool is incredibly simple. Just type your name or
              nickname in the input box, and instantly explore a wide variety of
              cool, cursive, bold, and <strong>beautiful stylish name</strong>{" "}
              styles generated in real time. Browse through the results, pick
              your favourite <strong>name in stylish font</strong>, and hit copy
              — it's that easy!
            </p>
            <p>
              Your stylish name can be used directly on Instagram bios, WhatsApp
              display names, Facebook profiles, gaming IDs, and anywhere else
              you want to leave a lasting impression. No technical knowledge
              needed — if you can type, you can create a stunning{" "}
              <strong>stylish name</strong> in seconds.
            </p>

            <h2 className="mt-5">What Makes a Stylish Name Stand Out?</h2>
            <p>
              A great <strong>stylish name</strong> is more than just fancy
              letters — it reflects your identity, attitude, and creativity.
              With the right <strong>name in stylish font</strong>, your profile
              instantly looks more polished and memorable. That's why thousands
              of users visit <strong>StylishName.co.in</strong> every day to
              create <strong>beautiful stylish names</strong> that help them
              stand out in a crowded digital world.
            </p>

            <p>
              Try it now and turn your simple text into a stunning{" "}
              <strong>name in stylish font</strong> in just one click — because
              your name deserves to look as unique as you are!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
