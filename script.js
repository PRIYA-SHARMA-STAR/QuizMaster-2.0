
/* ==========================================
   QUIZMASTER 2.0 — COSMIC NEON EDITION
   Phase 3: Quiz Engine
========================================== */

// 1. QUESTION BANK
// Each question contains options, the correct answer,
// and an explanation to help the user learn.

const questionBank = {
    html: {
        easy: [
            {
                question: "What does HTML stand for?",
                options: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "Hyper Transfer Main Language",
                    "Home Tool Markup Language"
                ],
                answer: 0,
                explanation: "HTML stands for HyperText Markup Language. It structures content on web pages."
            },
            {
                question: "Which tag creates the largest standard heading?",
                options: ["<heading>", "<h6>", "<h1>", "<head>"],
                answer: 2,
                explanation: "The <h1> tag represents the highest-level heading in HTML."
            },
            {
                question: "Which tag creates a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: 1,
                explanation: "The <a> (anchor) tag creates hyperlinks. Its href attribute specifies the destination."
            },
            {
                question: "Which tag inserts an image?",
                options: ["<picture-src>", "<image>", "<img>", "<media>"],
                answer: 2,
                explanation: "The <img> element embeds an image. The src attribute specifies the image location."
            },
            {
                question: "Which element contains visible page content?",
                options: ["<meta>", "<title>", "<head>", "<body>"],
                answer: 3,
                explanation: "The <body> element contains the main content displayed on a web page."
            }
        ],

        medium: [
            {
                question: "Which attribute provides alternative text for an image?",
                options: ["title", "alt", "description", "caption"],
                answer: 1,
                explanation: "The alt attribute provides a text alternative for an image, improving accessibility."
            },
            {
                question: "Which HTML element is used for an unordered list?",
                options: ["<ol>", "<li>", "<ul>", "<list>"],
                answer: 2,
                explanation: "The <ul> element creates an unordered list. Each item is generally placed inside an <li> element."
            },
            {
                question: "Which attribute uniquely identifies an HTML element?",
                options: ["class", "name", "id", "style"],
                answer: 2,
                explanation: "An id identifies a specific element and should be unique within the document."
            },
            {
                question: "Which element is commonly used to collect user input?",
                options: ["<form>", "<section>", "<aside>", "<footer>"],
                answer: 0,
                explanation: "The <form> element groups controls used to collect and submit user input."
            },
            {
                question: "Which input type is designed for email addresses?",
                options: ["type='text'", "type='mailbox'", "type='email'", "type='address'"],
                answer: 2,
                explanation: "The email input type provides built-in validation for the general format of email addresses."
            }
        ],

        hard: [
            {
                question: "Which attribute connects a label to a form control by its id?",
                options: ["for", "target", "connect", "control"],
                answer: 0,
                explanation: "The label's for attribute should match the id of its associated form control."
            },
            {
                question: "Which attribute makes a form control mandatory?",
                options: ["validate", "required", "mandatory", "must-fill"],
                answer: 1,
                explanation: "The required attribute indicates that a value must be supplied before the form can be submitted."
            },
            {
                question: "Which element represents navigation links?",
                options: ["<navigate>", "<links>", "<nav>", "<menu-link>"],
                answer: 2,
                explanation: "The semantic <nav> element identifies a section containing major navigation links."
            },
            {
                question: "What is the purpose of the defer attribute on a classic external script?",
                options: [
                    "It removes JavaScript from the page",
                    "It runs the script before HTML parsing",
                    "It delays execution until after HTML parsing",
                    "It converts JavaScript into CSS"
                ],
                answer: 2,
                explanation: "A deferred classic script downloads while HTML is parsed and executes after parsing finishes, before DOMContentLoaded."
            },
            {
                question: "Which attribute helps a browser adapt a page to a device's viewport?",
                options: ["charset", "viewport", "media-type", "responsive"],
                answer: 1,
                explanation: "The viewport meta tag helps control the page's layout viewport, which is important for responsive design."
            }
        ]
    },

    css: {
        easy: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Styled Sections",
                    "Colorful Style Syntax"
                ],
                answer: 1,
                explanation: "CSS stands for Cascading Style Sheets and controls the presentation of web pages."
            },
            {
                question: "Which property changes text color?",
                options: ["font-color", "text-style", "color", "foreground"],
                answer: 2,
                explanation: "The color property sets the foreground color of text."
            },
            {
                question: "Which selector targets an element with id='header'?",
                options: [".header", "#header", "*header", "header#"],
                answer: 1,
                explanation: "The # symbol selects an element by its id."
            },
            {
                question: "Which property changes the background color?",
                options: ["background-color", "bgcolor", "color-background", "background-style"],
                answer: 0,
                explanation: "The background-color property sets an element's background color."
            },
            {
                question: "Which property adds space inside an element's border?",
                options: ["margin", "outline", "padding", "spacing"],
                answer: 2,
                explanation: "Padding creates space between an element's content and its border."
            }
        ],

        medium: [
            {
                question: "Which layout system is designed for one-dimensional arrangements?",
                options: ["Flexbox", "Float only", "Position fixed", "Text transform"],
                answer: 0,
                explanation: "Flexbox is especially useful for arranging items along one row or one column."
            },
            {
                question: "Which selector targets elements with class='card'?",
                options: ["#card", ".card", "card()", "@card"],
                answer: 1,
                explanation: "A period followed by a name selects elements belonging to that class."
            },
            {
                question: "What does box-sizing: border-box do?",
                options: [
                    "Hides the border",
                    "Includes padding and border in the declared dimensions",
                    "Adds a second border",
                    "Removes all padding"
                ],
                answer: 1,
                explanation: "With border-box, the declared width and height include the content, padding, and border."
            },
            {
                question: "Which property controls the space between grid tracks?",
                options: ["spacing", "track-space", "gap", "grid-margin"],
                answer: 2,
                explanation: "The gap property sets spacing between rows and columns in grid and flex layouts."
            },
            {
                question: "Which pseudo-class applies while a pointer is over an element?",
                options: [":focus", ":visited", ":hover", "::before"],
                answer: 2,
                explanation: "The :hover pseudo-class matches an element while the pointer hovers over it."
            }
        ],

        hard: [
            {
                question: "Which selector generally has the highest specificity?",
                options: [
                    "A class selector",
                    "An ID selector",
                    "An element selector",
                    "A universal selector"
                ],
                answer: 1,
                explanation: "An ID selector generally has greater specificity than a class or element selector. Inline styles and !important declarations have additional cascade considerations."
            },
            {
                question: "Which declaration creates a two-column grid with equal flexible widths?",
                options: [
                    "grid-template-columns: 1fr 1fr;",
                    "grid-columns: 2;",
                    "display: columns;",
                    "grid-template: equal;"
                ],
                answer: 0,
                explanation: "Two 1fr tracks divide the available grid space into equal flexible columns."
            },
            {
                question: "Which position value places an element relative to the viewport?",
                options: ["static", "relative", "fixed", "inherit"],
                answer: 2,
                explanation: "position: fixed positions an element relative to its containing viewport in the usual case."
            },
            {
                question: "What does minmax(200px, 1fr) mean in CSS Grid?",
                options: [
                    "The track is always 200px",
                    "The track can shrink below 200px",
                    "The track has a minimum of 200px and a flexible maximum",
                    "The track is twice the width of the container"
                ],
                answer: 2,
                explanation: "minmax() defines a minimum and maximum track size. Here, the track has a 200px minimum and a flexible 1fr maximum."
            },
            {
                question: "Which rule applies styles based on a viewport condition?",
                options: ["@font-face", "@keyframes", "@media", "@import-style"],
                answer: 2,
                explanation: "Media queries use @media to apply CSS when conditions, such as viewport width, are satisfied."
            }
        ]
    },

    javascript: {
        easy: [
            {
                question: "Which keyword declares a block-scoped variable that can be reassigned?",
                options: ["const", "let", "fixed", "define"],
                answer: 1,
                explanation: "let declares a block-scoped variable whose binding can be reassigned."
            },
            {
                question: "Which operator tests strict equality?",
                options: ["=", "==", "===", "!="],
                answer: 2,
                explanation: "The === operator compares values without performing type coercion."
            },
            {
                question: "Which method displays a message in the browser console?",
                options: ["console.log()", "print.page()", "browser.write()", "message()"],
                answer: 0,
                explanation: "console.log() writes a message to the browser's developer console."
            },
            {
                question: "Which brackets create an array literal?",
                options: ["{}", "()", "[]", "<>"],
                answer: 2,
                explanation: "Square brackets create an array literal, such as [1, 2, 3]."
            },
            {
                question: "Which keyword is used to define a function?",
                options: ["method", "function", "funclet", "def"],
                answer: 1,
                explanation: "The function keyword can declare a function in JavaScript."
            }
        ],

        medium: [
            {
                question: "Which array method creates a new array by transforming each element?",
                options: ["forEach()", "map()", "find()", "pop()"],
                answer: 1,
                explanation: "map() calls a callback for each element and returns a new array containing the callback results."
            },
            {
                question: "What does addEventListener() do?",
                options: [
                    "Adds an event handler",
                    "Creates a CSS class",
                    "Deletes an HTML element",
                    "Stops the browser"
                ],
                answer: 0,
                explanation: "addEventListener() registers a function to run when a specified event occurs."
            },
            {
                question: "What does JSON.parse() do?",
                options: [
                    "Converts an object to JSON text",
                    "Parses JSON text into a JavaScript value",
                    "Creates a new array only",
                    "Formats HTML"
                ],
                answer: 1,
                explanation: "JSON.parse() parses valid JSON text and returns the corresponding JavaScript value."
            },
            {
                question: "Which statement skips the remaining iterations of the current loop iteration?",
                options: ["break", "return", "continue", "exit"],
                answer: 2,
                explanation: "continue skips the remainder of the current iteration and proceeds to the next iteration."
            },
            {
                question: "What is the result of typeof 'hello'?",
                options: ["text", "string", "character", "object"],
                answer: 1,
                explanation: "typeof returns the string 'string' for a string value."
            }
        ],

        hard: [
            {
                question: "What does a Promise represent?",
                options: [
                    "A CSS animation",
                    "A value that may become available in the future",
                    "A synchronous loop",
                    "A special HTML element"
                ],
                answer: 1,
                explanation: "A Promise represents the eventual completion or failure of an asynchronous operation."
            },
            {
                question: "What does the spread syntax do in [...array]?",
                options: [
                    "Deletes the array",
                    "Expands iterable elements into a new array literal",
                    "Sorts the array automatically",
                    "Makes the array immutable"
                ],
                answer: 1,
                explanation: "The spread syntax expands an iterable's elements. In this example, it creates a shallow array copy."
            },
            {
                question: "What is a closure in JavaScript?",
                options: [
                    "A loop that never ends",
                    "A function combined with access to its lexical environment",
                    "A method that closes a tab",
                    "A CSS selector"
                ],
                answer: 1,
                explanation: "A closure lets a function access variables from its surrounding lexical scope, even after that outer function has returned."
            },
            {
                question: "What does await do inside an async function?",
                options: [
                    "Pauses the entire browser",
                    "Waits for a Promise's settlement before continuing that async function",
                    "Turns off asynchronous code",
                    "Automatically retries every error"
                ],
                answer: 1,
                explanation: "await suspends the surrounding async function until the awaited value settles, then evaluates to its fulfillment value or throws its rejection."
            },
            {
                question: "Which method converts a JavaScript value to JSON text?",
                options: [
                    "JSON.parse()",
                    "JSON.stringify()",
                    "JSON.convert()",
                    "JSON.encodeHTML()"
                ],
                answer: 1,
                explanation: "JSON.stringify() serializes a JavaScript value into a JSON string when the value is serializable."
            }
        ]
    }
};


