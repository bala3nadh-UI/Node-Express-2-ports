var express = require("express"),
    router = express.Router();

var users = [{ id: 1, name: "Bala3nadh" }];
router.get("/user", function(req, res) {
    res.send(users);
});

module.exports = router;