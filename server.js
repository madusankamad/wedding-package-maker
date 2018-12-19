const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/magazine', function(req, res) {
    res.json({ message: 'Magazine Price goes here.....' });
});

router.get('/enlargements', function(req, res) {
    res.json({ message: 'Enlargement price goes here....' });
});



app.use('/api', router);

/* Static Path */
app.use(express.static(path.join(__dirname, 'build')));


/*Routes*/
app.use("*", (req,res)=>{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});



app.listen(port);

console.log("Server is running... Port=>", port);




