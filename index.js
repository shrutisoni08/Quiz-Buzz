// FOR LOAD THE DOM
// WAIT FOR THE DOM TO BE FULLY LOADED BEFORE EXECUTING THE CODE.
document.addEventListener("DOMContentLoaded", function () {
//  INITIALIZE THE QUIZ BY LOADING QUESTIONS AND DISPLAYING RESULTS.
  initializeQuiz();
});

//  INITIALIZE THE QUIZ BY LOADING QUESTIONS AND DISPLAYING RESULTS.
function initializeQuiz() {
  loadQuestionsPage();
  displayResult();
}

// RETRIVE USERNAME AND CATEGORY FROM LOCAL STARAGE.
let username = localStorage.getItem("username");
let category = localStorage.getItem("category");

//  IF THERE IS NO USERNAME OR CATEGORY, SHOW ALERT AND REDIRECT TO HOME PAGE.
if (!username || !category) {
  window.location.href = "index.html";
}
// DEFINE THE QUIZ QUESTIONS FOR THREE CATEGORIES.
const questions = {
  // FOR HTML:
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-Level Text Markup Language",
        "Hyper Transfer Markup Language",
        "High-Level Transfer Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question:
        "What is the HTML tag used for that represents an external script?",
      options: ["<script>", "<style>", "</head>", "<title>"],
      correctAnswer: "<script>",
    },
    {
      question:
        "Which of the following tags can be used to create a hyperlink in HTML",
      options: ["<a>", "<img>", "<div>", "<label>"],
      correctAnswer: "<a>",
    },
    {
      question: "How do you add a comment in HTML?",
      options: [
        "Using <-- -->",
        "Using <!-- -->",
        "Using <-- >",
        "None of the above",
      ],
      correctAnswer: "Using <!-- -->",
    },
    {
      question: "How is document type initialized in HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<doctype html>",
        "&lt;!DOCTYPE html &gt;",
        "None Of The Above",
      ],
      correctAnswer: "<!DOCTYPE html>",
    },
    {
      question: "Which of these is not absent in HTML?",
      options: ["Tags", "Source file", "Tracking systems", "Fat links"],
      correctAnswer: "Source file",
    },
    {
      question: "Which of these does not support the earlier release of HTML?",
      options: ["Opera", "Chrome", "Safari", "Edge"],
      correctAnswer: "Safari",
    },
    {
      question: "Which of these refers to HTML 4.0?",
      options: ["Wilbur", "Frameset", "Strict", "HTML Rattle"],
      correctAnswer: "Frameset",
    },
    {
      question: "Which of these is not assoiciated with HTML?",
      options: ["CSS", "JavaScript", "PHP", "Ruby on Rails"],
      correctAnswer: "Ruby on Rails",
    },
    {
      question: "Which of these cannot be manipulated by HTML",
      options: [
        "Site cookies",
        "Browser security",
        "Browser settings",
        "Cookies",
      ],
      correctAnswer: "Browser settings",
    },
  ],
  // FOR CSS:
  CSS: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheet",
        "Computer Style Sheet",
        "Creative Style Sheet",
        "Colorful Style Sheet",
      ],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question:
        "Which of the following is the correct styntax to add the external stylesheet in CSS?",
      options: [
        `<style src = QuizBuzz.css>`,
        `<style src = "QuizBuzz.css">`,
        `<stylesheet>QuizBuzz.css</stylesheet>`,
        `<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css">`,
      ],
      correctAnswer: `<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css">`,
    },
    {
      question:
        "Which of the below CSS properties is used to change the background color of CSS?",
      options: [
        "bg color",
        "color-background",
        "background-color",
        "set color",
      ],
      correctAnswer: "background-color",
    },
    {
      question: "What is the syntax for using font family in CSS?",
      options: ["font(family)", "font-family()", "font_family", "fontFamily()"],
      correctAnswer: "font-family()",
    },
    {
      question:
        "Which element is used to represent the transparency of an element in CSS?",
      options: ["Z-index", "Opacity", "Overflow", "Overlay"],
      correctAnswer: "Opacity",
    },
    {
      question: "How do you select all paragraphs in CSS?",
      options: [
        "p {}",
        ".paragraph {}",
        "#para1, #para2, #para3",
        "*[type=paragraph]",
      ],
      correctAnswer: "p {}",
    },
    {
      question:
        "Which below function in CSS is used to perform the calculation?",
      options: ["cal()", "calculator()", "calc()", "Calculate()"],
      correctAnswer: "calc()",
    },
    {
      question:
        "Which of the below CSS property is used to set the origin of the background image in bootstraps",
      options: [
        "background-image",
        "background-origin",
        "background-size",
        "background-fix",
      ],
      correctAnswer: "background-origin",
    },
    {
      question: "What are units used for length measurement in CSS?",
      options: [
        "px (Pixels)",
        "% (Percentage)",
        "em (Font Units)",
        "cm (Centimeters)",
      ],
      correctAnswer: "cm (Centimeters)",
    },
    {
      question:
        "CSS supports which of the following color representation formats?",
      options: [
        "RGB(0,0,0)",
        "Hex Code #000000",
        "RGBA(0,0,0,0.5)",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
  ],
  // FOR JAVASCRIPT:
  JavaScript: [
    {
      question: "Which operator is used to assign values?",
      options: ["=", "==", "===", "Undefined"],
      correctAnswer: "=",
    },
    {
      question: 'How do you write "Hello World! in an alert box?"',
      options: [
        `alert("Hello World!");`,
        `console.log("Hello World!");`,
        `prompt("Enter your name: ", "John Doe");`,
        `console.log(alert:{Hello world})`,
      ],
      correctAnswer: `alert("Hello World!");`,
    },
    {
      question: "JavaScript file has an extenstion of:",
      options: [".java", ".js", ".javaScript", ".jxml"],
      correctAnswer: ".js",
    },
    {
      question:
        "Which statement connot be used to declare a variable in JavaScript",
      options: ["var", "let", "const", "int"],
      correctAnswer: "int",
    },
    {
      question: "What does JSON stand for",
      options: [
        "Javascript Object Notation",
        "Java Object Notation",
        "JavaScript Only Notation",
        "JavaScript Online Notation",
      ],
      correctAnswer: "Javascript Object Notation",
    },
    {
      question: 'What is the value of x? var x = typeof "abc"',
      options: ["string", "x = Abc", "abc", "Undefined"],
      correctAnswer: "string",
    },
    {
      question: "To convert string to number, which function do we use?",
      options: ["parseNumber()", "ParseDouble()", "ParseValue()", "parseInt()"],
      correctAnswer: "parseInt()",
    },
    {
      question: "Which of these is not a logical operator",
      options: ["!", "||", "&", "&&"],
      correctAnswer: "&",
    },
    {
      question: "What is the output of console.log(3 > 5) ?",
      options: ["true", "false", "undefined", "null"],
      correctAnswer: "false",
    },
    {
      question: "How to declare a string variable",
      options: [
         'String x = "Hello World"',
         'new "String" = Hello World',
         'let x = "Hello World"',
         'x = "Hello World"',
      ],
      correctAnswer: 'let x = "Hello World"',
    },
  ],
};

