var Friends = require("../data/friends");


module.exports = function(app) {
    app.get("/api/friends" , function(req , res) {
        res.json(Friends);
    });

    app.post("/api/friends" , function(req , res) {
        console.log(req.body);
        var trueFriend = {name : "", photo : "" , scores : []};
        var trueScore = 10;
        for(var i = 0; i < Friends.length; i++)
        {
            var scoreOne = 0;
            var scoreTwo = 0;
            for(var j = 0; j < 10; j++)
            {
                scoreOne += Friends[i].scores[j];
                scoreTwo += parseInt(req.body.scores[j]);
            }

            if(Math.abs(scoreOne - scoreTwo) < trueScore)
            {
                trueFriend = Friends[i];
            }
        }
        Friends.push(req.body);
        return res.json(trueFriend);


    });
}