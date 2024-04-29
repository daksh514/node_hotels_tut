const express = require("express");
const app = express();
const db = require("./db");



const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my World");
});


const personRoutes = require('./Routes/personRoutes')
const menuRoutes = require('./Routes/menuRoutes')


app.use('/person', personRoutes)
app.use('/menuItem', menuRoutes)




app.listen(3000, () => {
  console.log("listening on port 3000");
});