// 2. DOM ELEMENTS

const homeScreen = document.getElementById("home-screen");
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const backHomeBtn = document.getElementById("back-home-btn");
const beginQuizBtn = document.getElementById("begin-quiz-btn");
const quitQuizBtn = document.getElementById("quit-quiz-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");

const questionElement = document.getElementById("question");
const questionHint = document.getElementById("question-hint");
const questionNumber = document.getElementById("question-number");
const answerButtons = document.getElementById("answer-buttons");
const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const timerElement = document.getElementById("timer");
const feedbackElement = document.getElementById("feedback");
const liveScoreElement = document.getElementById("live-score");

const quizCategoryLabel = document.getElementById("quiz-category-label");
const quizDifficultyLabel = document.getElementById("quiz-difficulty-label");

const finalScoreElement = document.getElementById("final-score");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultSummary = document.getElementById("result-summary");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");
const timeLeftResult = document.getElementById("time-left-result");
const answerReview = document.getElementById("answer-review");

const totalQuestionsStat = document.getElementById("total-questions-stat");
const bestScoreStat = document.getElementById("best-score-stat");
const quizzesCompletedStat = document.getElementById("quizzes-completed-stat");
const averageScoreStat = document.getElementById("average-score-stat");
const bestStreakStat = document.getElementById("best-streak-stat");
const achievementCount = document.getElementById("achievement-count");
const achievementList = document.getElementById("achievement-list");
const recentAttempts = document.getElementById("recent-attempts");
const currentStreakDisplay = document.getElementById("current-streak-display");
const resultAchievementList = document.getElementById("result-achievement-list");


