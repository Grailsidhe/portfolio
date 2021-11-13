const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    postbody: { type: String, required: true },
    picture: { type: String, required: false },
    keywords: { type: String, required: false }
});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;