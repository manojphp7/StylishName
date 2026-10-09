import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AdsenseInit from "../components/AdsenseInit";
import Script from 'next/script'

export const metadata = {
  title: "Stylish Name Generator",
  description: "Generate stylish names with cool fonts!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
        
        <AdsenseInit />
        
        </body>
          {/* Scripts ko yahan, html tag ke bahar rakhein */}
      <Script id="metapusher-config" strategy="afterInteractive">
        {`
          const METAPUSHER_CONFIG = {
            siteUrl: window.location.origin,
            userKey: "01KGKM3KKT397Y9CMMA6014BKKid2ZOpailwmMN8rp",
            swUrl: "/sw.js"
          };
          window.MetaPusher = METAPUSHER_CONFIG;
        `}
      </Script>
      <Script 
        src="https://metapusher.com/cdn/pushnotification-min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
