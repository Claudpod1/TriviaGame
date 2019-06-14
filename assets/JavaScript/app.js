//variables for the questions 
//sorted by | question.options.answer 


3
// you need your questions with options and an answer 
// click event to start the game 
// start a timer when you hit the start button 
// put the questions on to the page with options

// user will then pick an option or will not within 10 seconds 
//compare answers and or unanswered 
//then go to the next page 

// Give user results after the questions 
//then the option to reset! 




var questions = [
    {
        question: "How many named rivers are in colorado?",
        options: [50, 78, 151, 158],
        answer: "158",
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
        answer: "17",
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

$(document).on("click", ".ansButton", function (event) {
    triviaGame.clicked($(event.target).attr("data-name"));
    console.log($(event.target).attr("data-name"));

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
    // need to display the questions then 
    showQuestion: function () {
        console.log("in show question");

        timer = setInterval(triviaGame.countdown, 1000);
        $("#contentWrap").html("<h3><span id = 'timeRemaining'> 10</span> Seconds</h3>");
        $("#contentWrap").append('<h2>' + triviaGame.questions[triviaGame.question].question + '</h2>');

        for (var i = 0; i < triviaGame.questions[triviaGame.question].options.length; i++) {
            $('#contentWrap').append('<button class="ansButton" id="button- ' + i + ' "data-name="' + triviaGame.questions[triviaGame.question].options[i] + '">' + triviaGame.questions[triviaGame.question].options[i] + '</button>');

        }
    },

    nextQuestion: function () {
        triviaGame.timeRemaining = 10;
        $('#timeRemaining').html(triviaGame.timeRemaining);
        triviaGame.question++;
        triviaGame.showQuestion();
    },

    //if the user gets the incorrect answer function 
    incorrectAnswer: function () {
        console.log(triviaGame.questions[triviaGame.question]);
        console.log(triviaGame.question);


        clearInterval(timer);
        triviaGame.incorrect++;
        $("#contentWrap").html('<h2>Maybe next time</h2>');
        $('#contentWrap').append('<h3>The answer is: ' + triviaGame.questions[triviaGame.question].answer + '</h3>');
        if (triviaGame.question == questions.length - 1) {
            setTimeout(triviaGame.results, 2000);
        } else {
            setTimeout(triviaGame.nextQuestion, 2000);
        }
    },

    //if the user gets the correct answer function 

    correctAnswer: function () {
        clearInterval(timer);
        triviaGame.correct++;
        $("#contentWrap").html('<h2>BIG BIG MONEY</h2>');

        if (triviaGame.question == questions.length - 1) {
            setTimeout(triviaGame.results, 2000);
        } else {
            setTimeout(triviaGame.nextQuestion, 2000);
        }
    },

    clicked: function (sAnswer) {
        clearInterval(timer);
        if (sAnswer === triviaGame.questions[triviaGame.question].answer) {
            triviaGame.correctAnswer();
        } else {
            triviaGame.incorrectAnswer();
        }
    },

    // function to tell the game when to stop the timer 
    stopTimer: function () {
        clearInterval(timer);
        triviaGame.checkAnswers++;
        $("#contentWrap").html("<h3> Out of time!</h3>");
        console.log("line 164", triviaGame.questions[triviaGame.question].answer);

        $("#contentWrap").append(`<h3> The correct question is: ${triviaGame.questions[triviaGame.question].answer} </h3>`);
        // "<h3> The correct question is:" + triviaGame.questions[triviaGame.question].answer +"</h3>"

        if (triviaGame.question === triviaGame.questions.length - 1) {
            console.log("hello");
            setTimeout(triviaGame.results, 2000);

        } else {
            setTimeout(triviaGame.nextQuestion, 2000);

        }
    },
    /// need to reset
  
    ///results 
    results: function () {


        clearInterval(timer);

        $('#contentWrap').append("<h3>Correct: " + triviaGame.correct + "</h3>");
        $('#contentWrap').append("<h3>Incorrect: " + triviaGame.incorrect + "</h3>");
        $('#contentWrap').append("<h3>Unanswered: " + triviaGame.unanswered + "</h3>");
        $('#resetButton').append("<button id=reset> Try Again </button>");

    },

    reset: function () {
        $('#resetButton').hide();
        triviaGame.question = 0;
        triviaGame.timeRemaining = 10;
        triviaGame.correct = 0;
        triviaGame.incorrect = 0;
        triviaGame.unanswered = 0;
        triviaGame.showQuestion();
    },

};