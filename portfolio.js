
//The Clicking Game!!!!
// // sets background color when color is clicked
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


// Tic Tac Toe!!!!var gameSpaces = document.querySelectorAll("td");
var gameSpaces = document.querySelectorAll("td");
var player1 = 1;


function clickedSquare(e) {
    console.log("hjh");

    if (player1 === 1 && e.target.innerHTML ==="")
    {
        e.target.innerHTML = "X";
        player1 = 2;
    }
    else if(e.target.innerHTML === "")
    {
        e.target.innerHTML = "O";
        player1 = 1;
    }
    checkForWinner()
}
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}
//function to check for winner
function checkForWinner() {
    console.log('Checking for winner');
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins");
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        return false;
    }

}
// Add a New Game button that when clicked, will clear the game area and start a new game.
var btn = document.getElementById("reset");
btn.onclick=function(e){
    console.log('button clicked');
    for (var i = 0; i < gameSpaces.length; i++)
        gameSpaces[i].innerHTML="";
};