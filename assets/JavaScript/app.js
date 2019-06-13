//variables 
var questions = [
    {
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


// need to click on start button/ begin the journey / need a functio
$("#start").on("click", function () {
    $("start").remove();
    triviaGame.showQuestion();

});



$(document).on("click", "#reset", function () {
    triviaGame.reset();
    $("#reset").remove;

});


var triviaGame = {
    questions: questions,
    question: 0,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timeRemaining: 10, //counter

    // timer in the game 
    countdown: function () {
        triviaGame.timeRemaining--;
        $("#timeRemaining").html("Time remaining: " + triviaGame.timeRemaining);

        if (triviaGame.timeRemaining === 0) {
            console.log("time is up");
            triviaGame.stopTimer();
        };


    },

    showQuestion: function () {
        timer = setInterval(triviaGame.countdown, 1000);
        $("#contentWrap").html("<h3><span id = 'timeRemaining'> 10</span> Seconds</h3>");
        $("#contentWrap").append('<h2>' + questions[triviaGame.question].question + '</h2>');

        for (var i = 0; i < questions[triviaGame.question].answer.length; i++) {


            $('#contentWrap').append('<button class="answer-button" id="button- ' + i + ' "data-name="' + questions[triviaGame.question].answer[i] + '">' + questions[triviaGame.question].answer[i] + '</button>');
        }
    },

    nextQuestion: function () {
        triviaGame.timeRemaining = 10;
        $("#contentWrap").html(triviaGame.timeRemaining);
        triviaGame.question++;
        triviaGame.showQuestion();
    },



    //if the user gets the correct answer function 

    //if the user gets the incorrect answer function 


    // function to tell the game when to stop the timer 
    stopTimer: function () {
        clearInterval(time);
        triviaGame.checkAnswers++;
        $("#contentWrap").html("<h3> Out of time!</h3>");
        $("#contentWrap").append("<h3> The correct question is: questions[triviaGame.question].correctAnswer + </h3>");


        if (triviaGame.question === questions.length - 1) {
            setTimeout(triviaGame.results, 2000);

        } else {
            setTimeout(triviaGame.nextQuestion, 2000);

        }
    },

    ///results 
    results: function () {
        clearInterval(timer);

        $('#contentWrap').append("<h3>Correct: " + triviaGame.correct + "</h3>");
        $('#contentWrap').append("<h3>Incorrect: " + triviaGame.incorrect + "</h3>");
        $('#contentWrap').append("<h3>Unanswered: " + triviaGame.unanswered + "</h3>");
        $('#resetButtonWrap').append("<button id='reset'> Try Again </button>");

    },

    /// need to reset
    reset: function () {
        triviaGame.question = 0;
        triviaGame.timeRemaining = 10;
        triviaGame.correct = 0;
        triviaGame.incorrect = 0;
        triviaGame.unanswered = 0;
        triviaGame.showQuestion();
    },

}


   // startTimer: function () {
    //     $("timer").text("Time Remaining:" + triviaGame.timer);
    //     setInterval(triviaGame.countdown, 1000);
    //     $("#startGame").hide();
    //     tGame.displayQuestions();
    // },