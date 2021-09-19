const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("questions");
const answerButtonsEl = document.getElementById("answer-buttons");


startButton.addEventListener('click', startQuiz);

const questionObj = [
    // {
    //     question: "what is the matrix?",
    //     answers: {
    //         a: "A system of control",
    //         b: "A prison that you cannot smell, or taste, or touch",
    //         c: "A prison for your mind",
    //         d: "all of the above"
    //     },
    //     correcAnswer: "d"
    // },
    {
        question: "Do you want to know what the matrix is?",
        answers: [
            {text: "Yes", correct: true},
            { text: "No", correct: false},
            { text: "Maybe?", correct: false},
            {text: "Yes, but if I don't like it, I will want to go back to the matrix", correct: false}
        ],
        correcAnswer: "c"
    }
    // {
    //     question: "What is the red pill?",
    //     answers: {
    //         a: "A metaphor for rejecting capitalism, patriarchy, gender constructs, oppression, and other post-modern ideas",
    //         b: "What you take if you are a fascist misogynist on reddit or 4chan",
    //         c: "A symbol that has lost it's way in pop-culture",
    //         d: "All of the above"
    //     },
    //     correcAnswer: "d"
    // }


];

// let randomQ, currentQ //delete later


function startQuiz() {
    startButton.classList.add('hide');
    
    // randomQ = questionObj.sort(() => Math.random() - .5); //delete later
    // currentQ = 0; //delete later
    questionContainerEl.classList.remove("hide");
    addQuestions();
}


function addQuestions() {
    showQuestion(questionObj[0]);
    
}

function showQuestion(question) {
    resetState();
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', showAnswer);
        answerButtonsEl.appendChild(button);
    })
  
    //stuck around here
}

function resetState(){
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstElementChild){
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);

    }
}



function showAnswer(event) {
const slectedButton = event.target;
const correct = selectedButton.dataset.correct;
setStatusClass(document.body, correct)
Array.from(answerButtonsEl.children).foreach(button => {
    setstatu
})

    //shows correct result
    //if right, success, if wrong fail, and detract time
}



submitButton.addEventListener("click", showAnswer);
