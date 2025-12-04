// ✅ 1. Define Base URL
const BASE_URL = "https://raw.githubusercontent.com/Kaifazad/pixelwall-collection/main/wallpapers";

// ✅ 2. Define Your Categories & Files
// You can add "Batman", "Anime" sections here easily later!
const collections = [
  {
    category: "Stranger Things",
    prefix: "st", // ID prefix (st_01, st_02...)
    baseFilename: "strangerthings", // filename prefix (strangerthings01.jpg...)
    files: [
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
    ]
  },
  // 🦇 Example for when you add Batman later:
  /*
  {
    category: "Batman",
    prefix: "bm",
    baseFilename: "batman",
    files: [
      { id: 1, ext: 'jpg' }, { id: 2, ext: 'jpg' }
    ]
  },
  */
];

// ✅ 3. Generate the Master List
const MY_WALLPAPERS = collections.flatMap(collection => {
  return collection.files.map(file => {
    const num = file.id.toString().padStart(2, '0'); // 1 -> "01"
    const fileName = `${collection.baseFilename}${num}.${file.ext}`;
    
    return {
      id: `${collection.prefix}_${num}`,
      category: collection.category, // 👈 NEW: Tagging the category
      urls: {
        raw: `${BASE_URL}/${fileName}`,
        full: `${BASE_URL}/${fileName}`,
        regular: `${BASE_URL}/${fileName}`,
        small: `${BASE_URL}/${fileName}`,
      },
      width: 1080, 
      height: 1920,
      color: "#000000",
      description: `${collection.category} Wallpaper ${num}`,
      user: {
        name: "Pixel Wall",
        location: "Exclusive",
        profile_image: { large: "https://github.com/Kaifazad.png" }
      }
    };
  });
});

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
    body: JSON.stringify(MY_WALLPAPERS)
  };
};