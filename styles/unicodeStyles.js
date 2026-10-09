// Helper to build mapping transforms
export const makeMapStyle = (name, category, mapper, perChar = true) => ({
  name,
  category,
  transform: (text) =>
    perChar
      ? Array.from(text)
          .map((c, i) => mapper(c, i))
          .join("")
      : mapper(text),
});

export const categoryAnchorText = {
  Love: "Lover Name",
  Fancy: "Fancy Text Generator",
  Cute: "Cute Stylish Name",
  Bold: "Bold Text Generator",
  Cursive: "Cursive Stylish Name",
  Crazy: "Crazy Name Style",
  Stylish: "Beautiful Stylish Name",
};

const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const unicodeStyles = [];

// 1–10: Love & Cute
unicodeStyles.push(
  makeMapStyle("❤️ Love Letters", "Love", (c, i) => `❤️${c}❤️`),
  makeMapStyle("Cute Hearts 💖", "Love", (c) => c + "💖"),
  makeMapStyle("💘 Cupid Arrows", "Love", (c) => `💘${c}`),
  makeMapStyle("💞 Swirling Hearts", "Love", (c) => `${c}💞`),
  makeMapStyle("💌 Love Letters Decor", "Love", (c) => `💌${c}💌`),
  makeMapStyle("💓 Pulsing Love", "Love", (c, i) =>
    i % 2 === 0 ? `💓${c}` : `${c}💓`
  ),
  makeMapStyle("💕 Twin Hearts", "Love", (c) => `${c}💕`),
  makeMapStyle("💝 Gift Hearted", "Love", (c) => `💝${c}`),
  makeMapStyle("💗 Heartbeat Style", "Love", (c) => `${c}💗`),
  makeMapStyle("💟 Decorative Heart", "Love", (c) => `💟${c}`),
  makeMapStyle("💑 Couple Love", "Love", (c, i) =>
    i % 2 === 0 ? `${c}💑` : `💑${c}`
  ),
  makeMapStyle("💋 Kisses", "Love", (c) => `${c}💋`),
  makeMapStyle("🌹 Romantic Roses", "Love", (c) => `🌹${c}🌹`),
  makeMapStyle("🌷 Tulip Trail", "Love", (c, i) =>
    i % 2 === 0 ? `🌷${c}` : `${c}🌷`
  ),
  makeMapStyle("🥰 Affection Faces", "Love", (c) => `🥰${c}`),
  makeMapStyle("😍 Star Eyes", "Love", (c) => `${c}😍`),
  makeMapStyle("😘 Flying Kiss", "Love", (c, i) =>
    i % 3 === 0 ? `😘${c}` : `${c}`
  ),
  makeMapStyle("✨ Sparkling Love", "Love", (c) => `✨${c}✨`),
  makeMapStyle("💫 Magical Text", "Love", (c) => `💫${c}`),
  makeMapStyle("🪽 Angelic Style", "Love", (c) => `🪽${c}`),
  makeMapStyle(
    "🌈 Rainbow Love",
    "Love",
    (c, i) => ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪"][i % 6] + c
  ),
  makeMapStyle("🔥 Burning Love", "Love", (c) => `🔥${c}`),
  makeMapStyle("💥 Explosive Love", "Love", (c) => `💥${c}`),
  makeMapStyle("🫶 Heart Hands", "Love", (c) => `${c}🫶`),
  makeMapStyle("🌺 Hibiscus Love", "Love", (c) => `🌺${c}`),
  makeMapStyle("🌼 Daisy Chain", "Love", (c) => `${c}🌼`),
  makeMapStyle("🎀 Ribboned Romance", "Love", (c) => `🎀${c}🎀`),
  makeMapStyle("💃 Dancing Love", "Love", (c) => `💃${c}`),
  makeMapStyle("🕊 Dove Letters", "Love", (c) => `${c}🕊`),
  makeMapStyle("💒 Wedding Bells", "Love", (c) => `💒${c}`),
  makeMapStyle("👩‍❤️‍👨 Couple Bond", "Love", (c) => `${c}👩‍❤️‍👨`),
  makeMapStyle("🧸 Teddy Style", "Love", (c) => `🧸${c}`),
  makeMapStyle("🫀 Anatomical Heart", "Love", (c) => `${c}🫀`),
  makeMapStyle("🧁 Sweet Love", "Love", (c) => `🧁${c}`),
  makeMapStyle("🍫 Choco Love", "Love", (c) => `${c}🍫`),
  makeMapStyle("🍓 Strawberry Touch", "Love", (c) => `${c}🍓`),
  makeMapStyle("🍒 Cherry Kiss", "Love", (c) => `🍒${c}`),
  makeMapStyle("🍯 Honey Love", "Love", (c) => `${c}🍯`),
  makeMapStyle("💍 Proposal Style", "Love", (c) => `💍${c}`),
  makeMapStyle("🎉 Celebratory Love", "Love", (c) => `${c}🎉`),
  makeMapStyle("🌞 Warm Love", "Love", (c) => `🌞${c}`),
  makeMapStyle("🫧 Bubble Love", "Love", (c) => `${c}🫧`),
  makeMapStyle("🩵 Blue Heart Glow", "Love", (c) => `${c}🩵`),
  makeMapStyle("🧡 Orange Heart", "Love", (c) => `🧡${c}`),
  makeMapStyle("💚 Green Heart", "Love", (c) => `${c}💚`),
  makeMapStyle("💜 Purple Heart", "Love", (c) => `${c}💜`),
  makeMapStyle("🖤 Gothic Love", "Love", (c) => `🖤${c}`)
);

