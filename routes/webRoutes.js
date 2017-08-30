var express = require("express"),
    router = express.Router();

router.get('/', function(req, res) {
    //res.send("Hello Express Server");
    res.send("<h1>Home Page from 1st port 3000..!</h1>");
});

module.exports = router;