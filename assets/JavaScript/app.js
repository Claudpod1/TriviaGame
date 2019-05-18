$(document).ready(function(){

})

var trivia = {
    correct:0,
    incorrect:0,
    unanswered:0,
    timer: 15,
    timerOn:false,

},
 // questions , options, and then the answer 
var questions = {
    q1: "How many named rivers are in colorado?", 
    q2: "The longest river in the state of Colorado?",
    q3: "The Colorado river is the ___ longest river in the nation.",
    q4: "How many states does the rivers in Colorado supply water to? ",
    q5: "Which river is closest to Denver?",
    q6: "The Arkansas River is know for?",
    q7: "The Colorado River nickname is? ",

},

var options = {
    q1: [50,78,151,158],
    q2: ["Colorado River", "Green River", "Rio Grande", "Arkansas"],
    q3: ["3rd", "5th", "4th", "2nd"],
    q4: [1,12,9,17],
    q5: ["Arkansas","Rio Grande","South Platte", "Gunnison"],
    q6: ["Fishing", "Whitewater Rafting", "Multitude of minerals", "All the above"],
    q7: ["River of law","River of the Grand Canyone", "River of Environment", "River of the heart"],
 
}

var answers = {
    q1: 158, 
    q2: "Colorado River",
    q3: "5th",
    q4:17,
    q5: "South Platte",
    q6: "All the above",
    q7: "River of law",
   

}