unicodeStyles.push(
   makeMapStyle("Shape Style 1", "Fancy", (name) => `(◍•ᴗ•◍) ミ ${name} 彡`, false),
  makeMapStyle("Shape Style 2", "Fancy", (name) => `෴✧෴ ${name} ෴✧෴`, false),
  makeMapStyle("Shape Style 3", "Fancy", (name) => `♥╣[-_-]╠♥ ${name} ♥╣[-_-]╠♥`, false),
  makeMapStyle("Shape Style 4", "Fancy", (name) => `ミミ◦❧◦°˚°◦.¸¸◦°´ ${name} ´°◦¸¸.◦°˚°◦彡彡`, false),
  makeMapStyle("Shape Style 5", "Fancy", (name) => `◦•●❤♡ ${name} ♡❤●•◦`, false),
  makeMapStyle("Shape Style 6", "Fancy", (name) => `╰☆╮ ${name} ╰☆╮`, false),
  makeMapStyle("Shape Style 7", "Fancy", (name) => `༺✿༻ ${name} ༺✿༻`, false),
  makeMapStyle("Shape Style 8", "Fancy", (name) => `✧･ﾟ: *✧･ﾟ:* ${name} *:･ﾟ✧*:･ﾟ✧`, false),
  makeMapStyle("Shape Style 9", "Fancy", (name) => `╔═══✪ ${name} ✪═══╗`, false),
  makeMapStyle("Shape Style 10", "Fancy", (name) => `▁ ▂ ▄ ▅ ▆ ▇ █ ${name} █ ▇ ▆ ▅ ▄ ▂ ▁`, false),
  makeMapStyle("Shape Style 11", "Fancy", (name) => `«•.•» ${name} «•.•»`, false),
  makeMapStyle("Shape Style 12", "Fancy", (name) => `✿✿✿ ${name} ✿✿✿`, false),
  makeMapStyle("Shape Style 13", "Fancy", (name) => `♡✧♡ ${name} ♡✧♡`, false),
  makeMapStyle("Shape Style 14", "Fancy", (name) => `༺♡༻ ${name} ༺♡༻`, false),
  makeMapStyle("Shape Style 15", "Fancy", (name) => `❖❖❖ ${name} ❖❖❖`, false),
  makeMapStyle("Shape Style 16", "Fancy", (name) => `╰༺★༻╯ ${name} ╰༺★༻╯`, false),
  makeMapStyle("Shape Style 17", "Fancy", (name) => `✧･ﾟ: *✧･ﾟ:* ${name} *:･ﾟ✧*:･ﾟ✧`, false),
  makeMapStyle("Shape Style 18", "Fancy", (name) => `╚═══★ ${name} ★═══╝`, false),
  makeMapStyle("Shape Style 19", "Fancy", (name) => `✦✦✦ ${name} ✦✦✦`, false),
  makeMapStyle("Shape Style 20", "Fancy", (name) => `•°•.°• ${name} •°•.°•`, false),
  makeMapStyle("Shape Style 21", "Fancy", (name) => `⊱⋛⋋ ${name} ⋌⋚⊰`, false),
  makeMapStyle("Shape Style 22", "Fancy", (name) => `◈◈◈ ${name} ◈◈◈`, false),
  makeMapStyle("Shape Style 23", "Fancy", (name) => `✧~✧ ${name} ✧~✧`, false),
  makeMapStyle("Shape Style 24", "Fancy", (name) => `༒༒༒ ${name} ༒༒༒`, false),
  makeMapStyle("Shape Style 25", "Fancy", (name) => `✦◈✦ ${name} ✦◈✦`, false),
  makeMapStyle("Shape Style 26", "Fancy", (name) => `➶➶➶ ${name} ➶➶➶`, false),
  makeMapStyle("Shape Style 27", "Fancy", (name) => `▁ ▂ ▃ ▄ ▅ ▆ ▇ ${name} ▇ ▆ ▅ ▄ ▃ ▂ ▁`, false),
  makeMapStyle("Shape Style 28", "Fancy", (name) => `◦•◦ ${name} ◦•◦`, false),
  makeMapStyle("Shape Style 29", "Fancy", (name) => `✺✺✺ ${name} ✺✺✺`, false),
  makeMapStyle("Shape Style 30", "Fancy", (name) => `༺✧༻ ${name} ༺✧༻`, false),
  makeMapStyle("Shape Style 31", "Fancy", (name) => `╭♡╮ ${name} ╭♡╮`, false),
  makeMapStyle("Shape Style 32", "Fancy", (name) => `♛♛♛ ${name} ♛♛♛`, false),
  makeMapStyle("Shape Style 33", "Fancy", (name) => `⸻⸻⸻ ${name} ⸻⸻⸻`, false),
  makeMapStyle("Shape Style 34", "Fancy", (name) => `✧✧✧ ${name} ✧✧✧`, false),
  makeMapStyle("Shape Style 35", "Fancy", (name) => `༺★༻ ${name} ༺★༻`, false),
  makeMapStyle("Shape Style 36", "Fancy", (name) => `❃❃❃ ${name} ❃❃❃`, false),
  makeMapStyle("Shape Style 37", "Fancy", (name) => `◉◉◉ ${name} ◉◉◉`, false),
  makeMapStyle("Shape Style 38", "Fancy", (name) => `✪✪✪ ${name} ✪✪✪`, false),
  makeMapStyle("Shape Style 39", "Fancy", (name) => `༒✦༒ ${name} ༒✦༒`, false),
  makeMapStyle("Shape Style 40", "Fancy", (name) => `♢♢♢ ${name} ♢♢♢`, false),
  makeMapStyle("Shape Style 41", "Fancy", (name) => `✿✿✿ ${name} ✿✿✿`, false),
  makeMapStyle("Shape Style 42", "Fancy", (name) => `❖❖❖ ${name} ❖❖❖`, false),
  makeMapStyle("Shape Style 43", "Fancy", (name) => `༺☯༻ ${name} ༺☯༻`, false),
  makeMapStyle("Shape Style 44", "Fancy", (name) => `✦✧✦ ${name} ✦✧✦`, false),
  makeMapStyle("Shape Style 45", "Fancy", (name) => `♛♔♛ ${name} ♛♔♛`, false),
  makeMapStyle("Shape Style 46", "Fancy", (name) => `✿❀✿ ${name} ✿❀✿`, false),
  makeMapStyle("Shape Style 47", "Fancy", (name) => `༺ღ༻ ${name} ༺ღ༻`, false),
  makeMapStyle("Shape Style 48", "Fancy", (name) => `✧ღ✧ ${name} ✧ღ✧`, false),
  makeMapStyle("Shape Style 49", "Fancy", (name) => `❃✿❃ ${name} ❃✿❃`, false),
  makeMapStyle("Shape Style 50", "Fancy", (name) => `♢✦♢ ${name} ♢✦♢`, false),
  makeMapStyle("Fancy Fullwidth", "Fancy", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? String.fromCharCode(c.charCodeAt(0) + 0xfee0)
      : c
  ),
  makeMapStyle("Bubble Letters 🅰️", "Fancy", (c) => {
    const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const upper = "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩";
    const lower = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
    const idx = base.indexOf(c);
    if (idx >= 0 && idx < 26) return upper[idx];
    if (idx >= 26) return lower[idx - 26];
    return c;
  }),
  makeMapStyle("Boxed Symbols ⓐ", "Fancy", (c) => {
    const base = "abcdefghijklmnopqrstuvwxyz";
    const idx = base.indexOf(c.toLowerCase());
    return idx >= 0 ? String.fromCharCode(0x24d0 + idx) : c;
  }),
  makeMapStyle("Double Struck", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d538 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d552 + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Small Caps", "Fancy", (c) => {
    const smallCapsMap = {
      a: "ᴀ",
      b: "ʙ",
      c: "ᴄ",
      d: "ᴅ",
      e: "ᴇ",
      f: "ғ",
      g: "ɢ",
      h: "ʜ",
      i: "ɪ",
      j: "ᴊ",
      k: "ᴋ",
      l: "ʟ",
      m: "ᴍ",
      n: "ɴ",
      o: "ᴏ",
      p: "ᴘ",
      q: "ǫ",
      r: "ʀ",
      s: "s",
      t: "ᴛ",
      u: "ᴜ",
      v: "ᴠ",
      w: "ᴡ",
      x: "x",
      y: "ʏ",
      z: "ᴢ",
    };
    return smallCapsMap[c.toLowerCase()] || c;
  }),
  makeMapStyle("Fancy Stars ✨", "Fancy", (c, i) =>
    i % 2 === 0 ? `✨${c}` : `${c}✨`
  ),
  makeMapStyle("Mirrored Text", "Fancy", (c) => {
    const mirrorMap = {
      a: "ɐ",
      b: "q",
      c: "ɔ",
      d: "p",
      e: "ǝ",
      f: "ɟ",
      g: "ƃ",
      h: "ɥ",
      i: "ᴉ",
      j: "ɾ",
      k: "ʞ",
      l: "ʃ",
      m: "ɯ",
      n: "u",
      o: "o",
      p: "d",
      q: "b",
      r: "ɹ",
      s: "s",
      t: "ʇ",
      u: "n",
      v: "ʌ",
      w: "ʍ",
      x: "x",
      y: "ʎ",
      z: "z",
    };
    return mirrorMap[c.toLowerCase()] || c;
  }),
  makeMapStyle("Underline Style", "Fancy", (c) => `${c}\u0332`),
  makeMapStyle("Overline Style", "Fancy", (c) => `${c}\u0305`),
  makeMapStyle("Wavy Style", "Fancy", (c, i) =>
    i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
  ),
  makeMapStyle("Curly Style", "Fancy", (c) => `${c}~`),
  makeMapStyle("Circle Dots", "Fancy", (c) => `◦${c}◦`),
  makeMapStyle("Diamond Trail 💎", "Fancy", (c, i) =>
    i % 2 ? `💎${c}` : `${c}💎`
  ),
  makeMapStyle("Magic Sparkles ✨", "Fancy", (c, i) => `✨${c}`),
  makeMapStyle("Reverse Case", "Fancy", (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  ),
  makeMapStyle("Vertical Bars |", "Fancy", (c) => `|${c}|`),
  makeMapStyle("Symbol Chain ⛓️", "Fancy", (c, i) =>
    i % 2 ? `⛓️${c}` : `${c}⛓️`
  ),
  makeMapStyle("Halo Glow 🌟", "Fancy", (c) => `🌟${c}🌟`),
  makeMapStyle("Rounded Box", "Fancy", (c) => `【${c}】`),
  makeMapStyle("Stylish Slashes", "Fancy", (c) => `/${c}/`),
  makeMapStyle("Emoji Sprinkle 🌀", "Fancy", (c, i) =>
    i % 2 === 0 ? `🌀${c}` : `${c}🌀`
  ),
  makeMapStyle("Fancy Swords ⚔️", "Fancy", (c, i) =>
    i % 2 === 0 ? `⚔️${c}` : `${c}⚔️`
  ),
  makeMapStyle("Royal Crown 👑", "Fancy", (c, i) =>
    i % 3 === 0 ? `👑${c}` : c
  ),
  makeMapStyle("Heart Chain ❤️", "Fancy", (c) => `❤️${c}`),
  makeMapStyle("Cloud Trail ☁️", "Fancy", (c, i) =>
    i % 2 ? `☁️${c}` : `${c}☁️`
  ),
  makeMapStyle("Snowflakes ❄️", "Fancy", (c) => `❄️${c}`),
  makeMapStyle("Magic Wand 🪄", "Fancy", (c, i) =>
    i % 2 ? `🪄${c}` : `${c}🪄`
  ),
  makeMapStyle("Lightning ⚡", "Fancy", (c) => `⚡${c}⚡`),
  makeMapStyle("Ghost 👻", "Fancy", (c, i) => (i % 3 === 0 ? `👻${c}` : c)),
  makeMapStyle("Fancy Clouds 🌬️", "Fancy", (c) => `🌬️${c}`),
  makeMapStyle("Zigzag 🔀", "Fancy", (c, i) => (i % 2 ? `🔀${c}` : `${c}🔀`)),
  makeMapStyle("Rainbow 🌈", "Fancy", (c, i) => (i % 2 ? `🌈${c}` : `${c}🌈`)),
  makeMapStyle("Fire 🔥", "Fancy", (c, i) => (i % 2 ? `🔥${c}` : `${c}🔥`)),
  makeMapStyle("Skull 💀", "Fancy", (c, i) => (i % 3 === 0 ? `💀${c}` : c)),
  makeMapStyle("Alien 👽", "Fancy", (c, i) => (i % 3 === 0 ? `👽${c}` : c)),
  makeMapStyle("Thunderstorm ⛈️", "Fancy", (c) => `⛈️${c}`),
  makeMapStyle("Peace 🕊️", "Fancy", (c) => `🕊️${c}`),
  makeMapStyle("Money Style 💰", "Fancy", (c) => `💰${c}`),
  makeMapStyle("Key 🔑", "Fancy", (c) => `🔑${c}`),
  makeMapStyle("Hourglass ⏳", "Fancy", (c) => `⏳${c}`),
  makeMapStyle("Yin Yang ☯️", "Fancy", (c, i) =>
    i % 2 === 0 ? `☯️${c}` : `${c}☯️`
  ),
  makeMapStyle("Music Notes 🎶", "Fancy", (c) => `🎶${c}`),
  makeMapStyle("Fireworks 🎆", "Fancy", (c, i) =>
    i % 2 ? `🎆${c}` : `${c}🎆`
  ),
  makeMapStyle("Roses 🌹", "Fancy", (c) => `🌹${c}`),
  makeMapStyle("Eyes 👀", "Fancy", (c, i) => (i % 2 ? `👀${c}` : `${c}👀`)),
  makeMapStyle("Balloon 🎈", "Fancy", (c) => `🎈${c}`),
  makeMapStyle("Cherry 🍒", "Fancy", (c) => `🍒${c}`),
  makeMapStyle("Dragon 🐉", "Fancy", (c) => `🐉${c}`),
  makeMapStyle("Ice Cream 🍦", "Fancy", (c) => `🍦${c}`),
  makeMapStyle("Fancy Fire Dragon 🔥🐉", "Fancy", (c, i) =>
    i % 2 ? `🔥${c}` : `${c}🐉`
  ),
  makeMapStyle("Bubble Letters", "Fancy", (c) => {
    const idx = base.indexOf(c);
    return idx >= 0
      ? String.fromCharCode(idx < 26 ? 0x24b6 + idx : 0x24d0 + (idx - 26))
      : c;
  }),
  makeMapStyle("Squared Letters", "Fancy", (c) => {
    const idx = base.indexOf(c);
    return idx < 26 ? String.fromCharCode(0x1f130 + idx) : c;
  }),
  makeMapStyle("Italic A–Z", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d434 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d44e + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Double-Struck", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d538 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d552 + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Fraktur", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d504 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d51e + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Monospace", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d670 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d68a + c.charCodeAt(0) - 97);
    if (c >= "0" && c <= "9")
      return String.fromCharCode(0x1d7f6 + c.charCodeAt(0) - 48);
    return c;
  }),
  makeMapStyle("Sans-serif", "Fancy", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d5a0 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d5ba + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Surrounded by ✨", "Fancy", (c) => `✨${c}✨`),
  makeMapStyle("Enclosed 💍", "Fancy", (c) => `💍${c}💍`),
  makeMapStyle("Dot‑above", "Fancy", (c) => c + "\u0307"),
  makeMapStyle("Dot‑below", "Fancy", (c) => c + "\u0323"),
  makeMapStyle("Fancy Boxed □", "Fancy", (c) => "□" + c + "□"),
  makeMapStyle("Star‑above", "Fancy", (c) => c + "\u2605"),
  makeMapStyle("Leading 🚀", "Fancy", (c) => `🚀${c}`),
  makeMapStyle("Add ✨End", "Fancy", (c) => c + "✨"),
  makeMapStyle("Arrow →", "Fancy", (c) => `${c}→`)
);