// INITIALIZE QUIZ VARIABLES
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// START THE QUIZ 
// REDIRECT THE USER TO questions.html PAGE.
function startQuiz(selectedCategory) {
  console.log("Start quiz clicked for category:", selectedCategory);
  username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Please enter your name to start the quiz.");
    return;
  }

  category = selectedCategory;
  localStorage.setItem("username", username);
  localStorage.setItem("category", category);
  window.location.href = "questions.html"; 
  loadQuestionsPage();
}

// LOAD THE QUESTION PAGE AND DISPLAY THE CURRENT QUESTION ON questions.html PAGE.
function loadQuestionsPage() {
  const categoryTitleElement = document.getElementById("category-title");

  if (categoryTitleElement) {
    categoryTitleElement.innerText = category;
    displayQuestion();
  } else {
    console.error("Element with ID 'category-title' not found.");
  }
}

// DISPLAY THE CURRENT QUESTIONS AND OPTIONS ON questions.html PAGE.
function displayQuestion() {
  const currentQuestion = getCurrentQuestion();
  const printQuestionElement = document.getElementById("printQuestion");
  const optionsContainer = document.getElementById("optionsContainer");

  printQuestionElement.innerText = currentQuestion.question;

  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("options");
    optionButton.onclick = () => checkAnswer(optionButton);
    optionsContainer.appendChild(optionButton);
  });

  resetTimer();
  startTimer();
}

