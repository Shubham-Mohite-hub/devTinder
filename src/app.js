const express = require("express");

const app = express();


app.get("/user", (req, res) => {
    res.send({firstName : "Shubham", lastName:"Mohite"});
});

app.post("/user", (req, res) => {
    res.send("Data Successfully saved to DB !");
});

app.delete("/user", (req, res) => {
    res.send("user Deleted SuccesFully !");
})

app.use("/test", (req, res) => {
    res.send("Let us Test the server !");
});



app.listen(3008, ()=> {
    console.log("server is listening successfully on port 3000 ...");
    
});