// 21–30: Fullwidth / Fancy
unicodeStyles.push(
  makeMapStyle("Fullwidth Style", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? String.fromCharCode(c.charCodeAt(0) + 0xfee0)
      : c
  ),
  makeMapStyle("Fullwidth Curly Brackets", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `❴${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}❵`
      : c
  ),
  makeMapStyle("Fullwidth Dots Around", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `•${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}•`
      : c
  ),
  makeMapStyle("Fullwidth Stars Around", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `★${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}☆`
      : c
  ),
  makeMapStyle("Fullwidth Parentheses", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `（${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}）`
      : c
  ),
  makeMapStyle("Fullwidth Quotation", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `“${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}”`
      : c
  ),
  makeMapStyle("Fullwidth Wave Dashes", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `〜${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}〜`
      : c
  ),
  makeMapStyle("Fullwidth Angle Brackets", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `《${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}》`
      : c
  ),
  makeMapStyle("Fullwidth Pipes", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `｜${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}｜`
      : c
  ),
  makeMapStyle("Fullwidth Hyphens", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `－${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}－`
      : c
  ),
  makeMapStyle("Fullwidth Middle Dots", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `・${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}・`
      : c
  ),
  makeMapStyle("Fullwidth Equal Signs", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `＝${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}＝`
      : c
  ),
  makeMapStyle("Fullwidth Hearts", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `❤️${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}❤️`
      : c
  ),
  makeMapStyle("Fullwidth Squares", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `▢${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}▢`
      : c
  ),
  makeMapStyle("Fullwidth Rounded Brackets", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `【${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}】`
      : c
  ),
  makeMapStyle("Fullwidth Thick Bars", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `█${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}█`
      : c
  ),
  makeMapStyle("Fullwidth Bubbles", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `◉${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}◉`
      : c
  ),
  makeMapStyle("Fullwidth Circles", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `◯${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}◯`
      : c
  ),
  makeMapStyle("Fullwidth Sparkles", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `✨${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}✨`
      : c
  ),
  makeMapStyle("Fullwidth Lightning", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `⚡${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}⚡`
      : c
  ),
  makeMapStyle("Fullwidth Tildes", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `~${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}~`
      : c
  ),
  makeMapStyle("Fullwidth Flares", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `✴️${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}✴️`
      : c
  ),
  makeMapStyle("Fullwidth Triangles", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `▲${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}▼`
      : c
  ),
  makeMapStyle("Fullwidth Bars", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `║${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}║`
      : c
  ),
  makeMapStyle("Fullwidth Zigzag", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `/\\${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}\\/`
      : c
  ),
  makeMapStyle("Fullwidth Vertical Lines", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `┃${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}┃`
      : c
  ),
  makeMapStyle("Fullwidth Fangs", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `༼${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}༽`
      : c
  ),
  makeMapStyle("Fullwidth Music Notes", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `🎵${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}🎶`
      : c
  ),
  makeMapStyle("Fullwidth Dot Frames", "Fullwidth", (c) =>
    c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126
      ? `｡${String.fromCharCode(c.charCodeAt(0) + 0xfee0)}｡`
      : c
  )
);

