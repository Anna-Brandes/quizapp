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

let currentQuestion = 0;

function init (){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}