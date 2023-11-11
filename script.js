let questions = [
    {
        "question" : "Wer hat HTML erfunden?",
        "answer_1" : "Robbie Williams",
        "answer_2" : "Lady Gaga",
        "answer_3" : "Tim Berners-Lee",
        "answer_4" : "justin Bieber",
        "right_answer" : 3
    },

    {
        "question" : "Was ist eine Pneumonie?",
        "answer_1" : "Ein Schiff",
        "answer_2" : "Eine Lungenentzündung",
        "answer_3" : "Eine Pumpe",
        "answer_4" : "Eine Stadt",
        "right_answer" : 2
    },

    {
        "question" : "Wieviele Werktage gibt es in Deutschland?",
        "answer_1" : "5",
        "answer_2" : "7",
        "answer_3" : "4",
        "answer_4" : "6",
        "right_answer" : 4 
    },

    {
        "question" : "Wie kommunizeren Hunde vorwiegend?",
        "answer_1" : "Körpersprachlich",
        "answer_2" : "durch Bellen/knurren",
        "answer_3" : "Schwanzwedeln",
        "answer_4" : "garnicht",
        "right_answer" : 1   
    },

    {
        "question" : "Das flächenmäßig kleinste Bundesland heißt?",
        "answer_1" : "Hamburg",
        "answer_2" : "Berlin",
        "answer_3" : "Bremen",
        "answer_4" : "Niedersachsen",
        "right_answer" : 3
    }
];

let rightAnswers = 0;

let currentQuestion = 0;

let audioFalse = new Audio('audio/false.mp3');
let audioRight = new Audio('audio/right.mp3');

function init (){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
 

    if(gameIsOver()){
       showEndScreen();
    }
    else{
    updateProgressBar();
    updateToNextQuestion();
    }
}
function gameIsOver(){
   return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('quizBody').style = 'display: none';
    document.getElementById('totalAnswers').innerHTML = questions.length;
    document.getElementById('rightQuestions').innerHTML = rightAnswers;
    document.getElementById('headerImg').src = 'img/win.png';
    document.getElementById('headerImg').classList.remove('image');

}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questionNumber').innerHTML = currentQuestion +1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar(){
    let percent = (currentQuestion +1)/ questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function answer(selection) {
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');  
        audioRight.play();
        rightAnswers++;

    }

    else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    audioFalse.play();
    }
    document.getElementById('nextButton').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion(){
    currentQuestion++;
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    resetAnswerButton();

}


function resetAnswerButton(){

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('headerImg').src = 'img/question-mark.jpg';
    document.getElementById('headerImg').classList.add('image');
    document.getElementById('quizBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    rightAnswers = 0;
    currentQuestion = 0;
    init();
}