// 3. GAME STATE

const state = {
    category: "html",
    difficulty: "easy",
    questions: [],
    currentIndex: 0,
    score: 0,
    timeLeft: 20,
    totalTimeLeft: 0,
    timerId: null,
    answered: false,
    history: [],
    lastPercentage: 0,
    currentStreak: 0,
    bestStreak: 0
};

const TIME_LIMITS = {
    easy: 20,
    medium: 15,
    hard: 12
};

const LETTERS = ["A", "B", "C", "D"];


// 4. SCREEN NAVIGATION

function showScreen(screenToShow) {
    [homeScreen, setupScreen, quizScreen, resultsScreen].forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openSetup(category = state.category) {
    state.category = category;

    updateSelectedChoices();

    showScreen(setupScreen);
}

function goHome() {
    stopTimer();
    updateDashboardStats();
    showScreen(homeScreen);
}


// 5. CATEGORY AND DIFFICULTY SELECTION

function updateSelectedChoices() {
    document.querySelectorAll("[data-category]").forEach(button => {
        const isSelected = button.dataset.category === state.category;

        // Category cards on the dashboard don't use the selected style.
        if (button.classList.contains("choice-btn")) {
            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        }
    });

    document.querySelectorAll("[data-difficulty]").forEach(button => {
        const isSelected = button.dataset.difficulty === state.difficulty;

        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        openSetup(button.dataset.category);
    });
});

