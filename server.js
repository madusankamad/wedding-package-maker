const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
import magazineRouter from './appExpressServer/routes/magazin.routes';



const app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:<port>/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

router.get('/enlargements', function (req, res) {
    res.json({message: 'Enlargement price goes here....'});
});


app.use('/api', router);
app.use('/api/magazine', magazineRouter);


if (process.env.NODE_ENV !== 'development') {
    /* Static Path */
    app.use(express.static(path.join(__dirname, '/build')));

    app.use("*", (req, res) => {
        res.sendFile(path.join(__dirname, '/build/index.html'));
    });
}
else {
    console.log('Running in Development mode');
}


app.listen(port);

console.log("Server is running... Port=>", port);