// CHECK THE ANSWER OF USER CLICKING AN OPTION BUTTON
function checkAnswer(button) {
  if (button.disabled) {
    // Return if the button is already disabled (preventing multiple clicks)
    return;
  }

  const selectedAnswer = button.innerText.trim().toLowerCase();
  const currentQuestion = getCurrentQuestion();
  const correctAnswer = currentQuestion.correctAnswer.toLowerCase();

  if (selectedAnswer === correctAnswer) {
    score++; // Increment by the index of the current question
    console.log("Score updated:", score);
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }

  const correctButton = Array.from(
    document.getElementsByClassName("options")
  ).find((btn) => btn.innerText.trim().toLowerCase() === correctAnswer);

  if (correctButton) {
    correctButton.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }

  disableOptionsExceptSelected(button);
  clearInterval(timerInterval);

  document.getElementById("nextBtn").disabled = false;
  button.disabled = true; // Disable the selected button
  updateScore();
}
// UPDATING AND DISPLAY THE SCORE WHEN USER SELECTS THE CORRECT ANSWER
function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `${score} / 10`;
}

// DISABLE ALL THE OPTIONS EXCEPT THE SELECTED ONE.
function disableOptionsExceptSelected(selectedButton) {
  const optionButtons = document.getElementsByClassName("options");
  for (let i = 0; i < optionButtons.length; i++) {
    if (optionButtons[i] !== selectedButton) {
      optionButtons[i].disabled = true;
    }
  }
}
// RETRIVE THE CURRENT QUESTION FROM THE QUESTIONS OBJECT.
function getCurrentQuestion() {
  const currentCategoryQuestions = questions[category];
  return currentCategoryQuestions[currentQuestionIndex];
}
// ENABLE ALL ANSWER OPTIONS.
function enableOptions() {
  const optionButtons = document.getElementsByClassName("options");
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = false;
  }
}

// RESET ALL THE QUIZ ELEMENT AND QUIZ VARIABLES
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("username").value = "";
  document.getElementById("category-title").innerText = "";
  document.getElementById("printQuestion").innerText = "";
  document.getElementById("optionsContainer").innerHTML = "";  
  clearInterval(timerInterval);
  updateScore();
}

// START THE TIMER COUNTDOWN
function startTimer() {
  const timerElement = document.getElementById("timer");
  let seconds = 15;
  timerElement.innerText = seconds;

  timerInterval = setInterval(function () {
    seconds--;
    timerElement.innerText = seconds;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      enableOptions();
      document.getElementById("nextBtn").disabled = false;
      // Add the logic to move to the next question without counting as a right answer
      currentQuestionIndex++;
      if (currentQuestionIndex < 10) {
        displayQuestion();
        resetTimer(); // Reset the timer for the new question
      } else {
        alert(`Quiz completed!\nYour score: ${score}/10`);
        resetQuiz();
      }
    }
  }, 1000);
}

// RESET THE TIMER TO ITS DEFAULT VALUE OF 15 SECONDS
function resetTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = "15";
}
// PROCEED TO THE NEXT QUESTION WHEN THE USER CLICKS ON 'NEXT' BUTTON OR FINISH THE QUIZ.
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    enableOptions();
    displayQuestion();
    resetTimer(); // Reset the timer for the new question
  } else {
    clearInterval(timerInterval); // Clear the timer interval
    localStorage.setItem("score", score); // Save the score to local storage
    window.location.href = "result.html"; // Redirect to result.html
  }
}
// DISPLAY THE QUIZ RESULT ON THE result.html PAGE
function displayResult() {
  const resultElement = document.getElementById("username");
  const totalScoreElement = document.getElementById("total_score");
  const rightAnswerElement = document.getElementById("right_answer");
  const wrongAnswerElement = document.getElementById("wrong_answer");
  const totalPercentElement = document.getElementById("total_percent");

  const username = localStorage.getItem("username");
  const score = localStorage.getItem("score");

  const totalQuestions = 10; // Assuming there are 10 questions in each quiz

  resultElement.innerText = username;
  totalScoreElement.innerText = `${score} / ${totalQuestions}`;
  rightAnswerElement.innerText = score;
  wrongAnswerElement.innerText = totalQuestions - score;
  totalPercentElement.innerText = `${((score / totalQuestions) * 100).toFixed(2)}%`;
}

// REDIRESCT TO THE HOME PAGE
function goToHomePage(){
  window.location.href="index.html"
}
// RESTART THE QUIZ BY REDIRESCT TO THE HOME PAGE
function restartTheQuiz(){
  window.location.href="index.html"
}