document.querySelectorAll("#category-options [data-category]").forEach(button => {
    button.addEventListener("click", () => {
        state.category = button.dataset.category;
        updateSelectedChoices();
    });
});

document.querySelectorAll("[data-difficulty]").forEach(button => {
    button.addEventListener("click", () => {
        state.difficulty = button.dataset.difficulty;
        updateSelectedChoices();
    });
});


// 6. START THE QUIZ

function startQuiz() {
    stopTimer();

    const selectedQuestions =
        questionBank[state.category]?.[state.difficulty];

    if (!selectedQuestions || selectedQuestions.length === 0) {
        alert("No questions are available for this selection yet.");
        return;
    }

    // Copy and shuffle the questions so each attempt can feel different.
    state.questions = shuffleArray([...selectedQuestions]);

    state.currentIndex = 0;
    state.score = 0;
    state.timeLeft = TIME_LIMITS[state.difficulty];
    state.totalTimeLeft = 0;
    state.answered = false;
    state.history = [];
    state.lastPercentage = 0;
    state.currentStreak = 0;
    state.bestStreak = 0;
    updateStreakDisplay();

    quizCategoryLabel.textContent = state.category.toUpperCase();
    quizDifficultyLabel.textContent = state.difficulty.toUpperCase();

    liveScoreElement.textContent = "0";

    showScreen(quizScreen);
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


// 7. DISPLAY A QUESTION

function showQuestion() {
    stopTimer();

    state.answered = false;

    const currentQuestion = state.questions[state.currentIndex];
    const questionNumberValue = state.currentIndex + 1;
    const totalQuestions = state.questions.length;
    const percentage = Math.round(
        (questionNumberValue / totalQuestions) * 100
    );

    questionNumber.textContent =
        `QUESTION ${String(questionNumberValue).padStart(2, "0")}`;

    questionElement.textContent = currentQuestion.question;
    questionHint.textContent = "Choose the best answer to continue.";

    questionCounter.textContent =
        `QUESTION ${String(questionNumberValue).padStart(2, "0")} / ${String(totalQuestions).padStart(2, "0")}`;

    progressPercent.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;

    answerButtons.replaceChildren();

    feedbackElement.textContent = "";
    feedbackElement.className = "feedback hidden";

    nextBtn.disabled = true;
    nextBtn.innerHTML =
        state.currentIndex === totalQuestions - 1
            ? "View Results <span>→</span>"
            : "Next Question <span>→</span>";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = LETTERS[index];

        const answerText = document.createElement("span");
        answerText.textContent = option;

        button.append(letter, answerText);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerButtons.appendChild(button);
    });

    startTimer();
}


