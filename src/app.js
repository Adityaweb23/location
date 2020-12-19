const express = require("express");
const path = require("path");
const app  = express();
const port = process.env.PORT || 3000
require("./db/conn")
const Users = require("./models/members")



const static_path = path.join(__dirname, "../public")
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path));
app.use('/css' , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js' , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq' , express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.set("view engine", "hbs");

app.get("/" , (req,res)=>{
    res.render("index");

})
app.get("/about" , (req,res)=>{
    res.render("about");

})
app.get("/contact" , (req,res)=>{
    res.render("contact");

})
app.get("/services" , (req,res)=>{
    res.render("service");

})
app.get("/login" , (req,res)=>{
    res.render("login");

})
app.get("/register" , (req,res)=>{
    res.render("register");

})
app.get("/location" , (req,res)=>{
    res.render("location");

})
app.post("/register" , async (req,res)=>{
try {
    // res.send(req.body);
    const userdata = new  Users(req.body);
    await userdata.save();
    res.render('index')
} catch (error) {
    res.status(500).send(error)
}
})
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const username = await Users.findOne({ email: email });
        console.log(username);


           
            if (password===username.password) {
                res.render("index");
            } else {
                res.send("invalid email details entered");
            }
    
    } catch (error) {
        res.send("invalid email details")
        console.log(error);
    }
})

app.listen(port , ()=>{
    console.log(`listning to the port ${port}`);
})