// ✅ 1. Define the base URL for your raw images
const BASE_URL = "https://raw.githubusercontent.com/Kaifazad/pixelwall-collection/main/wallpapers";

// ✅ 2. Define your wallpaper list
const MY_WALLPAPERS = [
  {
    id: "st_01",
    urls: {
      raw: `${BASE_URL}/strangerthings1.jpg`,
      full: `${BASE_URL}/strangerthings1.jpg`,
      regular: `${BASE_URL}/strangerthings1.jpg`,
      small: `${BASE_URL}/strangerthings1.jpg`,
    },
    width: 1080,
    height: 1920,
    color: "#000000", 
    description: "Stranger Things Wallpaper 1",
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  },
  {
    id: "st_02",
    urls: {
      raw: `${BASE_URL}/strangerthings2.jpg`,
      full: `${BASE_URL}/strangerthings2.jpg`,
      regular: `${BASE_URL}/strangerthings2.jpg`,
      small: `${BASE_URL}/strangerthings2.jpg`,
    },
    width: 1080,
    height: 1920,
    color: "#000000",
    description: "Stranger Things Wallpaper 2",
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  },
  {
    id: "st_03",
    urls: {
      raw: `${BASE_URL}/strangerthings3.png`,
      full: `${BASE_URL}/strangerthings3.png`,
      regular: `${BASE_URL}/strangerthings3.png`,
      small: `${BASE_URL}/strangerthings3.png`,
    },
    width: 1080,
    height: 1920,
    color: "#000000",
    description: "Stranger Things Wallpaper 3",
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  },
  {
    id: "st_04",
    urls: {
      raw: `${BASE_URL}/strangerthings4.jpg`,
      full: `${BASE_URL}/strangerthings4.jpg`,
      regular: `${BASE_URL}/strangerthings4.jpg`,
      small: `${BASE_URL}/strangerthings4.jpg`,
    },
    width: 1080,
    height: 1920,
    color: "#000000",
    description: "Stranger Things Wallpaper 4",
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  },
  {
    id: "st_05",
    urls: {
      raw: `${BASE_URL}/strangerthings5.jpg`,
      full: `${BASE_URL}/strangerthings5.jpg`,
      regular: `${BASE_URL}/strangerthings5.jpg`,
      small: `${BASE_URL}/strangerthings5.jpg`,
    },
    width: 1080,
    height: 1920,
    color: "#000000",
    description: "Stranger Things Wallpaper 5",
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  }
];

// ✅ 3. Export the handler for Netlify
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allows your app to fetch this data
      "Content-Type": "application/json"
    },
    body: JSON.stringify(MY_WALLPAPERS)
  };
};