// 8. COUNTDOWN TIMER

function startTimer() {
    stopTimer();

    state.timeLeft = TIME_LIMITS[state.difficulty];
    updateTimerDisplay();

    state.timerId = window.setInterval(() => {
        state.timeLeft -= 1;

        updateTimerDisplay();

        if (state.timeLeft <= 0) {
            stopTimer();
            handleTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerId !== null) {
        window.clearInterval(state.timerId);
        state.timerId = null;
    }
}

function updateTimerDisplay() {
    timerElement.textContent = state.timeLeft;

    const timerPill = timerElement.closest(".timer-pill");

    if (timerPill) {
        timerPill.classList.toggle(
            "timer-warning",
            state.timeLeft <= 5
        );
    }
}


// 9. HANDLE AN ANSWER

function selectAnswer(selectedIndex) {
    if (state.answered) {
        return;
    }

    state.answered = true;
    stopTimer();

    const currentQuestion = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === currentQuestion.answer;

    state.totalTimeLeft += state.timeLeft;

    if (isCorrect) {
        state.score += 1;
        recordCorrectAnswer();
        playCorrectSound();
    } else {
        recordIncorrectAnswer();
        playWrongSound();
    }

    state.history.push({
        question: currentQuestion.question,
        options: [...currentQuestion.options],
        selectedIndex,
        correctIndex: currentQuestion.answer,
        isCorrect,
        explanation: currentQuestion.explanation
    });

    liveScoreElement.textContent = state.score;

    const buttons = answerButtons.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        const letter = button.querySelector(".answer-letter");

        if (index === currentQuestion.answer) {
            button.classList.add("correct");
            letter.textContent = "✓";
        } else if (index === selectedIndex) {
            button.classList.add("incorrect");
            letter.textContent = "✕";
        }
    });

    showFeedback(isCorrect, currentQuestion);

    nextBtn.disabled = false;
}

function showFeedback(isCorrect, currentQuestion) {
    feedbackElement.className = "feedback";

    if (isCorrect) {
        feedbackElement.classList.add("feedback-correct");
        feedbackElement.textContent =
            `✓ Correct! ${currentQuestion.explanation}`;
    } else {
        feedbackElement.classList.add("feedback-incorrect");
        feedbackElement.textContent =
            `Not quite. Correct answer: ${currentQuestion.options[currentQuestion.answer]}. ${currentQuestion.explanation}`;
    }
}

function handleTimeout() {
    if (state.answered) {
        return;
    }

    state.answered = true;

    const currentQuestion = state.questions[state.currentIndex];

    // A timed-out question counts as incorrect.
    recordIncorrectAnswer();
    playWrongSound();

    state.history.push({
        question: currentQuestion.question,
        options: [...currentQuestion.options],
        selectedIndex: null,
        correctIndex: currentQuestion.answer,
        isCorrect: false,
        explanation: currentQuestion.explanation
    });

    const buttons = answerButtons.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === currentQuestion.answer) {
            button.classList.add("correct");
            button.querySelector(".answer-letter").textContent = "✓";
        }
    });

    feedbackElement.className = "feedback feedback-incorrect";
    feedbackElement.textContent =
        `Time's up! The correct answer is ${currentQuestion.options[currentQuestion.answer]}. ${currentQuestion.explanation}`;

    nextBtn.disabled = false;
}


// 10. NEXT QUESTION

function nextQuestion() {
    if (!state.answered) {
        return;
    }

    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
        showQuestion();
    } else {
        showResults();
    }
}


// 11. RESULTS DASHBOARD

