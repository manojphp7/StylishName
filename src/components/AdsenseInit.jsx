// src/components/AdsenseInit.jsx
'use client';
import { useEffect } from 'react';

export default function AdsenseInit() {
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //    // Disable Adsense on localhost
  //    console.log(window.location.hostname)
  //   if (window.location.hostname === 'localhost') return;

  //   // Ensure global array exists
  //   window.adsbygoogle = window.adsbygoogle || [];

  //   const scriptSelector = 'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';

  //   // If the script is not on the page yet, add it
  //   if (!document.querySelector(scriptSelector)) {
  //     const s = document.createElement('script');
  //     s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3608273744120551';
  //     s.async = true;
  //     s.crossOrigin = 'anonymous';
  //     document.body.appendChild(s);

  //     s.onload = () => {
  //       try {
  //         window.adsbygoogle.push({});
  //       } catch (err) {
  //         console.error('adsbygoogle push after load error:', err);
  //       }
  //     };
  //   } else {
  //     // Script already there — just trigger a re-scan
  //     try {
  //       window.adsbygoogle.push({});
  //     } catch (err) {
  //       console.error('adsbygoogle push error:', err);
  //     }
  //   }
  // }, []);

  return null;
}
