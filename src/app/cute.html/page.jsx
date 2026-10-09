import Footer from "../../components/Footer";
import StylishNameGenerator from "../../components/StylishNameGenerator";

export const metadata = {
  title: "Cute Stylish Name Generator",
  description: "Generate Cute Stylish Name fonts for your Insta Bio, Profile and Chating",
};

export default function CutePage() {
  return <>
  <StylishNameGenerator selectedCategory="Cute" />;
  <section className="container py-4">
  <div className="row justify-content-center">
    <div className="col-lg-10">
      <h1 className="mb-4">Create Your Cute Stylish Name – Make Your Text Adorable & Trendy</h1>

      <p>
        Looking to add charm to your name? With our <strong>cute stylish name</strong> generator at <strong>StylishName.co.in</strong>,
        you can easily transform any name or word into a lovely, eye-catching font. Whether you're designing a cute Instagram username,
        a nickname for your bestie, or a fancy name for your gaming profile, we've got you covered with 100+ adorable font styles.
      </p>

      <p>
        From hearts 💖 to stars ✨, bows 🎀 to floral fonts 🌸 — our tool helps you generate the perfect <strong>cute stylish name</strong>{" "}
        for Instagram, WhatsApp, Snapchat, Free Fire, or any other platform where style matters. The best part? It's totally free and works on any device!
      </p>

      <h2 className="mt-5">What Makes a Name Look Cute & Stylish?</h2>
      <p>
        A <strong>cute stylish name</strong> often combines soft curves, symbols, emojis, and playful typography that gives your text
        a sweet and friendly vibe. With our generator, you can add hearts, sparkles, kawaii-style letters, and other lovely elements
        to make your name look completely unique.
      </p>

      <h2 className="mt-5">Features of Our Cute Stylish Name Generator</h2>
      <ul className="list-unstyled ps-3">
        <li>🌸 100+ stylish, sweet, and girly fonts</li>
        <li>💬 Perfect for cute Instagram usernames and bios</li>
        <li>🎮 Works for gaming IDs like BGMI, PUBG, Free Fire</li>
        <li>📋 One-tap copy-paste functionality</li>
        <li>📱 Mobile-friendly, no login or app needed</li>
      </ul>

      <h2 className="mt-5">How to Generate Your Cute Stylish Name</h2>
      <p>
        Just type your name or any word into our input box, and you'll instantly see it transformed into dozens of cute styles.
        Choose the one you love and copy it with a single click. It's that easy to create a <strong>cute stylish name</strong>{" "}
        you can use on social media, games, or even contact name!
      </p>

      <p>
        Ready to charm your friends with a cute new name? Try our <strong>cute stylish name</strong> generator today and make your
        profile adorable and standout!
      </p>
    </div>
  </div>
</section>

  <Footer />
  </>
}