function showResults() {
    stopTimer();

    const totalQuestions = state.questions.length;
    const correctAnswers = state.score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round(
        (correctAnswers / totalQuestions) * 100
    );

    state.lastPercentage = percentage;

    finalScoreElement.textContent = `${percentage}%`;
    correctCountElement.textContent = correctAnswers;
    incorrectCountElement.textContent = incorrectAnswers;
    timeLeftResult.textContent = `${state.totalTimeLeft}s`;

    resultTitle.textContent =
        percentage === 100
            ? "Absolutely brilliant!"
            : percentage >= 70
                ? "Outstanding effort!"
                : percentage >= 40
                    ? "You're making progress!"
                    : "Every attempt makes you stronger!";

    resultMessage.textContent =
        `${capitalize(state.category)} · ${capitalize(state.difficulty)} challenge`;

    resultSummary.textContent =
        `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;

    updateScoreRing(percentage);
    renderAnswerReview();
    saveBestScore(percentage);
    checkQuizAchievements(percentage);
    saveQuizAttempt(percentage);
    renderResultAchievements();
    updateDashboardStats();
    playCompleteSound();

    showScreen(resultsScreen);
}

function updateScoreRing(percentage) {
    const scoreRing = document.querySelector(".score-ring");
    const degrees = (percentage / 100) * 360;

    scoreRing.style.background =
        `conic-gradient(var(--purple) 0deg, var(--blue) ${degrees}deg, rgba(255, 255, 255, 0.07) ${degrees}deg, rgba(255, 255, 255, 0.07) 360deg)`;
}

function renderAnswerReview() {
    answerReview.replaceChildren();

    state.history.forEach((item, index) => {
        const reviewItem = document.createElement("article");

        reviewItem.className =
            `review-item ${item.isCorrect ? "review-correct" : "review-incorrect"}`;

        const question = document.createElement("p");
        question.className = "review-question";
        question.textContent = `${index + 1}. ${item.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = "review-answer";

        const yourAnswerLabel = document.createElement("strong");
        yourAnswerLabel.textContent = "Your answer: ";

        const yourAnswerText = document.createElement("span");
        yourAnswerText.textContent =
            item.selectedIndex === null
                ? "Time ran out"
                : item.options[item.selectedIndex];

        yourAnswer.append(yourAnswerLabel, yourAnswerText);

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "review-answer";

        const correctLabel = document.createElement("strong");
        correctLabel.textContent = "Correct answer: ";

        const correctText = document.createElement("span");
        correctText.textContent = item.options[item.correctIndex];

        correctAnswer.append(correctLabel, correctText);

        const explanation = document.createElement("p");
        explanation.className = "review-explanation";
        explanation.textContent = item.explanation;

        reviewItem.append(
            question,
            yourAnswer,
            correctAnswer,
            explanation
        );

        answerReview.appendChild(reviewItem);
    });
}


// 12. SAVE PERSONAL BEST

function getBestScore() {
    try {
        const saved = localStorage.getItem("quizmaster-best-score");
        const score = Number(saved);

        return saved !== null && Number.isFinite(score)
            ? score
            : 0;
    } catch {
        return 0;
    }
}

function saveBestScore(percentage) {
    const currentBest = getBestScore();
    const newBest = Math.max(currentBest, percentage);

    try {
        localStorage.setItem(
            "quizmaster-best-score",
            String(newBest)
        );
    } catch {
        // The quiz still works if browser storage is unavailable.
    }
}

function updateDashboardStats() {
    const totalQuestionCount = Object.values(questionBank)
        .reduce((total, category) => total + Object.values(category)
            .reduce((difficultyTotal, questions) => difficultyTotal + questions.length, 0), 0);

    totalQuestionsStat.innerHTML = `${totalQuestionCount}<span></span>`;
    bestScoreStat.innerHTML = `${getBestScore()}<span>%</span>`;

    const attempts = getQuizAttempts();
    const average = attempts.length
        ? Math.round(attempts.reduce((sum, attempt) => sum + attempt.percentage, 0) / attempts.length)
        : 0;

    if (quizzesCompletedStat) quizzesCompletedStat.textContent = attempts.length;
    if (averageScoreStat) averageScoreStat.textContent = `${average}%`;
    if (bestStreakStat) bestStreakStat.textContent = getSavedBestStreak();
    renderAchievements();
    renderRecentAttempts();
}


// 13. HELPER

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}


// 13A. STORAGE HELPERS, ACHIEVEMENTS AND LEARNING HISTORY

function getStorageItem(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}

const achievementDefinitions = [
    { id: "first-win", name: "First Victory", icon: "🏅", description: "Answer a question correctly." },
    { id: "streak-3", name: "On Fire", icon: "🔥", description: "Get 3 correct answers in a row." },
    { id: "streak-5", name: "Unstoppable", icon: "⚡", description: "Get 5 correct answers in a row." },
    { id: "perfect-score", name: "Perfectionist", icon: "💎", description: "Finish a quiz with 100% accuracy." },
    { id: "quiz-10", name: "Dedicated Learner", icon: "🚀", description: "Complete 10 quiz attempts." }
];

