
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var newFriend = {
        name: $("#userName").val().trim(),
        picture: $("#userImgLink").val().trim(),
        total: [ 
        $("#q1").val().trim(),
        $("#q2").val().trim(),
        $("#q3").val().trim(),
        $("#q4").val().trim(),
        $("#q5").val().trim(),
        $("#q6").val().trim(),
        $("#q7").val().trim(),
        $("#q8").val().trim(),
        $("#q9").val().trim(),
        $("#q10").val().trim()
        ]
    };

var newUser = _.reduce(newFriend.total, function(memo, num){ return (memo + parseInt(num)); }, 0);
    
    $.post("/api/friends", newFriend).done(function(data) {
        $.get("/api/friends", function(data) {
            var matchFriend = [];
            for(var i = 0; i<data.length-1; i++) {
                var friendScore = _.reduce(data[i]["total[]"], function(total, num){ return total + parseInt(num); }, 0);
                console.log("friendScore: " + friendScore);
                console.log("newUser: " + newUser);
                var diffCurrMatchedScore = Math.abs(newUser - friendScore);
                console.log("diffCurrMatchedScore: " + diffCurrMatchedScore);
                matchFriend.push({
                    existingUser: i,
                    diffNum:diffCurrMatchedScore
                });
            };

            var min_object = _.min(matchFriend, function(object){return object.diffNum});
            $("#matchName").html(data[min_object.existingUser].name);
            $("#matchImg").attr("src", data[min_object.existingUser].picture);
            $("#myModal").modal("show");
        });

    });
});


