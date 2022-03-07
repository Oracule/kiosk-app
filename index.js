const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 5090;

const url =  'mongodb+srv://kiosk_user:72611620dfvgbh@cluster0.zyeu5.mongodb.net/kiosk_db?retryWrites=true&w=majority'
mongoose.connect(url)
.then(results =>{
    console.log(results);
    app.listen(port,function(){
        console.log(`Server is running via port ${port}`);
    })

})
.catch(err => {
    console.log(err);
})