const express = require('express'); 
const path = require ('path'); 
const bodyParser=require('body-parser');//added bodyparser 
const cors = require('cors');


const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//change the path n correct the location of the folder
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
//app.use(express.static(''));

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 
app.use(cors());



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(process.env.PORT || 5000, () => {
    console.log("Server Ready on 5000"); 
  });
  