unicodeStyles.push(
  makeMapStyle("Emoji Fire 🔥", "Emojis", (c, i) =>
    i % 2 ? `${c}🔥` : `🔥${c}`
  ),
  makeMapStyle("Emoji Stars", "Emojis", (c) => `🌟${c}🌟`),
  makeMapStyle(
    "Emoji Mix 🎉",
    "Emojis",
    (c, i) => `${c}${["🎉", "🎈", "🎊"][i % 3]}`
  ),
  makeMapStyle("Emoji Eyes 👀", "Emojis", (c) => `👀${c}👀`),
  makeMapStyle("Emoji Halo 😇", "Emojis", (c) => `😇${c}😇`),
  makeMapStyle("Emoji Music 🎵", "Emojis", (c, i) => `${c}🎵`),
  makeMapStyle("Emoji Cool 😎", "Emojis", (c) => `😎${c}`),
  makeMapStyle("Emoji Cry 😢", "Emojis", (c) => `${c}😢`),
  makeMapStyle("Emoji Heart Eyes 😍", "Emojis", (c) => `😍${c}😍`),
  makeMapStyle("Emoji Firework 🎆", "Emojis", (c) => `${c}🎆`),
  makeMapStyle("Emoji Party 🎉🎉", "Emojis", (c) => `🎉${c}🎉`),
  makeMapStyle("Emoji Balloon 🎈", "Emojis", (c) => `🎈${c}`),
  makeMapStyle("Emoji Kiss 😘", "Emojis", (c) => `😘${c}`),
  makeMapStyle("Emoji Thinking 🤔", "Emojis", (c) => `${c}🤔`),
  makeMapStyle("Emoji Angry 😡", "Emojis", (c) => `😡${c}`),
  makeMapStyle("Emoji Sun ☀️", "Emojis", (c) => `${c}☀️`),
  makeMapStyle("Emoji Rainbow 🌈", "Emojis", (c) => `${c}🌈`),
  makeMapStyle("Emoji Crown 👑", "Emojis", (c) => `👑${c}`),
  makeMapStyle("Emoji Sparkle ✨", "Emojis", (c) => `${c}✨`),
  makeMapStyle("Emoji Star Trail 🌠", "Emojis", (c) => `🌠${c}🌠`),
  makeMapStyle("Emoji Alien 👽", "Emojis", (c) => `👽${c}`),
  makeMapStyle("Emoji Poop 💩", "Emojis", (c) => `${c}💩`),
  makeMapStyle("Emoji Clock ⏰", "Emojis", (c) => `${c}⏰`),
  makeMapStyle("Emoji Bell 🔔", "Emojis", (c) => `${c}🔔`),
  makeMapStyle("Emoji Bomb 💣", "Emojis", (c) => `💣${c}`),
  makeMapStyle("Emoji Ghost 👻", "Emojis", (c) => `${c}👻`),
  makeMapStyle("Emoji Robot 🤖", "Emojis", (c) => `${c}🤖`),
  makeMapStyle("Emoji Light 💡", "Emojis", (c) => `${c}💡`),
  makeMapStyle("Emoji Thumbs 👍", "Emojis", (c) => `👍${c}`),
  makeMapStyle("Emoji Hundred 💯", "Emojis", (c) => `${c}💯`),
  makeMapStyle("Emoji Flower 💐", "Emojis", (c) => `💐${c}`),
  makeMapStyle("Emoji Honey 🍯", "Emojis", (c) => `🍯${c}`),
  makeMapStyle(
    "Emoji Sparkle Mix",
    "Emojis",
    (c, i) => `${["✨", "💫", "🌟"][i % 3]}${c}`
  ),
  makeMapStyle("Emoji Sleep 😴", "Emojis", (c) => `${c}😴`),
  makeMapStyle("Emoji Wave 🌊", "Emojis", (c) => `${c}🌊`),
  makeMapStyle("Emoji Rocket 🚀", "Emojis", (c) => `${c}🚀`),
  makeMapStyle("Emoji Pizza 🍕", "Emojis", (c) => `${c}🍕`),
  makeMapStyle("Emoji Burger 🍔", "Emojis", (c) => `🍔${c}`),
  makeMapStyle("Emoji Icecream 🍦", "Emojis", (c) => `${c}🍦`),
  makeMapStyle("Emoji Unicorn 🦄", "Emojis", (c) => `${c}🦄`),
  makeMapStyle("Emoji Lightning ⚡", "Emojis", (c) => `${c}⚡`),
  makeMapStyle("Emoji Candy 🍬", "Emojis", (c) => `${c}🍬`),
  makeMapStyle("Emoji Ribbon 🎀", "Emojis", (c) => `${c}🎀`),
  makeMapStyle("Emoji Hammer 🔨", "Emojis", (c) => `🔨${c}`),
  makeMapStyle("Emoji Present 🎁", "Emojis", (c) => `🎁${c}`),
  makeMapStyle("Emoji Teddy 🧸", "Emojis", (c) => `🧸${c}`),
  makeMapStyle("Emoji Angel 👼", "Emojis", (c) => `${c}👼`),
  makeMapStyle("Emoji Paw 🐾", "Emojis", (c) => `${c}🐾`),
  makeMapStyle("Emoji Leaf 🍃", "Emojis", (c) => `${c}🍃`),
  makeMapStyle("Emoji Moon 🌙", "Emojis", (c) => `${c}🌙`)
);

unicodeStyles.push(
  makeMapStyle("Repeat Twice", "Stylish", (c) => c + c),
  makeMapStyle("Repeat Thrice", "Stylish", (c) => c + c + c),
  makeMapStyle("Shadow ✳️", "Stylish", (c) => c + "✳️"),
  makeMapStyle("Slash /", "Crazy", (c) => `/` + c),
  makeMapStyle("Underline _", "Stylish", (c) => `${c}_`),
  makeMapStyle("Wave ~", "Stylish", (c) => `~${c}~`),
  makeMapStyle("Tilde Surround", "Stylish", (c) => `~${c}`),
  makeMapStyle("Zigzag ▲▼", "Stylish", (c, i) => (i % 2 ? `▲${c}` : `${c}▼`)),
  makeMapStyle("Up Arrows ↑", "Stylish", (c) => `↑${c}↑`),
  makeMapStyle("Down Arrows ↓", "Stylish", (c) => `↓${c}↓`),
  makeMapStyle("Dot Above ⬤", "Stylish", (c) => `⬤${c}`),
  makeMapStyle("Diamond ♦️", "Stylish", (c) => `♦️${c}♦️`),
  makeMapStyle("Crown 👑", "Stylish", (c) => `👑${c}👑`),
  makeMapStyle("Sparkle ✨", "Stylish", (c) => `✨${c}✨`),
  makeMapStyle("Music Note 🎵", "Stylish", (c) => `🎵${c}🎵`),
  makeMapStyle("Starburst 🌟", "Stylish", (c) => `🌟${c}`),
  makeMapStyle("Dot Trail •", "Stylish", (c) => `•${c}•`),
  makeMapStyle("Infinity ∞", "Stylish", (c) => `∞${c}∞`),
  makeMapStyle("Curly Braces {}", "Stylish", (c) => `{${c}}`),
  makeMapStyle("Boxed []", "Stylish", (c) => `[${c}]`),
  makeMapStyle("Angle Brackets <>", "Stylish", (c) => `<${c}>`),
  makeMapStyle("Parentheses ()", "Stylish", (c) => `(${c})`),
  makeMapStyle("Slashes /\\", "Stylish", (c) => `/${c}\\`),
  makeMapStyle("Double Bars ||", "Stylish", (c) => `|${c}|`),
  makeMapStyle("Upside Down", "Stylish", (c) => {
    const map = {
      a: "ɐ",
      b: "q",
      c: "ɔ",
      d: "p",
      e: "ǝ",
      f: "ɟ",
      g: "ƃ",
      h: "ɥ",
      i: "ᴉ",
      j: "ɾ",
      k: "ʞ",
      l: "l",
      m: "ɯ",
      n: "u",
      o: "o",
      p: "d",
      q: "b",
      r: "ɹ",
      s: "s",
      t: "ʇ",
      u: "n",
      v: "ʌ",
      w: "ʍ",
      x: "x",
      y: "ʎ",
      z: "z",
    };
    return map[c.toLowerCase()] || c;
  }),
  makeMapStyle("Mirrored", "Stylish", (c) => {
    const map = {
      a: "ɒ",
      b: "ᙠ",
      c: "ↄ",
      d: "ᗡ",
      e: "Ǝ",
      f: "Ⅎ",
      g: "⅁",
      h: "H",
      i: "I",
      j: "ſ",
      k: "ʞ",
      l: "⅃",
      m: "W",
      n: "И",
      o: "O",
      p: "Ԁ",
      q: "Ό",
      r: "Я",
      s: "S",
      t: "T",
      u: "∩",
      v: "Λ",
      w: "M",
      x: "X",
      y: "⅄",
      z: "Z",
    };
    return map[c.toLowerCase()] || c;
  }),
  makeMapStyle("Wave Brackets 〰️", "Stylish", (c) => `〰️${c}〰️`),
  makeMapStyle("Cross ✖️", "Stylish", (c) => `✖️${c}✖️`),
  makeMapStyle("Hash #", "Stylish", (c) => `#${c}#`),
  makeMapStyle("Swirl 🌀", "Stylish", (c) => `🌀${c}`),
  makeMapStyle("Double Underline", "Stylish", (c) => `${c}̲̲`),
  makeMapStyle("Bold Surround", "Stylish", (c) => `**${c}**`),
  makeMapStyle("Slashed Ø", "Stylish", (c) => `Ø${c}Ø`),
  makeMapStyle("Squared []²", "Stylish", (c) => `[${c}]²`),
  makeMapStyle("Broken 💔", "Stylish", (c) => `💔${c}`),
  makeMapStyle("Love Eyes 😍", "Stylish", (c) => `😍${c}`),
  makeMapStyle("Gradient ⬛⬜", "Stylish", (c, i) =>
    i % 2 === 0 ? `⬛${c}` : `⬜${c}`
  ),
  makeMapStyle("Circles 🔵", "Stylish", (c) => `🔵${c}🔵`),
  makeMapStyle("Triangle ▲", "Stylish", (c) => `▲${c}▲`),
  makeMapStyle("Clock ⏰", "Stylish", (c) => `⏰${c}`),
  makeMapStyle("Hearts ♥️", "Stylish", (c) => `♥️${c}♥️`),
  makeMapStyle("Currency 💲", "Stylish", (c) => `💲${c}`),
  makeMapStyle("Lightning ⚡", "Stylish", (c) => `⚡${c}`),
  makeMapStyle("Stars ⭐", "Stylish", (c) => `⭐${c}`),
  makeMapStyle("Ghost 👻", "Stylish", (c) => `👻${c}`),
  makeMapStyle("Robot 🤖", "Stylish", (c) => `🤖${c}`),
  makeMapStyle("Alien 👽", "Stylish", (c) => `👽${c}`),
  makeMapStyle("Glitch ║█║▌║", "Stylish", (c, i) =>
    i % 2 ? `║${c}` : `▌${c}`
  ),
  makeMapStyle("Mixed Symbols §", "Stylish", (c, i) => `${c}§`),
  makeMapStyle("Decorative Lines ─", "Stylish", (c) => `─${c}─`),
  makeMapStyle("Thorns 🪻", "Stylish", (c) => `🪻${c}`),
  makeMapStyle("Boom 💥", "Stylish", (c) => `💥${c}`),
  makeMapStyle("Dice 🎲", "Stylish", (c) => `🎲${c}`),
  makeMapStyle("Alien Surround 👽", "Stylish", (c) => `👽${c}👽`),
  makeMapStyle("Robot Guard 🤖", "Stylish", (c) => `🤖${c}🤖`),
  makeMapStyle("Wizard 🧙", "Stylish", (c) => `🧙${c}`),
  makeMapStyle("Crystal 💎", "Stylish", (c) => `💎${c}`),
  makeMapStyle("Firework 🎆", "Stylish", (c) => `🎆${c}`),
  makeMapStyle("Smiling ☺️", "Stylish", (c) => `☺️${c}`),
  makeMapStyle("King 👑", "Stylish", (c) => `👑${c}`),
  makeMapStyle("Repeat Twice", "Stylish", (c) => c + c),
  makeMapStyle("Repeat Thrice", "Stylish", (c) => c + c + c),

  makeMapStyle("Shadow ✳️", "Stylish", (c) => c + "✳️"),
  makeMapStyle("Slash /", "Crazy", (c) => `/` + c),
  makeMapStyle("Backslash \\", "Stylish", (c) => `\\${c}`),

  makeMapStyle("Arrow ←", "Nice", (c) => `←${c}`),
  makeMapStyle("Bracketed [ ]", "Stylish", (c) => `[${c}]`),
  makeMapStyle("Parenthesis ( )", "Stylish", (c) => `(${c})`),
  makeMapStyle("Reverse Case", "Stylish", (c) =>
    c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
  ),
  makeMapStyle("Add ™️", "Stylish", (c) => c + "™️"),
  makeMapStyle("Add ©️", "Stylish", (c) => c + "©️"),
  makeMapStyle("Add ®️", "Stylish", (c) => c + "®️"),
  makeMapStyle("Symbol Slash", "Stylish", (c) => c + "/"),
  makeMapStyle("Symbol Backslash", "Stylish", (c) => "\\" + c),
  makeMapStyle("Slash-Star", "Stylish", (c) => `${c}*/`),
  makeMapStyle("Star-Slash", "Stylish", (c) => `/*${c}`),
  makeMapStyle("Overline", "Stylish", (c) => "\u0305" + c),
  makeMapStyle("Strike‑through", "Stylish", (c) => c + "\u0336")
);

