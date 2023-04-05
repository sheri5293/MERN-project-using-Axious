import express from 'express';
import mongoose from 'mongoose';
import route from './Route/router.js';
import cors from 'cors';   // cors is used to avoid cross origin error
 import bodyParser from 'body-parser';  // body-parser is used to get data from front end and send to backend and encoded url parse//
const app = express(); // initalize with app variable
 
  app.use(bodyParser.json( {extended: true}));   // convert json data to object
  app.use(bodyParser.urlencoded({extended: true})) // convert url encoded data to object


app.use(cors()); // use cors
app.use(route); // use route






const port = 8000;

    const url ='mongodb+srv://user:codeforuser@cluster0.13hy9.mongodb.net/MERNPROJECT?retryWrites=true&w=majority';
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log('Connected to database');
    }).catch(err => console.log(err));

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
