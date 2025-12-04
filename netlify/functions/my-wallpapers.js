// ✅ 1. Define the base URL
const BASE_URL = "https://raw.githubusercontent.com/Kaifazad/pixelwall-collection/main/wallpapers";

// ✅ 2. Define the file extensions exactly as per your Git Log
// This list maps the ID number to the file extension (jpg or png)
const fileExtensions = [
  { id: 1, ext: 'jpg' },  { id: 2, ext: 'png' },  { id: 3, ext: 'jpg' },  { id: 4, ext: 'jpg' },
  { id: 5, ext: 'png' },  { id: 6, ext: 'jpg' },  { id: 7, ext: 'jpg' },  { id: 8, ext: 'jpg' },
  { id: 9, ext: 'jpg' },  { id: 10, ext: 'jpg' }, { id: 11, ext: 'jpg' }, { id: 12, ext: 'jpg' },
  { id: 13, ext: 'jpg' }, { id: 14, ext: 'png' }, { id: 15, ext: 'jpg' }, { id: 16, ext: 'jpg' },
  { id: 17, ext: 'png' }, { id: 18, ext: 'jpg' }, { id: 19, ext: 'jpg' }, { id: 20, ext: 'png' },
  { id: 21, ext: 'png' }, { id: 22, ext: 'jpg' }, { id: 23, ext: 'jpg' }, { id: 24, ext: 'jpg' },
  { id: 25, ext: 'png' }, { id: 26, ext: 'png' }, { id: 27, ext: 'png' }, { id: 28, ext: 'png' },
  { id: 29, ext: 'jpg' }, { id: 30, ext: 'jpg' }, { id: 31, ext: 'png' }, { id: 32, ext: 'jpg' },
  { id: 33, ext: 'jpg' }, { id: 34, ext: 'png' }, { id: 35, ext: 'jpg' }, { id: 36, ext: 'jpg' },
  { id: 37, ext: 'jpg' }, { id: 38, ext: 'jpg' }, { id: 39, ext: 'jpg' }, { id: 40, ext: 'png' },
  { id: 41, ext: 'jpg' }
];

// ✅ 3. Generate the Wallpaper List Dynamically
const MY_WALLPAPERS = fileExtensions.map(item => {
  // Converts 1 to "01", 10 to "10"
  const num = item.id.toString().padStart(2, '0'); 
  const fileName = `strangerthings${num}.${item.ext}`;

  return {
    id: `st_${num}`,
    urls: {
      raw: `${BASE_URL}/${fileName}`,
      full: `${BASE_URL}/${fileName}`,
      regular: `${BASE_URL}/${fileName}`,
      small: `${BASE_URL}/${fileName}`,
    },
    width: 1080,
    height: 1920,
    color: "#000000",
    description: `Stranger Things Wallpaper ${num}`,
    user: {
      name: "Pixel Wall",
      location: "Kolkata, India",
      profile_image: { large: "https://github.com/Kaifazad.png" }
    }
  };
});

// ✅ 4. Export the handler for Netlify
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(MY_WALLPAPERS)
  };
};