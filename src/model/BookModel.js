const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb://mongodb+srv://ajana:<I1wNLanidBwGSWxk>@cluster0.qh8z9se.mongodb.net/?retryWrites=true&w=majority/Library');

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;