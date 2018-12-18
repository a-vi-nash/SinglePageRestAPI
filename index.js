var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    //add your aws code here
    res.send(["Tony","Lisa","Michael","Ginger","Food"]);
   });