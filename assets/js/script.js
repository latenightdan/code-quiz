const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("questions");
const answerButtonsEl = document.getElementById("answer-buttons");


var score = [];



startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {

    
}

)

const questionObj = [

    {
        question: "Do you want to know what the matrix is?",
        answers: [
            { text: "Yes", correct: true},
            { text: "No", correct: false },
            { text: "Maybe?", correct: false },
            { text: "Yes, but if I don't like it, I will want to go back to the matrix", correct: false}
        ],
        question: "evvaetrix is?",
        answers: [
            { text: "Yes", correct: true},
            { text: "No", correct: false },
            { text: "Maybe?", correct: false },
            { text: "Yes, but if I don't like it, I will want to go back to the matrix", correct: false}
        ],
        question: "Do you want to know what the matrix is?",
        answers: [
            { text: "Yes", correct: true},
            { text: "Nevw", correct: false },
            { text: "Maev?", correct: false },
            { text: "Yesveant to go back to the matrix", correct: false}
        ],
    }



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
    reset();
    nextButton.classList.remove("hide");
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
if(answer.correct){
    button.dataset.correct = answer.correct
}
        button.addEventListener('click', showAnswer);
        answerButtonsEl.appendChild(button);
    })

    //stuck around here
}

function showAnswer(e) {
const selectedButton = e.target;
correct = selectedButton.dataset.correct;
rightOrWrong(document.body, correct);
Array.from(answerButtonsEl.children).forEach(button => {
    rightOrWrong(button, button.dataset.correct); 
})

}

function rightOrWrong(element, correct) {
    clearRightOrWrong(element)
    if(correct){
        element.classList.add('correct');
        console.log(score)
score++;
    }
    else{
        element.classList.add('wrong');
    }
}

function clearRightOrWrong(element){
    element.classList.remove('correct');
element.classList.remove("wrong");
}


function reset() {




    // nextButton.classList.add('hide');
    while (answerButtonsEl.firstElementChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }

}






//     answers.forEach(answer => {
        
//         buttonCheck = question.innerText.correct;
//         if(buttonCheck = true)
//         {
//             console.log("dgvagd");
//         }
//         else{
//             console.log("dgdg");
//         }
//  })
  
    //shows correct result
    //if right, success, if wrong fail, and detract time


function correctCheck() {

}

submitButton.addEventListener("click", showAnswer);

// funciton nextQuestion(){
//     console.log(questionIndex)questionIndex++
//     if(quizQuestions <= lastQuestion)
//     questionEl.innerHTML = '
//     <div class ="question">  ${questionObj[questionIndex].question} </div>'
// }
// function something(event){
//     if (event.target.matches(".answers") ){

    
// if(event.target.textContent === questionObj[question].correctAnswer){
// //something
// alertEl.textContent = ("Correct")
// nextQuestion();
// }
// else{

// }
// }
// }