unicodeStyles.push(
  makeMapStyle("Underline", "Bold", (c) => c + "\u0332"),
  makeMapStyle("Double Underline", "Bold", (c) => c + "\u0332\u0332"),
  makeMapStyle("Bold Fraktur", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d56c + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d586 + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Small Caps", "Bold", (c) => {
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d00 + c.charCodeAt(0) - 97);
    return c.toUpperCase();
  }),
  makeMapStyle("Sans Serif Bold", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d5d4 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d5ee + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Monospace Bold", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d670 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d68a + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Math Bold Italic", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d468 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d482 + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Bold Gothic", "Bold", (c) => {
    const gothicBoldMap = {
      A: "𝕬",
      B: "𝕭",
      C: "𝕮",
      D: "𝕯",
      E: "𝕰",
      F: "𝕱",
      G: "𝕲",
      H: "𝕳",
      I: "𝕴",
      J: "𝕵",
      K: "𝕶",
      L: "𝕷",
      M: "𝕸",
      N: "𝕹",
      O: "𝕺",
      P: "𝕻",
      Q: "𝕼",
      R: "𝕽",
      S: "𝕾",
      T: "𝕿",
      U: "𝖀",
      V: "𝖁",
      W: "𝖂",
      X: "𝖃",
      Y: "𝖄",
      Z: "𝖅",
      a: "𝖆",
      b: "𝖇",
      c: "𝖈",
      d: "𝖉",
      e: "𝖊",
      f: "𝖋",
      g: "𝖌",
      h: "𝖍",
      i: "𝖎",
      j: "𝖏",
      k: "𝖐",
      l: "𝖑",
      m: "𝖒",
      n: "𝖓",
      o: "𝖔",
      p: "𝖕",
      q: "𝖖",
      r: "𝖗",
      s: "𝖘",
      t: "𝖙",
      u: "𝖚",
      v: "𝖛",
      w: "𝖜",
      x: "𝖝",
      y: "𝖞",
      z: "𝖟",
    };
    return gothicBoldMap[c] || c;
  }),
  makeMapStyle("Bold Block Outline", "Bold", (c) => `🅱️${c.toUpperCase()}`),
  makeMapStyle("Thick Outline", "Bold", (c) => `🔲${c}🔲`),
  makeMapStyle("Bold Starred", "Bold", (c) => `★${c}★`),
  makeMapStyle("Bold Dots", "Bold", (c) => `•${c}•`),
  makeMapStyle("Bold Square", "Bold", (c) => `🟦${c}🟦`),
  makeMapStyle("Bold Angles", "Bold", (c) => `⟪${c}⟫`),
  makeMapStyle("Bold Flames", "Bold", (c) => `🔥${c}🔥`),
  makeMapStyle("Bold Music", "Bold", (c) => `🎵${c}🎵`),
  makeMapStyle("Bold Arrow", "Bold", (c) => `➡️${c}⬅️`),
  makeMapStyle("Bold Emoji Sparkle ✨", "Bold", (c) => `✨${c}✨`),
  makeMapStyle("Bold Claps 👏", "Bold", (c) => `👏${c}👏`),
  makeMapStyle("Bold Stars 🌟", "Bold", (c) => `🌟${c}🌟`),
  makeMapStyle("Bold Parenthesis", "Bold", (c) => `【${c}】`),
  makeMapStyle("Bold Fancy Dots", "Bold", (c) => `▪️${c}▪️`),
  makeMapStyle("Bold Flare 💥", "Bold", (c) => `💥${c}💥`),
  makeMapStyle("Bold Checks ✅", "Bold", (c) => `✅${c}✅`),
  makeMapStyle("Bold Fireworks 🎆", "Bold", (c) => `🎆${c}🎆`),
  makeMapStyle("Bold X Cross", "Bold", (c) => `✖️${c}✖️`),
  makeMapStyle("Bold Question", "Bold", (c) => `❓${c}❓`),
  makeMapStyle("Bold Diamond", "Bold", (c) => `🔷${c}🔷`),
  makeMapStyle("Bold Lightning", "Bold", (c) => `⚡${c}⚡`),
  makeMapStyle("Bold Hearts", "Bold", (c) => `💖${c}💖`),
  makeMapStyle("Bold Circles", "Bold", (c) => `🔵${c}🔵`),
  makeMapStyle("Bold Party 🎉", "Bold", (c) => `🎉${c}🎉`),
  makeMapStyle("Bold Bell 🔔", "Bold", (c) => `🔔${c}🔔`),
  makeMapStyle("Bold Money 💰", "Bold", (c) => `💰${c}💰`),
  makeMapStyle("Bold Plus ➕", "Bold", (c) => `➕${c}➕`),
  makeMapStyle("Bold Key 🔑", "Bold", (c) => `🔑${c}🔑`),
  makeMapStyle("Bold Leaf 🍃", "Bold", (c) => `🍃${c}🍃`),
  makeMapStyle("Bold Moon 🌙", "Bold", (c) => `🌙${c}🌙`),
  makeMapStyle("Bold Rose 🌹", "Bold", (c) => `🌹${c}🌹`),
  makeMapStyle("Bold Thunder", "Bold", (c) => `🌩️${c}🌩️`),
  makeMapStyle("Bold Ice ❄️", "Bold", (c) => `❄️${c}❄️`),
  makeMapStyle("Bold Lock 🔒", "Bold", (c) => `🔒${c}🔒`),
  makeMapStyle("Bold Skull ☠️", "Bold", (c) => `☠️${c}☠️`),
  makeMapStyle("Bold Rainbow 🌈", "Bold", (c) => `🌈${c}🌈`),
  makeMapStyle("Bold Hands ✋", "Bold", (c) => `✋${c}✋`),
  makeMapStyle("Bold Arrow Combo ↔️", "Bold", (c) => `↔️${c}↔️`),
  makeMapStyle("Bold Ocean 🌊", "Bold", (c) => `🌊${c}🌊`),
  makeMapStyle("Bold Volcano 🌋", "Bold", (c) => `🌋${c}🌋`),
  makeMapStyle("Bold Alert ⚠️", "Bold", (c) => `⚠️${c}⚠️`),
  makeMapStyle("Bold Warning 🚨", "Bold", (c) => `🚨${c}🚨`),
  makeMapStyle("Bold Box 📦", "Bold", (c) => `📦${c}📦`),
  makeMapStyle("Bold Alarm ⏰", "Bold", (c) => `⏰${c}⏰`),
  makeMapStyle("Bold Sword ⚔️", "Bold", (c) => `⚔️${c}⚔️`),
  makeMapStyle("Bold Alien 👽", "Bold", (c) => `👽${c}👽`),
  makeMapStyle("Bold Eye 👁️", "Bold", (c) => `👁️${c}👁️`),
  makeMapStyle("Bold Crown 👑", "Bold", (c) => `👑${c}👑`),
  makeMapStyle("Bold Devil 😈", "Bold", (c) => `😈${c}😈`),
  makeMapStyle("Small Caps", "Bold", (c) => {
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d00 + c.charCodeAt(0) - 97);
    return c.toUpperCase();
  }),
  makeMapStyle("Sans Serif Bold", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d5d4 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d5ee + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Bold Fraktur", "Bold", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d56c + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d586 + c.charCodeAt(0) - 97);
    return c;
  })
);

