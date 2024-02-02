const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');
var cors = require('cors');



const app = express();
dotenv.config();

//////mongoose configuration/////
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database connected successfully');
}).catch((err)=>{
    console.log('error in connecting db',err);
});
////////////////////////////////
app.use(express.json());
app.use(express.urlencoded());
app.listen(8800, ()=>{
    console.log('server running on server : 8800')
})

app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/user", userRoute);
app.use("/api/movie",movieRoute);
app.use("/api/list",listRoute);
