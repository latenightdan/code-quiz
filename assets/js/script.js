// //steps
// // const answerEl = document.getElementById("answer");
// const startEl = document.getElementById("start");

// const questionEl = document.getElementById("theQU");
// const questionnn = document.getElementById("questions-holderr");
// var questionHolder = [
//     {
//         question: "eorgiohegr",
//         answers: {
//             a: "erg",
//             a: "adgaefb",
//             a: "awdsgrg",
//             a: "awgagr"

//         },
//         correctAnswer: "b"
//     },

//     {
//         question: "eorgiohegr",
//         answers: {
//             a: "erg",
//             b: "adgaefb",
//             c: "awdsgrg",
//             d: "awgagr"

//         },
//         correctAnswer: "b"
//     }
//     ];


// //make button clicks work input value to somewhere...localstorage?
// //generate answers
// //
// var correctAnswers = 0;


// // answerEl.addEventListener("click", checkCorrect);
// startEl.addEventListener("click", startGame);

// function checkCorrect() {
// }

// // function showQ(){

// //     for (var x = 0; x < questionHolder.length; x++) 
// //     {


// //     }
// // }



// function startGame(event) {
//     event.preventDefault();

// // showQ();
//     // questionEl.textContent = questionHolder.question;

//     for (var i = 0; i < questionHolder.length; i++) {
//         var q = document.getElementById('questions-holderr');
//         q.textContent = questionHolder.question[0];
//         for (let letter in questionHolder[i].answers) {
//             // questionnn.innerText = questionHolder.question;
//             const butt = document.getElementById("uggh");
//             let gunk = document.createElement("button");
//             gunk.textContent = questionHolder[i].answers[letter];

//             butt.appendChild(gunk);
//         }

//     }


//          //THIS WORKS, BUT CANCELS ANSWERS
//     // let gunk = document.createElement("button");

//     // gunk.textContent = answers.a;
//     // butt.appendChild(gunk);
// }



//primitive data types strings floats bools. undefined
//reference: what the web sees

//arrays index based.
//strings override everything

var data = [
    {
        question: "what?",
        choices: ["yes", "no", "maybe", "yes2"],
        answer: "no"
    },
    {
        question: "what is?",
        choices: ["yes", "no", "maybe", "yes2"],
        answer: "yes"
    },
    {
        question: "what iss your?",
        choices: ["yes", "no", "maybe", "yes2"],
        answer: "nrrrr"
    },
    {
        question: "what is your name?",
        choices: ["yes", "no", "maybe", "yes2"],
        answer: "ttttt"
    }

];
// console.log(data[3].question);
const answerEl = document.getElementById("answer");



for (var i = 0; i < data.length; i++) {
const btn = document.createElement("button");
btn.setAttribute("class", "btn-primary");
btn.innerHTML =   data[i].choices[i];
answerEl.appendChild(btn);
btn.addEventListener("click", buttonPress);

};
function buttonPress(event){

    // console.log(data[1].answer)
if(event.target.textContent === data[1].answer){
    console.log("right");
}
else{
    console.log("wrong");
}
}


//mdn for for each mozilla developer