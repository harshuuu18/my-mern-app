const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
// 7sy74O9wO7qBsMmF
const{MONGOURI} = require('./config/keys');




mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo Yeah")
})
mongoose.connection.on('error',(err)=>{
    console.log(`not Connected ${err}`)
})

require('./models/user');
require('./models/post')

app.use(express.json());

app.use(require('./routes/auth'));

app.use(require('./routes/post'));


app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, ()=>{
    console.log(`Serve is Running at ${port}`);
})