const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the server");
});
app.get("/hello", (req, res) => {
    res.send("Hello hello hello from the server");
});
app.get("/test", (req, res) => {
    res.send("Let us Test the server !");
});
app.listen(3008, ()=> {
    console.log("server is listening successfully on port 3000 ...");
    
});
