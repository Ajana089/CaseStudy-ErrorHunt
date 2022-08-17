const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');

//mongoose.connect('mongodb+srv://ajana:3yzYAMNfN8SNdgSO@cluster0.gibs8pa.mongodb.net/Library?retryWrites=true&w=majority');



const url = "mongodb+srv://ajana:3yzYAMNfN8SNdgSO@cluster0.gibs8pa.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 


const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;