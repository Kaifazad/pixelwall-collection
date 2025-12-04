// ------------------------------------------------------
// PixelWall Custom API – Fully Optimized & Auto-Dimensioned
// ------------------------------------------------------

const axios = require("axios");
const sizeOf = require("image-size");

// RAW GitHub base URL
const BASE_URL =
  "https://raw.githubusercontent.com/Kaifazad/pixelwall-collection/main/wallpapers";

// Your collections config
const collections = [
  {
    category: "Stranger Things",
    prefix: "st",
    baseFilename: "strangerthings",
    files: [
      { id: 1, ext: "jpg" }, { id: 2, ext: "png" }, { id: 3, ext: "jpg" }, 
      { id: 4, ext: "jpg" }, { id: 5, ext: "png" }, { id: 6, ext: "jpg" },
      { id: 7, ext: "jpg" }, { id: 8, ext: "jpg" }, { id: 9, ext: "jpg" },
      { id: 10, ext: "jpg" }, { id: 11, ext: "jpg" }, { id: 12, ext: "jpg" },
      { id: 13, ext: "jpg" }, { id: 14, ext: "png" }, { id: 15, ext: "jpg" },
      { id: 16, ext: "jpg" }, { id: 17, ext: "png" }, { id: 18, ext: "jpg" },
      { id: 19, ext: "jpg" }, { id: 20, ext: "png" }, { id: 21, ext: "png" },
      { id: 22, ext: "jpg" }, { id: 23, ext: "jpg" }, { id: 24, ext: "jpg" },
      { id: 25, ext: "png" }, { id: 26, ext: "png" }, { id: 27, ext: "png" },
      { id: 28, ext: "png" }, { id: 29, ext: "jpg" }, { id: 30, ext: "jpg" },
      { id: 31, ext: "png" }, { id: 32, ext: "jpg" }, { id: 33, ext: "jpg" },
      { id: 34, ext: "png" }, { id: 35, ext: "jpg" }, { id: 36, ext: "jpg" },
      { id: 37, ext: "jpg" }, { id: 38, ext: "jpg" }, { id: 39, ext: "jpg" },
      { id: 40, ext: "png" }, { id: 41, ext: "jpg" },
    ],
  },

  // You can add Batman, Anime, etc here later
];

// ------------------------------------------------------------
// PERFORMANCE BOOST: Dimension Cache (persists during runtime)
// ------------------------------------------------------------
let dimensionCache = {}; // prevents re-fetching same images each call

async function getImageSize(url) {
  if (dimensionCache[url]) return dimensionCache[url];

  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const size = sizeOf(buffer);

    const result = { width: size.width, height: size.height };
    dimensionCache[url] = result;
    return result;
  } catch (err) {
    console.error("Could not read image size:", url);
    // Fallback: portrait (safe default)
    return { width: 1080, height: 1920 };
  }
}

// ------------------------------------------------------------
// Build all wallpapers (auto-size detection included)
// ------------------------------------------------------------
async function buildWallpaperList() {
  const results = [];

  for (const col of collections) {
    for (const file of col.files) {
      const num = file.id.toString().padStart(2, "0");
      const fileName = `${col.baseFilename}${num}.${file.ext}`;

      const url = `${BASE_URL}/${fileName}`;

      // Get real width & height — FIXES ZOOMING
      const { width, height } = await getImageSize(url);

      results.push({
        id: `${col.prefix}_${num}`,
        category: col.category,

        urls: {
          raw: url,
          full: url,
          regular: url,
          small: url,
        },

        width,
        height,
        color: "#000000",
        description: `${col.category} Wallpaper ${num}`,

        user: {
          name: "Pixel Wall",
          location: "Exclusive",
          profile_image: { large: "https://github.com/Kaifazad.png" },
        },
      });
    }
  }

  return results;
}

// ------------------------------------------------------------
// Netlify Handler
// ------------------------------------------------------------
exports.handler = async function () {
  try {
    const wallpapers = await buildWallpaperList();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wallpapers),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server failed", details: err }),
    };
  }
};