unicodeStyles.push(
  makeMapStyle("Script", "Cursive", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d49c + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d4b6 + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Bold Script", "Cursive", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d4d0 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d4ea + c.charCodeAt(0) - 97);
    return c;
  }),
  makeMapStyle("Fancy Curl ✨", "Cursive", (c, i) =>
    i % 2 ? `✨${c}` : `${c}✨`
  ),
  makeMapStyle("Swirl Style 🌪️", "Cursive", (c) => `🌪️${c}🌪️`),
  makeMapStyle("Ribbon 🎀", "Cursive", (c) => `🎀${c}`),
  makeMapStyle("Soft Loop 💫", "Cursive", (c, i) =>
    i % 2 ? `💫${c}` : `${c}💫`
  ),
  makeMapStyle(
    "Elegant Curve",
    "Cursive",
    (c) =>
      ({
        A: "𝒜",
        B: "ℬ",
        C: "𝒞",
        D: "𝒟",
        E: "ℰ",
        F: "ℱ",
        G: "𝒢",
        H: "ℋ",
        I: "ℐ",
        J: "𝒥",
        K: "𝒦",
        L: "ℒ",
        M: "ℳ",
        N: "𝒩",
        O: "𝒪",
        P: "𝒫",
        Q: "𝒬",
        R: "ℛ",
        S: "𝒮",
        T: "𝒯",
        U: "𝒰",
        V: "𝒱",
        W: "𝒲",
        X: "𝒳",
        Y: "𝒴",
        Z: "𝒵",
      }[c] || c)
  ),
  makeMapStyle("Loop Hearts 🧷", "Cursive", (c, i) =>
    i % 2 ? `❤️${c}` : `${c}❤️`
  ),
  makeMapStyle(
    "Sparkle Script ✨",
    "Cursive",
    (c, i) => `${c}${"✨🌟💫"[i % 3]}`
  ),
  makeMapStyle("Cursive Arrows ➶", "Cursive", (c) => `➶${c}➷`),
  makeMapStyle("Feathered ✒️", "Cursive", (c) => `✒️${c}`),
  makeMapStyle("Fairy Dust 🧚", "Cursive", (c, i) =>
    i % 2 ? `🧚${c}` : `${c}🧚`
  ),
  makeMapStyle("Ribboned 🎗️", "Cursive", (c) => `🎗️${c}🎗️`),
  makeMapStyle("Cloudy ☁️", "Cursive", (c) => `☁️${c}☁️`),
  makeMapStyle("Floral Twist 🌼", "Cursive", (c) => `🌼${c}`),
  makeMapStyle(
    "Magical Swirl 🌀",
    "Cursive",
    (c, i) => `${c}${i % 3 ? "🌀" : ""}`
  ),
  makeMapStyle("Scroll 📝", "Cursive", (c) => `📝${c}`),
  makeMapStyle("Diamond Loop 💎", "Cursive", (c) => `💎${c}`),
  makeMapStyle("Soft Lace 🌸", "Cursive", (c) => `🌸${c}🌸`),
  makeMapStyle(
    "Curvy Moon 🌙",
    "Cursive",
    (c, i) => `${c}${i % 2 ? "🌙" : ""}`
  ),
  makeMapStyle("Spiral Cursive 🌀", "Cursive", (c) => `🌀${c}🌀`),
  makeMapStyle("Star Ribbon 🌠", "Cursive", (c) => `🌠${c}🌠`),
  makeMapStyle(
    "Cursive Fire 💥",
    "Cursive",
    (c, i) => `${c}${i % 2 ? "🔥" : ""}`
  ),
  makeMapStyle("Wavy ✨", "Cursive", (c) => `~${c}~`),
  makeMapStyle(
    "Leaf Cursive 🍃",
    "Cursive",
    (c, i) => `${i % 2 ? "🍃" + c : c + "🍃"}`
  ),
  makeMapStyle("Petal Style 🌺", "Cursive", (c) => `🌺${c}`),
  makeMapStyle("Elegant Drops 💧", "Cursive", (c) => `💧${c}💧`),
  makeMapStyle(
    "Twinkling 🌟",
    "Cursive",
    (c, i) => `${c}${i % 2 ? "✨" : "🌟"}`
  ),
  makeMapStyle("Fantasy 🌈", "Cursive", (c) => `🌈${c}🌈`),
  makeMapStyle("Soft Cursive 💕", "Cursive", (c) => `💕${c}`),
  makeMapStyle("Swishy 🪄", "Cursive", (c) => `🪄${c}🪄`),
  makeMapStyle("Cute Loops 🍥", "Cursive", (c) => `🍥${c}`),
  makeMapStyle("Gleam ✨", "Cursive", (c) => `✨${c}`),
  makeMapStyle("Pastel Pop 🌸", "Cursive", (c) => `🌸${c}🌸`),
  makeMapStyle("Magic Dust 🧞", "Cursive", (c) => `🧞${c}🧞`),
  makeMapStyle("Sans serif italic", "Cursive", (c) => {
    if (c >= "A" && c <= "Z")
      return String.fromCharCode(0x1d608 + c.charCodeAt(0) - 65);
    if (c >= "a" && c <= "z")
      return String.fromCharCode(0x1d622 + c.charCodeAt(0) - 97);
    return c;
  })
);

unicodeStyles.push(
  makeMapStyle("🩷Pink Hearts Trail", "Cute", (c, i) =>
    i % 2 ? `🩷${c}` : c + "🩷"
  ),
  makeMapStyle("Flower 🌸", "Cute", (c) => `🌸${c}🌸`),
  makeMapStyle("Starry 🌟", "Cute", (c, i) => (i % 2 ? `${c}🌟` : `🌟${c}`)),
  makeMapStyle("Trail 🚀", "Cute", (c) => `${c}🚀`),
  makeMapStyle("Rainbow Trail 🌈", "Cute", (c) => `${c}🌈`),
  makeMapStyle("Circle‑above", "Cute", (c) => c + "\u20DD"),
  makeMapStyle("Square‑above", "Cute", (c) => c + "\u20DE"),
  makeMapStyle("Cute Emo Mix 🥰", "Cute", (c) => c + "🥰"),
  makeMapStyle("Surrounded by 🌟", "Cute", (c) => `🌟${c}🌟`),
  makeMapStyle("Trail of 🌸", "Cute", (c, i) => (i ? `${c}🌸` : `🌸${c}`))
);

unicodeStyles.push(
  makeMapStyle("Alternating Caps", "Crazy", (c, i) =>
    i % 2 ? c.toLowerCase() : c.toUpperCase()
  ),
  makeMapStyle("Random Case", "Crazy", (c) =>
    Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()
  ),
  makeMapStyle("End 🔥", "Crazy", (c) => c + "🔥"),
  makeMapStyle(
    "Mixed Emo Random",
    "Crazy",
    (c) => c + ["🔥", "✨", "😍", "😎"][Math.floor(Math.random() * 4)]
  ),
  makeMapStyle("Crazy Emo Mix 🤪", "Crazy", (c) => c + "🤪")
);

