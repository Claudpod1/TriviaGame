//variables 
var questions = [{
    question: "How many named rivers are in colorado?",
    options: [50, 78, 151, 158],
    answer: 158,
},
{
    question: "The longest river in the state of Colorado?",
    options: ["Colorado River", "Green River", "Rio Grande", "Arkansas"],
    answer: "Colorado River",
},

{
    question: "The Colorado river is the ___ longest river in the nation.",
    options: ["3rd", "5th", "4th", "2nd"],
    answer: "5th",
},

{
    question: "How many states does the rivers in Colorado supply water to? ",
    options: [1, 12, 9, 17],
    answer: 17,
},

{
    question: "Which river is closest to Denver?",
    options: ["Arkansas", "Rio Grande", "South Platte", "Gunnison"],
    answer: "South Platte",
},

{
    question: "The Arkansas River is know for?",
    options: ["Fishing", "Whitewater Rafting", "Multitude of minerals", "All the above"],
    answer: "All the above",
},

{
    question: "The Colorado River nickname is?",
    options: ["River of law", "River of the Grand Canyone", "River of Environment", "River of the heart"],
    answer: "River of law",
}];


var correct = 0;
var incorrect = 0;
var unanswered = 0;



$(document).ready(function () {
    // need to click on start button/ begin the journey / need a function 

    $("#start").on("click", triviaGame.startTimer);
})

var triviaGame = {
    timeRemaining: 40,
    startTimer: function () {
        $("timer").text("Time Remaining:" + triviaGame.timer);
        setInterval(triviaGame.countdown, 1000);
        $("#startGame").hide();
        tGame.displayQuestions();
    },

    countdown: function() {
        triviaGame.timeRemaining--;
        $("#timer").text("Time remaining: " + triviaGame.timeRemaining);
        if (triviaGame.timeRemaining === 0) {
          triviaGame.stopTimer();
          $("#timer").empty();
        }
      },
    
     
      stopTimer: function() {
        clearInterval();
        tGame.checkAnswers();
      },
    
     
      showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#game").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answer: " + numCorrect);
        $("#incorrect-answers").text("Incorrect answer: " + numIncorrect);
        $("#unanswered").text("Unanswered answer" + numUnanswered);
      }
    }

var tGame = {
    displayQuestions: function () {
        var divContainer = $("#game");
        divContainer.append("<h2>Answer the following questions:</h2>");

        for (var i = 0; i < questions.length; i++) {

            divContainer.append("<br>" + questions[i].question + "<br>" + questions[i].options + "<br>");
            
        }
    }
}


// some function to check the answer from the user 

// if statements if the result is correct or not  

//restart ! 