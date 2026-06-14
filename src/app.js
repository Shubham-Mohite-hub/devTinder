const express = require("express");

const app = express();


app.get("/user/:userId/:name/:password", (req, res) => {
    const { userId, name, password } = req.params;

    console.log(userId);
    console.log(name);
    console.log(password);

    res.send("Received");
});



app.listen(3008, ()=> {
    console.log("server is listening successfully on port 3000 ...");
    
});