unicodeStyles.push(
  makeMapStyle(
    "Gun Style 💥",
    "Instagram Stylish Boy",
    (c) => `▄︻テ${c}ﾌ══━一💥`,
    false
  ),
  makeMapStyle(
    "Power Punch 👊",
    "Instagram Stylish Boy",
    (c) => `👊 ${c} No Fear 👊`,
    false
  ),
  makeMapStyle(
    "Muscle Power 💪",
    "Instagram Stylish Boy",
    (c) => `💪 ${c} Strong Boy 💪`,
    false
  ),
  makeMapStyle(
    "Savage Middle Finger 🖕",
    "Instagram Stylish Boy",
    (c) => `🖕 ${c} Hate Rules 🖕`,
    false
  ),
  makeMapStyle(
    "No Mercy 🔪",
    "Instagram Stylish Boy",
    (c) => `🔪 ${c} No Mercy 🔪`,
    false
  ),
  makeMapStyle(
    "Mahakal Style 1",
    "Instagram Stylish Boy",
    (c) => `🕉️⚡🗡️ ${c} ⚡🔥🕉️`,
    false
  ),
  makeMapStyle(
  "Mahadev Attitude 🕉️",
  "Instagram Stylish Boy",
  (c) => `🕉️ ${c} 🔱🔥`,
  false
  ),
  makeMapStyle(
    "Power King 🔱",
    "Instagram Stylish Boy",
    (c) => `🔱 ${c} King of Kings 🔱`,
    false
  ),
  makeMapStyle(
    "Crown King 👑",
    "Instagram Stylish Boy",
    (c) => `👑 ${c} Born King 👑`,
    false
  ),
  makeMapStyle(
    "Wolf Howl 🐺",
    "Instagram Stylish Boy",
    (c) => `🐺 ${c} Lone Wolf 🐺`,
    false
  ),
  makeMapStyle(
    "Bullet Proof 💣",
    "Instagram Stylish Boy",
    (c) => `💣 ${c} Bullet Proof 💣`,
    false
  ),
  makeMapStyle(
    "Arrow Shooter ➤",
    "Instagram Stylish Boy",
    (c) => `➤ ${c} Sharp Aim ➤`,
    false
  ),
  makeMapStyle(
    "Sharp Blade ⚔️",
    "Instagram Stylish Boy",
    (c) => `⚔️ ${c} Blade Master ⚔️`,
    false
  ),
  makeMapStyle(
    "VIP Tag ✦",
    "Instagram Stylish Boy",
    (c) => `✦ ${c} VIP Life ✦`,
    false
  ),
  makeMapStyle(
    "Tiger Roar 🐯",
    "Instagram Stylish Boy",
    (c) => `🐯 ${c} Wild Power 🐯`,
    false
  ),
  makeMapStyle(
    "Money Maker 💸",
    "Instagram Stylish Boy",
    (c) => `💸 ${c} Hustler Life 💸`,
    false
  ),
  makeMapStyle(
    "Skull Rider ☠️",
    "Instagram Stylish Boy",
    (c) => `☠️ ${c} Skull Rider ☠️`,
    false
  ),
  makeMapStyle(
    "Royal Star ✪",
    "Instagram Stylish Boy",
    (c) => `✪ ${c} Royal Boy ✪`,
    false
  ),
  makeMapStyle(
    "Dragon Fire 🐉",
    "Instagram Stylish Boy",
    (c) => `🐉 ${c} Fire Born 🐉`,
    false
  ),
  makeMapStyle(
    "Sniper Aim 🎯",
    "Instagram Stylish Boy",
    (c) => `🎯 ${c} One Shot 🎯`,
    false
  ),
  makeMapStyle(
    "Shield Hero 🛡️",
    "Instagram Stylish Boy",
    (c) => `🛡️ ${c} Protector 🛡️`,
    false
  ),
  makeMapStyle(
    "Crown Boss ♛",
    "Instagram Stylish Boy",
    (c) => `♛ ${c} Real Boss ♛`,
    false
  ),
  makeMapStyle(
    "Power King 🔱",
    "Instagram Stylish Boy",
    (c) => `🔱 ${c} King of Kings 🔱`,
    false
  ),
  makeMapStyle(
    "Infinity ∞",
    "Instagram Stylish Boy",
    (c) => `∞ ${c} No Limits ∞`,
    false
  ),
  makeMapStyle(
    "Gangster 🔥😎",
    "Instagram Stylish Boy",
    (c) => `${c} Gangster Life 🔥😎`,
    false
  ),
  makeMapStyle(
    "Black Space ⬛",
    "Instagram Stylish Boy",
    (c) => `⬛ ${c} Dark Side ⬛`,
    false
  ),
  makeMapStyle(
    "Hate Girl ❌👧",
    "Instagram Stylish Boy",
    (c) => `${c} No Girls ❌👧`,
    false
  ),
  makeMapStyle(
    "Bad Boy 🔥",
    "Instagram Stylish Boy",
    (c) => `🔥 ${c} Bad Boy 🔥`,
    false
  ),
  makeMapStyle(
    "Royal Power 👑⚡",
    "Instagram Stylish Boy",
    (c) => `👑 ${c} Royal Power ⚡`,
    false
  ),
  makeMapStyle(
    "Silent Killer 😈",
    "Instagram Stylish Boy",
    (c) => `😈 ${c} Silent Killer 😈`,
    false
  ),
  makeMapStyle(
    "No Love 💔",
    "Instagram Stylish Boy",
    (c) => `${c} Broken Heart 💔`,
    false
  ),
  makeMapStyle(
    "Heartless ❌❤️",
    "Instagram Stylish Boy",
    (c) => `${c} Heartless ❌❤️`,
    false
  ),
  makeMapStyle(
    "Broken Smile 🙂💢",
    "Instagram Stylish Boy",
    (c) => `${c} Broken Smile 🙂💢`,
    false
  ),
  makeMapStyle(
    "Savage Boy ☠️",
    "Instagram Stylish Boy",
    (c) => `☠️ ${c} Savage Boy ☠️`,
    false
  ),
  makeMapStyle(
    "Cold Blood ❄️",
    "Instagram Stylish Boy",
    (c) => `❄️ ${c} Cold Blood ❄️`,
    false
  ),
  makeMapStyle(
    "Attitude Fire 🔥😏",
    "Instagram Stylish Boy",
    (c) => `${c} Attitude King 🔥😏`,
    false
  ),
  makeMapStyle(
    "Dark Power ⛓️",
    "Instagram Stylish Boy",
    (c) => `⛓️ ${c} Dark Power ⛓️`,
    false
  ),
  makeMapStyle(
    "Beast Mode 🦁",
    "Instagram Stylish Boy",
    (c) => `🦁 ${c} Beast Mode 🦁`,
    false
  ),
  makeMapStyle(
    "Ruthless 🚫",
    "Instagram Stylish Boy",
    (c) => `🚫 ${c} Ruthless 🚫`,
    false
  ),

);


