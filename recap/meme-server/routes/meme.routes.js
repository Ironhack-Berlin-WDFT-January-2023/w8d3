const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const Meme = require("../models/Meme.model")

// Add a meme
// Get all memes
// Get memes by topic
// Get meme by id
// Delete meme

router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  res.json({ imageUrl: req.file.path });
});

router.post("/memes", (req, res, next) => {
  Meme.create(req.body)
    .then(response => {
      res.status(201).json({message: "Meme created"})
    })
    .catch(err => console.log(err))
})

router.get("/memes", (req, res, next) => {
  Meme.find()
    .then(response => {
      console.log(response)
      res.json(response)
    })
    .catch(err => console.log(err))
})




module.exports = router;