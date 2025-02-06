//
//
// let questionsArray = [];
// let currentQuestionIndex = 0;
// let scoreCount = 0;
// let currentLanguage = 'english';
//
// // DOM-элементы
// const languageSelectEl = document.getElementById('languageSelect');
// const questionNumberEl = document.getElementById('questionNumber');
// const questionTextEl = document.getElementById('questionText');
// const answersContainerEl = document.getElementById('answersContainer');
// const nextQuestionBtn = document.getElementById('nextQuestionBtn');
// const scoreTextEl = document.getElementById('scoreText');
// const startGameBtn = document.getElementById('startGameBtn');
// const quizContentEl = document.getElementById('quizContent');
// const loadingTextEl = document.getElementById('loadingText');
// const restartGameBtn = document.getElementById('restartGameBtn');
// const quizEndImage = document.getElementById('quizEndImage'); // Изображение при завершении
//
// // банк вопросов!!!
// const fullLocalQuestions = [
//     { question: "Какой язык используется для стилизации веб-страниц?", correct_answer: "CSS", incorrect_answers: ["HTML", "JavaScript", "Python"] },
//     { question: "Что означает аббревиатура HTML?", correct_answer: "Hyper Text Markup Language", incorrect_answers: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"] },
//     { question: "Какой метод добавляет элемент в конец массива?", correct_answer: "push()", incorrect_answers: ["pop()", "shift()", "unshift()"] },
//     { question: "Какой оператор сравнивает по значению и типу?", correct_answer: "===", incorrect_answers: ["==", "!=", "!=="] },
//     { question: "Какой объект используется для работы с AJAX-запросами?", correct_answer: "XMLHttpRequest", incorrect_answers: ["Fetch API", "jQuery", "Promise"] },
//     { question: "Какой метод удаляет последний элемент массива?", correct_answer: "pop()", incorrect_answers: ["push()", "shift()", "splice()"] },
//     { question: "Как объявить переменную в ES6?", correct_answer: "let", incorrect_answers: ["var", "const", "def"] },
//     { question: "Какой символ используется для комментариев в JavaScript?", correct_answer: "//", incorrect_answers: ["<!-- -->", "/* */", "#"] },
//     { question: "Как вызвать функцию в JavaScript?", correct_answer: "functionName()", incorrect_answers: ["call functionName", "invoke functionName", "functionName"] },
//     { question: "Какое значение вернёт typeof null?", correct_answer: "object", incorrect_answers: ["null", "undefined", "number"] },
//
//     // 🔹 ИСТОРИЯ
//     { question: "Какой год считается началом Второй мировой войны?", correct_answer: "1939", incorrect_answers: ["1941", "1914", "1945"] },
//     { question: "Кто был первым президентом США?", correct_answer: "Джордж Вашингтон", incorrect_answers: ["Авраам Линкольн", "Томас Джефферсон", "Франклин Рузвельт"] },
//     { question: "Какой город был столицей Российской империи до 1918 года?", correct_answer: "Санкт-Петербург", incorrect_answers: ["Москва", "Киев", "Новгород"] },
//     { question: "В каком году распался СССР?", correct_answer: "1991", incorrect_answers: ["1989", "1993", "1986"] },
//     { question: "Как называлась первая космическая станция?", correct_answer: "Салют-1", incorrect_answers: ["Мир", "Международная космическая станция", "Аполлон"] },
//
//     // 🔹 НАУКА
//     { question: "Как называется самая лёгкая из всех химических элементов?", correct_answer: "Водород", incorrect_answers: ["Кислород", "Гелий", "Азот"] },
//     { question: "Какой газ поглощается растениями в процессе фотосинтеза?", correct_answer: "Углекислый газ", incorrect_answers: ["Кислород", "Азот", "Метан"] },
//     { question: "Какой орган отвечает за перекачивание крови в теле человека?", correct_answer: "Сердце", incorrect_answers: ["Печень", "Лёгкие", "Почки"] },
//     { question: "Как называется самый большой спутник Солнечной системы?", correct_answer: "Ганимед", incorrect_answers: ["Титан", "Луна", "Европа"] },
//     { question: "Какая планета ближе всего к Солнцу?", correct_answer: "Меркурий", incorrect_answers: ["Венера", "Марс", "Земля"] },
//
//     // 🔹 ГЕОГРАФИЯ
//     { question: "Какой самый большой океан на Земле?", correct_answer: "Тихий", incorrect_answers: ["Атлантический", "Индийский", "Северный Ледовитый"] },
//     { question: "Какая страна имеет самую большую площадь?", correct_answer: "Россия", incorrect_answers: ["Канада", "Китай", "США"] },
//     { question: "Какой город является столицей Австралии?", correct_answer: "Канберра", incorrect_answers: ["Сидней", "Мельбурн", "Брисбен"] },
//     { question: "Как называется самая длинная река в мире?", correct_answer: "Нил", incorrect_answers: ["Амазонка", "Янцзы", "Миссисипи"] },
//     { question: "На каком материке находится пустыня Сахара?", correct_answer: "Африка", incorrect_answers: ["Азия", "Австралия", "Южная Америка"] },
//
//     // 🔹 МАТЕМАТИКА
//     { question: "Чему равно значение числа π (приблизительно)?", correct_answer: "3.14", incorrect_answers: ["3.21", "2.71", "1.62"] },
//     { question: "Как называется результат сложения чисел?", correct_answer: "Сумма", incorrect_answers: ["Произведение", "Разность", "Частное"] },
//     { question: "Как называется угол, равный 90 градусам?", correct_answer: "Прямой", incorrect_answers: ["Тупой", "Острый", "Развёрнутый"] },
//     { question: "Сколько граней у куба?", correct_answer: "6", incorrect_answers: ["4", "8", "12"] },
//     { question: "Сколько градусов в полном круге?", correct_answer: "360", incorrect_answers: ["180", "270", "90"] },
//
//     // 🔹 СПОРТ
//     { question: "Сколько игроков в футбольной команде (на поле)?", correct_answer: "11", incorrect_answers: ["10", "12", "9"] },
//     { question: "Как называется главный турнир по теннису во Франции?", correct_answer: "Ролан Гаррос", incorrect_answers: ["Уимблдон", "US Open", "Australian Open"] },
//     { question: "Сколько колец на олимпийском флаге?", correct_answer: "5", incorrect_answers: ["4", "6", "7"] },
//     { question: "Какой вид спорта связан с терминами 'гольф-клуб' и 'путтер'?", correct_answer: "Гольф", incorrect_answers: ["Хоккей", "Крикет", "Теннис"] },
//     { question: "Какая страна выиграла чемпионат мира по футболу 2018 года?", correct_answer: "Франция", incorrect_answers: ["Бразилия", "Германия", "Аргентина"] },
//
//     // 🔹 КИНО И МУЗЫКА
//     { question: "Какой режиссёр снял фильм 'Интерстеллар'?", correct_answer: "Кристофер Нолан", incorrect_answers: ["Стивен Спилберг", "Квентин Тарантино", "Джеймс Кэмерон"] },
//     { question: "Какой рок-группе принадлежит альбом 'The Dark Side of the Moon'?", correct_answer: "Pink Floyd", incorrect_answers: ["The Beatles", "Led Zeppelin", "Queen"] },
//     { question: "Кто сыграл Железного человека в фильмах Marvel?", correct_answer: "Роберт Дауни-младший", incorrect_answers: ["Крис Эванс", "Марк Руффало", "Том Холланд"] },
//     { question: "Какой актёр сыграл главную роль в фильме 'Форрест Гамп'?", correct_answer: "Том Хэнкс", incorrect_answers: ["Леонардо ДиКаприо", "Брэд Питт", "Джонни Депп"] },
//     { question: "Какой музыкальный инструмент называют 'королём инструментов'?", correct_answer: "Орган", incorrect_answers: ["Скрипка", "Фортепиано", "Гитара"] }
//
// ];
//
// // Ключ для LocalStorage
// const LOCAL_STORAGE_KEY = 'quizState';
//
// // функции для работы с LocalStorage
//
// function saveState() {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ currentQuestionIndex, scoreCount, currentLanguage, questionsArray }));
// }
//
// function loadState() {
//     const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (savedState) {
//         const state = JSON.parse(savedState);
//         currentQuestionIndex = state.currentQuestionIndex;
//         scoreCount = state.scoreCount;
//         currentLanguage = state.currentLanguage;
//         questionsArray = state.questionsArray;
//         return true;
//     }
//     return false;
// }
//
// function clearState() {
//     localStorage.removeItem(LOCAL_STORAGE_KEY);
// }
//
// //получаем вопросы
//
// async function fetchQuestions(lang) {
//     loadingTextEl.style.display = "block";
//
//     if (lang === 'english') {
//         try {
//             const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
//             const data = await response.json();
//             loadingTextEl.style.display = "none";
//             return data.results || [];
//         } catch (error) {
//             console.error('Ошибка при загрузке вопросов:', error);
//             loadingTextEl.textContent = "Ошибка загрузки. Попробуйте позже.";
//             return [];
//         }
//     } else {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 loadingTextEl.style.display = "none";
//                 resolve(getRandomQuestions(fullLocalQuestions, 5));
//             }, 800);
//         });
//     }
// }
//
// // случайный выбор вопросов из банка
// function getRandomQuestions(questionBank, num) {
//     return shuffleArray([...questionBank]).slice(0, num);
// }
//
// // логика квиза
//
// async function startGame() {
//     console.log("Кнопка 'Начать игру' нажата");
//
//     startGameBtn.style.display = "none";
//     currentLanguage = languageSelectEl.value;
//     currentQuestionIndex = 0;
//     scoreCount = 0;
//     scoreTextEl.textContent = `Правильных ответов: ${scoreCount}`;
//
//     questionsArray = await fetchQuestions(currentLanguage);
//
//     if (questionsArray.length === 0) {
//         loadingTextEl.textContent = "Ошибка загрузки вопросов!";
//         return;
//     }
//
//     quizContentEl.style.display = "block";
//     quizEndImage.style.display = "none"; // Скрываем изображение при новой игре
//     restartGameBtn.style.display = "none"; // Скрываем кнопку Сыграть заново
//
//     saveState();
//     renderQuestion();
// }
//
// function renderQuestion() {
//     if (currentQuestionIndex >= questionsArray.length) {
//         showFinalResult();
//         return;
//     }
//
//     const questionObj = questionsArray[currentQuestionIndex];
//     questionNumberEl.textContent = `Вопрос ${currentQuestionIndex + 1}`;
//     questionTextEl.textContent = questionObj.question || "Нет текста вопроса";
//
//     answersContainerEl.innerHTML = '';
//     const answers = [...questionObj.incorrect_answers, questionObj.correct_answer];
//     shuffleArray(answers);
//
//     answers.forEach(answer => {
//         const answerBtn = document.createElement('button');
//         answerBtn.classList.add('answer-btn');
//         answerBtn.textContent = answer;
//         answerBtn.addEventListener('click', () => handleAnswerClick(answerBtn, questionObj.correct_answer));
//         answersContainerEl.appendChild(answerBtn);
//     });
//
//     nextQuestionBtn.style.display = "block"; // Восстанавливаем кнопку
//     nextQuestionBtn.disabled = true;
//     saveState();
// }
//
// function handleAnswerClick(clickedButton, correctAnswer) {
//     const isCorrect = clickedButton.textContent === correctAnswer;
//     if (isCorrect) {
//         clickedButton.classList.add('correct');
//         scoreCount++;
//         scoreTextEl.textContent = `Правильных ответов: ${scoreCount}`;
//     } else {
//         clickedButton.classList.add('incorrect');
//     }
//
//     document.querySelectorAll('.answer-btn').forEach(btn => {
//         btn.disabled = true;
//         if (!isCorrect && btn.textContent === correctAnswer) {
//             btn.classList.add('correct');
//         }
//     });
//
//     nextQuestionBtn.disabled = false;
//     saveState();
// }
//
// function goToNextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex >= questionsArray.length) {
//         showFinalResult();
//         return;
//     }
//     renderQuestion();
// }
//
// function showFinalResult() {
//     questionNumberEl.textContent = 'Квиз завершён!';
//     questionTextEl.textContent = `Вы ответили правильно на ${scoreCount} из ${questionsArray.length} вопросов.`;
//     answersContainerEl.innerHTML = '';
//     nextQuestionBtn.style.display = "none";
//
//     // Показываем картинку и кнопку "Сыграть заново"
//     quizEndImage.style.display = "block";
//     restartGameBtn.style.display = "block";
//
//     sendQuizResult();
//     clearState();
// }
//
// // пост запрос
// async function sendQuizResult() {
//     const resultData = {
//         language: currentLanguage,
//         correctAnswers: scoreCount,
//         totalQuestions: questionsArray.length,
//         date: new Date().toISOString()
//     };
//     await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(resultData),
//         headers: { 'Content-Type': 'application/json' }
//     });
// }
//
//
// function shuffleArray(array) {
//     return array.sort(() => Math.random() - 0.5);
// }
//
// // перезапускаем игру
//
// function restartGame() {
//     // Очищаем состояние и скрываем кнопку
//     clearState();
//     restartGameBtn.style.display = "none";
//     quizEndImage.style.display = "none"; // Скрываем картинку
//
//     // Показываем кнопку Начать игру
//     startGameBtn.style.display = "block";
//
//     // Скрываем квиз
//     quizContentEl.style.display = "none";
//
//     // Восстанавливаем кнопку След вопрос
//     nextQuestionBtn.style.display = "block";
//     nextQuestionBtn.disabled = true;
//
//     console.log("Игра начата заново.");
// }
//
// //обработчики
// startGameBtn.addEventListener('click', startGame);
// nextQuestionBtn.addEventListener('click', goToNextQuestion);
// restartGameBtn.addEventListener('click', restartGame);
// window.addEventListener('load', () => {
//     if (loadState())
//         renderQuestion();
// });
//
