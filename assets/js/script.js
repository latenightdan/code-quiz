//steps
// const answerEl = document.getElementById("answer");
const startEl = document.getElementById("start");


questionHolder = [{
    question: "eorgiohegr",
    answers: {
        a: "erg",
        b: "adgaefb",
        c: "awdsgrg",
        d: "awgagr",
        correctAnswer: "b"
    }
}];


//make button clicks work input value to somewhere...localstorage?
//generate answers
//
var correctAnswers=0;


// answerEl.addEventListener("click", checkCorrect);
startEl.addEventListener("click", startGame);

function checkCorrect(){
}

function startGame(event){
    event.preventDefault();
q = document.getElementById("theQU");
q.textContent = "phuc";
const butt = document.getElementById("uggh");
const gunk = document.createElement("button");
gunk.textContent = "punk";
butt.appendChild(gunk);
// answerr.setAttribute()

}
