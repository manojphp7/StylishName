import seoData from "./seoData.json";
import unicodeStyles from "../../../styles/unicodeStyles";
import StylishNameGenerator from "../../components/StylishNameGenerator";
import Footer from "../../components/Footer"


// Fix generateStaticParams
export async function generateStaticParams() {
  return seoData.map((item) => ({ name: item.keyword }));
}

export function generateMetadata({ params }) {
  const seoItem = seoData.find((item) => item.keyword === params.name);
  return {
    title:
      (seoItem && seoItem.title) ||
      `${params.name} Stylish Name Generator`,
     description: (seoItem && seoItem.description) ||
      `Explore stylish name designs for ${params.name}. Create unique text styles for your profile.`,
  };
}

export default function NamePage({ params }) {
  const { name } = params;
  
  const seoItem = seoData.find((item) => item.keyword === name);

  const stylesByCategory = {};
  unicodeStyles.forEach((style) => {
    if (!stylesByCategory[style.category]) stylesByCategory[style.category] = [];
    if (stylesByCategory[style.category].length < 10) {
      stylesByCategory[style.category].push(style);
    }
  });

  return (
    <>
      <StylishNameGenerator
        selectedCategory="All"
        dynamicName={seoItem ? seoItem.dynamicName : ""}
      />
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {seoItem ? (
              <div dangerouslySetInnerHTML={{ __html: seoItem.seo_content || "" }} />
            ) : (
              <>
                <h1>Stylish Name for {name}</h1>
                <ul>
                  <li>★彡{name}彡★</li>
                  <li>✿{name}✿</li>
                  <li>{name}♡ツ</li>
                  <li>【☆】{name}【☆】</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
