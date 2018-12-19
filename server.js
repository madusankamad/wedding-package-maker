const express = require('express');
const path = require('path');
const port = process.env.NODE_ENV || 8080;
const app = express();

/* Static Path */
app.use(express.static(path.join(__dirname, 'build')));

/*Routes*/
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.get("api/v1", (req,res)=>{
    res.send({"Hello": "Test"});
});


app.listen(port);

console.log("Server is running... Port=>", port);




