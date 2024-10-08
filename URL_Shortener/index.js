// index.js

const express=require('express');
const app=express();
const PORT=7700;

const mongoose=require('mongoose');
const URL=require('./Models/url.js');
const path=require('path');
const cookieParser=require('cookie-parser');
const {restrictToLog,checkAuth}=require('./midddleware/auth.js')

const staticRoute=require('./Routes/staticRouter.js')
const urlRoute=require('./Routes/routes.js');
const userRoute=require('./Routes/user.js')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());



app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

mongoose.connect('mongodb://127.0.0.1:27017/short_url')
.then(()=>console.log("MongoDB connected successfully"))
.catch((error)=>console.log(error));

app.use('/url',restrictToLog,urlRoute);
app.use('/',checkAuth,staticRoute);
app.use('/user',userRoute);



app.listen(PORT,()=>{
    console.log(`Server Started at PORT:${PORT}`);
});