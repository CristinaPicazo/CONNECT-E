const multer = require("multer");

// Save file in images file
const storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    cb(null, makeFilename(file));
  },
});

// Create a unique name for the file
function makeFilename(file) {
  try {
    const fileName = `${Date.now()}-${file.originalname}`.replace(/\s/g, "-");
    file.fileName = fileName;
    return fileName;
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal error", err });
  }
}

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    // cb(null, false);
    cb(new Error("Not valid picture"));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = { upload };