unicodeStyles.push(
  makeMapStyle("Killer Queen 💀🔥🖤", "Instagram Stylish Girl", (c) => `💀🔥🖤 ${c} 💀🔥🖤`, false),
makeMapStyle("Fierce Diva 👑⚡🔥", "Instagram Stylish Girl", (c) => `👑⚡🔥 ${c} 👑⚡🔥`, false),
makeMapStyle("Rebel Heart 💔🔥💀", "Instagram Stylish Girl", (c) => `💔🔥💀 ${c} 💔🔥💀`, false),
makeMapStyle("Dark Angel 🌑🖤🕷️", "Instagram Stylish Girl", (c) => `🌑🖤🕷️ ${c} 🌑🖤🕷️`, false),
makeMapStyle("Silent Killer 😈🔪💥", "Instagram Stylish Girl", (c) => `😈🔪💥 ${c} 😈🔪💥`, false),
makeMapStyle("No Mercy ⚡💀🔥", "Instagram Stylish Girl", (c) => `⚡💀🔥 ${c} ⚡💀🔥`, false),
makeMapStyle("Vicious Soul 🖤🔥💔", "Instagram Stylish Girl", (c) => `🖤🔥💔 ${c} 🖤🔥💔`, false),
makeMapStyle("Queen of Shadows 👑🌑🕸️", "Instagram Stylish Girl", (c) => `👑🌑🕸️ ${c} 👑🌑🕸️`, false),
makeMapStyle("Frost Bite ❄️💀🖤", "Instagram Stylish Girl", (c) => `❄️💀🖤 ${c} ❄️💀🖤`, false),
makeMapStyle("Lone Wolf 🐺🖤🔥", "Instagram Stylish Girl", (c) => `🐺🖤🔥 ${c} 🐺🖤🔥`, false),
makeMapStyle("Shadow Queen 👑🌑🖤", "Instagram Stylish Girl", (c) => `👑🌑🖤 ${c} 👑🌑🖤`, false),
makeMapStyle("Vampire Soul 🧛‍♀️🖤💥", "Instagram Stylish Girl", (c) => `🧛‍♀️🖤💥 ${c} 🧛‍♀️🖤💥`, false),
makeMapStyle("Fire Spirit 🔥💀⚡", "Instagram Stylish Girl", (c) => `🔥💀⚡ ${c} 🔥💀⚡`, false),
makeMapStyle("Queen Cobra 🐍👑💥", "Instagram Stylish Girl", (c) => `🐍👑💥 ${c} 🐍👑💥`, false),
makeMapStyle("Ice Queen ❄️👑🖤", "Instagram Stylish Girl", (c) => `❄️👑🖤 ${c} ❄️👑🖤`, false),
makeMapStyle("Dark Empress 🌑⚡👑", "Instagram Stylish Girl", (c) => `🌑⚡👑 ${c} 🌑⚡👑`, false),
makeMapStyle("Lethal Beauty 💄💀🔥", "Instagram Stylish Girl", (c) => `💄💀🔥 ${c} 💄💀🔥`, false),
makeMapStyle("Silent Storm 🌪️🖤💥", "Instagram Stylish Girl", (c) => `🌪️🖤💥 ${c} 🌪️🖤💥`, false),
makeMapStyle("Rebel Heart ❤️‍🔥💔🖤", "Instagram Stylish Girl", (c) => `❤️‍🔥💔🖤 ${c} ❤️‍🔥💔🖤`, false),
makeMapStyle("Toxic Angel 😈💉🖤", "Instagram Stylish Girl", (c) => `😈💉🖤 ${c} 😈💉🖤`, false),
makeMapStyle("Queen Venom 🐍🖤⚡", "Instagram Stylish Girl", (c) => `🐍🖤⚡ ${c} 🐍🖤⚡`, false),
makeMapStyle("Frost Bite ❄️💀🩸", "Instagram Stylish Girl", (c) => `❄️💀🩸 ${c} ❄️💀🩸`, false),
makeMapStyle("Scarlet Viper 🐍💋🔥", "Instagram Stylish Girl", (c) => `🐍💋🔥 ${c} 🐍💋🔥`, false),
makeMapStyle("Hellfire Queen 🔥👑💀", "Instagram Stylish Girl", (c) => `🔥👑💀 ${c} 🔥👑💀`, false),
makeMapStyle("Night Stalker 🌌🖤⚔️", "Instagram Stylish Girl", (c) => `🌌🖤⚔️ ${c} 🌌🖤⚔️`, false),
makeMapStyle("Poison Rose 🌹💀🖤", "Instagram Stylish Girl", (c) => `🌹💀🖤 ${c} 🌹💀🖤`, false),
makeMapStyle("Blazing Wolf 🐺🔥⚡", "Instagram Stylish Girl", (c) => `🐺🔥⚡ ${c} 🐺🔥⚡`, false),
makeMapStyle("Death Whisper 💀🌪️🖤", "Instagram Stylish Girl", (c) => `💀🌪️🖤 ${c} 💀🌪️🖤`, false),
makeMapStyle("Venom Kiss 💋🐍💀", "Instagram Stylish Girl", (c) => `💋🐍💀 ${c} 💋🐍💀`, false),
makeMapStyle("Fatal Charm 💄🖤💥", "Instagram Stylish Girl", (c) => `💄🖤💥 ${c} 💄🖤💥`, false),
  makeMapStyle(
  "Queen Attitude 👑",
  "Instagram Stylish Girl",
  (c) => `✧°˖${c}💖✧`,
  false
),
makeMapStyle(
  "Love Spark 💕",
  "Instagram Stylish Girl",
  (c) => `ღ${c}ღ`,
  false
),
makeMapStyle(
  "Fierce Wolf 🐺",
  "Instagram Stylish Girl",
  (c) => `༺🐺${c}🐺༻`,
  false
),
makeMapStyle(
  "No Mercy ❌",
  "Instagram Stylish Girl",
  (c) => `⚡${c}⚡`,
  false
),
makeMapStyle(
  "Animal Lover 🐾",
  "Instagram Stylish Girl",
  (c) => `❀${c}❀`,
  false
),
makeMapStyle(
  "Heart Breaker 💔",
  "Instagram Stylish Girl",
  (c) => `✦${c}✦`,
  false
),
makeMapStyle(
  "Mystic Moon 🌙",
  "Instagram Stylish Girl",
  (c) => `☾${c}☽`,
  false
),
makeMapStyle(
  "Fire Spirit 🔥",
  "Instagram Stylish Girl",
  (c) => `⫷${c}⫸`,
  false
),
makeMapStyle(
  "Royal Queen 👑",
  "Instagram Stylish Girl",
  (c) => `♛${c}♛`,
  false
),
makeMapStyle(
  "Silent Killer 😎",
  "Instagram Stylish Girl",
  (c) => `☠️${c}☠️`,
  false
),
makeMapStyle("Queen Vibes 👑", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Love Angel 💕", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Wild Cat 🐱", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Fierce Heart 💔", "Instagram Stylish Girl", (c) => `✦${c}✦`, false),
makeMapStyle("Mystic Star ✨", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Silent Shadow 🌑", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Fire Queen 🔥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Rebel Soul 😎", "Instagram Stylish Girl", (c) => `⚡${c}⚡`, false),
makeMapStyle("Angel Eyes 👀", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Dark Rose 🌹", "Instagram Stylish Girl", (c) => `❁${c}❁`, false),
makeMapStyle("Lone Wolf 🐺", "Instagram Stylish Girl", (c) => `༺🐺${c}🐺༻`, false),
makeMapStyle("Princess Aura 👸", "Instagram Stylish Girl", (c) => `♕${c}♕`, false),
makeMapStyle("Cute Rebel 🖤", "Instagram Stylish Girl", (c) => `⚔️${c}⚔️`, false),
makeMapStyle("Moonlight 🌙", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Starry Heart 🌟", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Royal Diva 👑", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Kitty Love 🐾", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Shadow Queen 🌑", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Golden Angel ✨", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Ice Princess ❄️", "Instagram Stylish Girl", (c) => `❄️${c}❄️`, false),
makeMapStyle("Wild Spirit 🦋", "Instagram Stylish Girl", (c) => `༺${c}༻`, false),
makeMapStyle("Heart Slayer 💔", "Instagram Stylish Girl", (c) => `✦${c}✦`, false),
makeMapStyle("Flame Soul 🔥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Mystic Eyes 👁️", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Lone Star 🌟", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Royal Flame 🔥", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Cute Angel 😇", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Silent Heart 💖", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Dark Beauty 🌑", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Rebel Queen 👑", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Sweet Wolf 🐺", "Instagram Stylish Girl", (c) => `༺🐺${c}🐺༻`, false),
makeMapStyle("Floral Love 🌸", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Moon Queen 🌙", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Heart Fire 🔥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Golden Star 🌟", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Royal Heart 💖", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Angel Wings 😇", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Dark Rose 🌹", "Instagram Stylish Girl", (c) => `❁${c}❁`, false),
makeMapStyle("Wild Cat 🐱", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Fierce Girl 💥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Silent Angel 😇", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Love Queen 💖", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Mystic Wolf 🐺", "Instagram Stylish Girl", (c) => `༺🐺${c}🐺༻`, false),
makeMapStyle("Rebel Star 🌟", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Frost Angel ❄️", "Instagram Stylish Girl", (c) => `❄️${c}❄️`, false),
makeMapStyle("Royal Aura 👑", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Heart Breaker 💔", "Instagram Stylish Girl", (c) => `✦${c}✦`, false),
makeMapStyle("Cute Fire 🔥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Magic Moon 🌙", "Instagram Stylish Girl", (c) => `☾${c}☽`, false),
makeMapStyle("Angel Fire ✨", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Fierce Kitty 🐱", "Instagram Stylish Girl", (c) => `❀${c}❀`, false),
makeMapStyle("Silent Queen 👑", "Instagram Stylish Girl", (c) => `♛${c}♛`, false),
makeMapStyle("Love Soul 💖", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),
makeMapStyle("Mystic Flame 🔥", "Instagram Stylish Girl", (c) => `⫷${c}⫸`, false),
makeMapStyle("Star Queen 🌟", "Instagram Stylish Girl", (c) => `✧${c}✧`, false),
makeMapStyle("Angel Heart 💕", "Instagram Stylish Girl", (c) => `ღ${c}ღ`, false),

)

export default unicodeStyles;
