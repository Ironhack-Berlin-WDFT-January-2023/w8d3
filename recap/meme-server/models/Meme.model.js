const { Schema, model } = require("mongoose");

const memeSchema = new Schema({
  imageUrl: String,
  title: String,
  source: String,
  topic: {
    type: String,
    enum: ["development", "dogs", "berlin", "pop culture", "random"]
  }
},
{
  timestamps: true
})

const Meme = model("Meme", memeSchema);

module.exports = Meme;