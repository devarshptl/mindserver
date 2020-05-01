const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.clear();

require('dotenv').config();

let app  = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser : true,
    useCreateIndex : true
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfull");
})


app.use(cors());
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

let authorRouter = require('./routers/author_router');
let userRouter = require('./routers/user_router');

app.use('/authors', authorRouter);
app.use('/users', userRouter);

app.listen(port,function(){
    console.log('Listening at port http://localhost:' + port);
})