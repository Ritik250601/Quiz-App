const quizdb = [
    {
        question: "Q1: Which of the following is not present in animal cells?",
        a: "Cell Walls",
        b: "Cytoplasm",
        c: "Mitochondria",
        d: "Ribosomes",
        ans: "ans1"
    },
    {
        question: "Q2: Which airline is currently headed by Ashwani Lohani??",
        a: "Indigo",
        b: "Spice Jet",
        c: "Air India",
        d: "Visatara",
        ans: "ans3"
    },
    {
        question: "Q3: The name of S Vijayalakshmi is famous in which among the following games / sports?",
        a: "Badminton",
        b:"table Tennis",
        c: "Chess",
        d: "Hockey",
        ans: "ans3"
    },
    {
        question: "Q4: what is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "HyperText Transister Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q5: Which country recently launched a driver-less bullet train with the speed up to 350 km/h?",
        a: "Russia",
        b: "China",
        c: "Singapore",
        d: "USA",
        ans: "ans2"
    },
    {
        question: "Q6: Who will participate in the interaction program with students named ‘Pariksha Pe Charcha’ scheduled for the year 2020?",
        a: "Venkiah Naidu",
        b: "Narendra Modi",
        c: "Ramesh Pokriyal Nishank",
        d: "K Sivan",
        ans: "ans2"
    },
    {
        question: "Q7: When is the International Day of Education observed every year ?",
        a: "January 21",
        b: "January 24",
        c: "February 21",
        d: "February 24",
        ans: "ans2"
    },
    {
        question: 'Q8: Which of the following Indian Sports Team is also known as “The Bhangra Boys?"',
        a:"Cricket Team",
        b:"Hockey Team",
        c:"Kabaddi Team",
        d:"Football Team",
        ans: "ans4"
    },
    {
        question: "Q9: Microsoft first introduced an operating environment named Windows in which year? ",
        a:1986,
        b:1987,
        c:1985,
        d:1988,
        ans:"ans3"
       
    },
    {
        question: "Q10: V-RAM is used for access of the following?",
        a:"Video & Graphics",
        b:"Text & Images",
        c:"programs",
        d:"None of the above",
        ans: "ans1"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer")
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizdb[questionCount]
    question.innerHTML = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem => curAnsElem.checked = false));
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizdb[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();
    if (questionCount < quizdb.length) {
        loadQuestion()
    }
    else {
        showScore.innerHTML = `<h3> Your scored 👌👏${score}/${quizdb.length}</h3>
        <button class="btn" onclick ="location.reload()">Play Again</button>`;
        showScore.classList.remove(".scoreArea");
    }
});
