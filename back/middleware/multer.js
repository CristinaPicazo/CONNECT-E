const multer = require("multer");

const storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    console.log("req inside filename and storeage multer:", req);
    console.log("file inside filename and storeage multer:", file);
    cb(null, makeFilename(file));
  },
});

function makeFilename(file) {
  try {
    const fileName = `${Date.now()}-${file.originalname}`.replace(/\s/g, "-");
    console.log(
      "fileName inside makeFilename inside storeag multer:",
      fileName
    );
    file = fileName;
    return file;
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
