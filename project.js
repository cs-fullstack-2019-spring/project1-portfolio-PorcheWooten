// sets background color when color is clicked
$("#redBtn").on("click", function () {
    console.log("test");
    $("body").addClass("bgCol1");

});
$("#blueBtn").on("click", function () {
    console.log("test");
    $("body").addClass("bgCol2");

});
$("#yellowBtn").on("click", function () {
    console.log("test");
    $("body").addClass("bgCol3");
});

//player 1 & 2 score counter
var p1 = 0;
$(".p1Btn").on("click",function () {

    p1++;
    console.log(p1);
    $(".display").text(p1);
    outcome();
    score();
});

//
//
var p2 = 0;
$(".p2Btn").on("click",function () {

    p2++;
    console.log(p2);
    $(".display2").text(p2);
    outcome();
    score();
});

// function used to keep up with winner


function outcome() {
    if (p1 === 15)
    {
        alert("Player 1 WINS!!!")
    }
    else if (p2 === 15)
    {
        alert("Player 2 WINS!!!")
    }
}

function score() {
    if (p1 > p2)
    {
        $("#winning").text("Player 1!!!")
    }
    else if (p1 < p2)
    {
        $("#winning").text("Player 2!!!")
    }
    else if (p1 === p2)
    {
        $("#winning").text("TIED!!!")
    }
}

// function used for keyboard and mouse option
$("#mouse").on("click", function () {
    $("#keyboard").removeAttr("disabled","");
    $("#mouse").attr("disabled","");
});
$("#keyboard").on("click", function () {
    $("#mouse").removeAttr("disabled","");
    $("#keyboard").attr("disabled","");
    //adds the ability to use keys P 7 W
    document.addEventListener("keydown", function (e) {
        if(e.code === "KeyW")
        {
            p1++;
            $(".display").text(p1);
            outcome();
            score();
        }
        else if(e.code === "KeyP")
        {
            p2++;
            $(".display2").text(p2);
            outcome();
            score();
        }
    })
});