function readStoredArray(key) {
    try {
        const value = JSON.parse(getStorageItem(key) || "[]");
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
}

function getUnlockedAchievements() {
    return readStoredArray("quizAchievements");
}

function unlockAchievement(id) {
    const unlocked = getUnlockedAchievements();
    if (unlocked.some(item => item.id === id || item === id)) return false;

    const definition = achievementDefinitions.find(item => item.id === id);
    if (!definition) return false;

    unlocked.push({ id, unlockedAt: new Date().toISOString() });
    setStorageItem("quizAchievements", JSON.stringify(unlocked));
    return true;
}

function recordCorrectAnswer() {
    state.currentStreak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
    updateStreakDisplay();
    unlockAchievement("first-win");

    if (state.currentStreak >= 3) unlockAchievement("streak-3");
    if (state.currentStreak >= 5) unlockAchievement("streak-5");
}

function recordIncorrectAnswer() {
    state.currentStreak = 0;
    updateStreakDisplay();
}

function updateStreakDisplay() {
    if (currentStreakDisplay) {
        currentStreakDisplay.textContent = `🔥 ${state.currentStreak} streak`;
        currentStreakDisplay.classList.toggle("streak-active", state.currentStreak >= 3);
    }
}

function getQuizAttempts() {
    return readStoredArray("quizAttempts");
}

function saveQuizAttempt(percentage) {
    const attempts = getQuizAttempts();
    attempts.push({
        category: state.category,
        difficulty: state.difficulty,
        percentage,
        correct: state.score,
        total: state.questions.length,
        bestStreak: state.bestStreak,
        completedAt: new Date().toISOString()
    });

    // Keep the latest 20 attempts to avoid unbounded storage growth.
    setStorageItem("quizAttempts", JSON.stringify(attempts.slice(-20)));

    const previousBest = getSavedBestStreak();
    setStorageItem("quizBestStreak", String(Math.max(previousBest, state.bestStreak)));

    if (attempts.length >= 10) unlockAchievement("quiz-10");
}

function getSavedBestStreak() {
    const value = Number(getStorageItem("quizBestStreak") || 0);
    return Number.isFinite(value) ? value : 0;
}

function checkQuizAchievements(percentage) {
    if (percentage === 100) unlockAchievement("perfect-score");
}

function renderAchievements() {
    if (!achievementList || !achievementCount) return;

    const unlockedIds = new Set(
        getUnlockedAchievements().map(item => typeof item === "string" ? item : item.id)
    );

    achievementCount.textContent = `${unlockedIds.size} / ${achievementDefinitions.length} unlocked`;
    achievementList.replaceChildren();

    achievementDefinitions.forEach(item => {
        const unlocked = unlockedIds.has(item.id);
        const card = document.createElement("article");
        card.className = `achievement-card${unlocked ? " achievement-unlocked" : " achievement-locked"}`;

        const icon = document.createElement("span");
        icon.className = "achievement-icon";
        icon.textContent = unlocked ? item.icon : "🔒";
        icon.setAttribute("aria-hidden", "true");

        const content = document.createElement("div");
        content.className = "achievement-copy";

        const title = document.createElement("strong");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        const status = document.createElement("span");
        status.className = "achievement-status";
        status.textContent = unlocked ? "UNLOCKED" : "LOCKED";

        content.append(title, description, status);
        card.append(icon, content);
        achievementList.appendChild(card);
    });
}

function renderRecentAttempts() {
    if (!recentAttempts) return;

    const attempts = getQuizAttempts().slice(-5).reverse();
    recentAttempts.replaceChildren();

    if (!attempts.length) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = "Complete a quiz to see your progress here.";
        recentAttempts.appendChild(empty);
        return;
    }

    attempts.forEach(attempt => {
        const row = document.createElement("article");
        row.className = "attempt-row";

        const details = document.createElement("div");
        details.className = "attempt-details";

        const title = document.createElement("strong");
        title.textContent = `${capitalize(attempt.category)} · ${capitalize(attempt.difficulty)}`;

        const date = document.createElement("span");
        const parsedDate = new Date(attempt.completedAt);
        date.textContent = Number.isNaN(parsedDate.getTime())
            ? "Completed quiz"
            : parsedDate.toLocaleDateString(undefined, { month: "short", day: "numeric" });

        const score = document.createElement("strong");
        score.className = "attempt-score";
        score.textContent = `${attempt.percentage}%`;

        details.append(title, date);
        row.append(details, score);
        recentAttempts.appendChild(row);
    });
}

