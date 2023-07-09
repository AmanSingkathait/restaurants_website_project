const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 600;

const publicPath = path.join(__dirname,"./Public");
const templatePath = path.join(__dirname,"./Templates/views");
const partialPath = path.join(__dirname,"./Templates/partials")
app.use("/Public", express.static(publicPath));


app.set("view engine", 'hbs');
app.set('views', templatePath);

hbs.registerPartials(partialPath);

app.get("",(req,res)=>{
    res.render('index.hbs');
})
app.listen(port,()=>{
    console.log(`app is runing at the port ${port}`)
})

