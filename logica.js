import {fullLocalQuestions} from './questions.js'

import {saveState, loadState, clearState} from './storage.js'

import {languageSelectEl,
        questionNumberEl,
        questionTextEl,
        answersContainerEl,
        nextQuestionBtn,
        scoreTextEl,
        startGameBtn,
        quizContentEl,
        loadingTextEl,
        restartGameBtn,
        quizEndImage
} from './domElements.js';

let questionsArray = [];
let currentQuestionIndex = 0;
let scoreCount = 0;
let currentLanguage = 'english';

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// случайный выбор вопросов из банка
function getRandomQuestions(questionBank, num) {
    return shuffleArray([...questionBank]).slice(0, num);
}

//получаем вопросы

async function fetchQuestions(lang) {
    loadingTextEl.style.display = "block";

    if (lang === 'english') {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
            const data = await response.json();
            loadingTextEl.style.display = "none";
            return data.results || [];
        } catch (error) {
            console.error('Ошибка при загрузке вопросов:', error);
            loadingTextEl.textContent = "Ошибка загрузки. Попробуйте позже.";
            return [];
        }
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                loadingTextEl.style.display = "none";
                resolve(getRandomQuestions(fullLocalQuestions, 5));
            }, 800);
        });
    }
}

// логика квиза

export async function startGame() {
    console.log("Кнопка 'Начать игру' нажата");

    startGameBtn.style.display = "none";
    currentLanguage = languageSelectEl.value;
    currentQuestionIndex = 0;
    scoreCount = 0;
    scoreTextEl.textContent = `Правильных ответов: ${scoreCount}`;

    questionsArray = await fetchQuestions(currentLanguage);

    if (questionsArray.length === 0) {
        loadingTextEl.textContent = "Ошибка загрузки вопросов!";
        return;
    }

    quizContentEl.style.display = "block";
    quizEndImage.style.display = "none"; // Скрываем изображение при новой игре
    restartGameBtn.style.display = "none"; // Скрываем кнопку Сыграть заново

    saveState({questionsArray, currentQuestionIndex, scoreCount, currentLanguage});
    renderQuestion();
}

export function renderQuestion() {
    if (currentQuestionIndex >= questionsArray.length) {
        showFinalResult();
        return;
    }

    const questionObj = questionsArray[currentQuestionIndex];
    questionNumberEl.textContent = `Вопрос ${currentQuestionIndex + 1}`;
    questionTextEl.textContent = questionObj.question || "Нет текста вопроса";

    answersContainerEl.innerHTML = '';
    const answers = [...questionObj.incorrect_answers, questionObj.correct_answer];
    shuffleArray(answers);

    answers.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('answer-btn');
        answerBtn.textContent = answer;
        answerBtn.addEventListener('click', () => handleAnswerClick(answerBtn, questionObj.correct_answer));
        answersContainerEl.appendChild(answerBtn);
    });

    nextQuestionBtn.style.display = "block"; // Восстанавливаем кнопку
    nextQuestionBtn.disabled = true;
    saveState({questionsArray, currentQuestionIndex, scoreCount, currentLanguage});
}

function handleAnswerClick(clickedButton, correctAnswer) {
    const isCorrect = clickedButton.textContent === correctAnswer;
    if (isCorrect) {
        clickedButton.classList.add('correct');
        scoreCount++;
        scoreTextEl.textContent = `Правильных ответов: ${scoreCount}`;
    } else {
        clickedButton.classList.add('incorrect');
    }

    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        if (!isCorrect && btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    nextQuestionBtn.disabled = false;
    saveState({questionsArray, currentQuestionIndex, scoreCount, currentLanguage});
}

export function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsArray.length) {
        showFinalResult();
        return;
    }
    renderQuestion();
}

function showFinalResult() {
    questionNumberEl.textContent = 'Квиз завершён!';
    questionTextEl.textContent = `Вы ответили правильно на ${scoreCount} из ${questionsArray.length} вопросов.`;
    answersContainerEl.innerHTML = '';
    nextQuestionBtn.style.display = "none";

    // Показываем картинку и кнопку "Сыграть заново"
    quizEndImage.style.display = "block";
    restartGameBtn.style.display = "block";

    sendQuizResult();
    clearState();
}

// пост запрос
async function sendQuizResult() {
    const resultData = {
        language: currentLanguage,
        correctAnswers: scoreCount,
        totalQuestions: questionsArray.length,
        date: new Date().toISOString()
    };
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(resultData),
        headers: { 'Content-Type': 'application/json' }
    });
}

export function restartGame() {
    // Очищаем состояние и скрываем кнопку
    clearState();
    restartGameBtn.style.display = "none";
    quizEndImage.style.display = "none"; // Скрываем картинку

    // Показываем кнопку Начать игру
    startGameBtn.style.display = "block";

    // Скрываем квиз
    quizContentEl.style.display = "none";

    // Восстанавливаем кнопку След вопрос
    nextQuestionBtn.style.display = "block";
    nextQuestionBtn.disabled = true;

    console.log("Игра начата заново.");
}

export function LoadSavesGame() {
    const savedState = loadState();
    if (savedState) {
        questionsArray = savedState.questionsArray;
        currentQuestionIndex = savedState.currentQuestionIndex;
        scoreCount = savedState.scoreCount;
        currentLanguage = savedState.currentLanguage;

        quizContentEl.style.display = "block";
        startGameBtn.style.display = "none";
        quizEndImage.style.display = "none"; // Скрываем изображение при новой игре
        restartGameBtn.style.display = "none"; // Скрываем кнопку Сыграть заново

        renderQuestion();
    }
}
