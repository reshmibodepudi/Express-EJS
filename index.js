const express=require("express");
const app=express();

const path=require("path");

const port=8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.set("view engine","ejs");
app.set("Views", path.join(__dirname,"/Views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/insta/:user", (req, res) => {
    const followers=["mark", "zucker","steve","adam"];
    let {user} = req.params;
    res.render("insta.ejs",{user, followers}); 
});
app.get("/ig/:username",(req, res) => {
    let{username}= req.params;
    const instaData = require("./data.json");
    const data=instaData[username];
    if(data)
        {
            res.render("instagram.ejs", {data});
        }else{
            res.render("error.ejs");
        }
});
app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random()* 6)+ 1;
    res.render("roll.ejs", {diceval});
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});