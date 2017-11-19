let users = [];
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(users);
    });

    app.post("/api/friends", function(req, res) {
        var userData = req.body;
        users.push(userData);
        res.json(users);
    });
};