function renderResultAchievements() {
    if (!resultAchievementList) return;

    const unlockedIds = new Set(
        getUnlockedAchievements().map(item => typeof item === "string" ? item : item.id)
    );
    const unlocked = achievementDefinitions.filter(item => unlockedIds.has(item.id));
    resultAchievementList.replaceChildren();

    if (!unlocked.length) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = "Keep going to unlock your first badge.";
        resultAchievementList.appendChild(empty);
        return;
    }

    unlocked.forEach(item => {
        const badge = document.createElement("article");
        badge.className = "achievement-card achievement-unlocked";
        const icon = document.createElement("span");
        icon.className = "achievement-icon";
        icon.textContent = item.icon;
        const copy = document.createElement("div");
        copy.className = "achievement-copy";
        const title = document.createElement("strong");
        title.textContent = item.name;
        const description = document.createElement("p");
        description.textContent = item.description;
        copy.append(title, description);
        badge.append(icon, copy);
        resultAchievementList.appendChild(badge);
    });
}

// 14. BUTTON EVENTS

startBtn.addEventListener("click", () => {
    openSetup();
});

backHomeBtn.addEventListener("click", goHome);

beginQuizBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

retryBtn.addEventListener("click", startQuiz);

homeBtn.addEventListener("click", goHome);

quitQuizBtn.addEventListener("click", () => {
    const shouldQuit = window.confirm(
        "Exit this challenge? Your current progress will not be saved."
    );

    if (shouldQuit) {
        goHome();
    }
});


/* ==========================================
   PREMIUM FEATURE 1: KEYBOARD CONTROLS
========================================== */

document.addEventListener("keydown", function (event) {
    // Keyboard shortcuts are active only during the quiz.
    if (quizScreen.classList.contains("hidden")) {
        return;
    }

    // Don't intercept shortcuts when typing in form fields.
    const target = event.target;

    if (
        target instanceof HTMLElement &&
        (
            target.isContentEditable ||
            ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
        )
    ) {
        return;
    }

    // Escape: offer to exit the quiz.
    if (event.key === "Escape") {
        event.preventDefault();
        quitQuizBtn.click();
        return;
    }

    // Enter: advance only after the current question is answered.
    if (event.key === "Enter" && state.answered) {
        event.preventDefault();
        nextBtn.click();
        return;
    }

    // Number keys 1–4 select answer options A–D.
    if (/^[1-4]$/.test(event.key) && !state.answered) {
        const selectedIndex = Number(event.key) - 1;
        const buttons = answerButtons.querySelectorAll(".answer-btn");
        const selectedButton = buttons[selectedIndex];

        if (selectedButton && !selectedButton.disabled) {
            event.preventDefault();
            selectedButton.click();
        }
    }
});
/* ==========================================
   PREMIUM FEATURE 2: SOUND EFFECTS
========================================== */

const soundToggle = document.getElementById("sound-toggle");

let soundEnabled = getStorageItem("quizSoundEnabled") !== "false";
let audioContext = null;

function updateSoundToggle() {
    if (!soundToggle) return;

    soundToggle.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
    soundToggle.setAttribute("aria-pressed", String(!soundEnabled));
    soundToggle.setAttribute(
        "aria-label",
        soundEnabled ? "Mute sound" : "Enable sound"
    );
}

function playTone(frequency, duration = 0.12, type = "sine", volume = 0.06) {
    if (!soundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(volume, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
        // Sound is optional; the quiz should work even if audio is unavailable.
    }
}

function playCorrectSound() {
    playTone(660, 0.12);
    setTimeout(() => playTone(880, 0.16), 100);
}

function playWrongSound() {
    playTone(220, 0.2, "triangle", 0.045);
}

function playCompleteSound() {
    playTone(523, 0.12);
    setTimeout(() => playTone(659, 0.12), 120);
    setTimeout(() => playTone(784, 0.2), 240);
}

if (soundToggle) {
    soundToggle.addEventListener("click", () => {
        soundEnabled = !soundEnabled;
        setStorageItem("quizSoundEnabled", String(soundEnabled));
        updateSoundToggle();

        // A short preview confirms that sound is enabled.
        if (soundEnabled) {
            playTone(660, 0.12);
        }
    });
}

updateSoundToggle();

/* INITIALIZE AFTER ALL FEATURE SETUP */
updateSelectedChoices();
updateDashboardStats();
updateSoundToggle();
updateStreakDisplay();
showScreen(homeScreen);
