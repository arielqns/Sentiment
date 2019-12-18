const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleschema = new Schema({
  query: { type: String, required: true },
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String },
  urlToImage: { type: String },
  publishedAt: { type: Date },
  content: { type: String },
  type: { type: String },
  score: { type: String },
  ratio: { type: String },
  keywords: [
    { word: { type: String }},
    { score: { type: Number }} ],
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleschema);

module.exports = Article;
