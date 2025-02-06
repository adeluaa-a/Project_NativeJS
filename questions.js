export const fullLocalQuestions = [
    { question: "Какой язык используется для стилизации веб-страниц?", correct_answer: "CSS", incorrect_answers: ["HTML", "JavaScript", "Python"] },
    { question: "Что означает аббревиатура HTML?", correct_answer: "Hyper Text Markup Language", incorrect_answers: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"] },
    { question: "Какой метод добавляет элемент в конец массива?", correct_answer: "push()", incorrect_answers: ["pop()", "shift()", "unshift()"] },
    { question: "Какой оператор сравнивает по значению и типу?", correct_answer: "===", incorrect_answers: ["==", "!=", "!=="] },
    { question: "Какой объект используется для работы с AJAX-запросами?", correct_answer: "XMLHttpRequest", incorrect_answers: ["Fetch API", "jQuery", "Promise"] },
    { question: "Какой метод удаляет последний элемент массива?", correct_answer: "pop()", incorrect_answers: ["push()", "shift()", "splice()"] },
    { question: "Как объявить переменную в ES6?", correct_answer: "let", incorrect_answers: ["var", "const", "def"] },
    { question: "Какой символ используется для комментариев в JavaScript?", correct_answer: "//", incorrect_answers: ["<!-- -->", "/* */", "#"] },
    { question: "Как вызвать функцию в JavaScript?", correct_answer: "functionName()", incorrect_answers: ["call functionName", "invoke functionName", "functionName"] },
    { question: "Какое значение вернёт typeof null?", correct_answer: "object", incorrect_answers: ["null", "undefined", "number"] },

    // 🔹 ИСТОРИЯ
    { question: "Какой год считается началом Второй мировой войны?", correct_answer: "1939", incorrect_answers: ["1941", "1914", "1945"] },
    { question: "Кто был первым президентом США?", correct_answer: "Джордж Вашингтон", incorrect_answers: ["Авраам Линкольн", "Томас Джефферсон", "Франклин Рузвельт"] },
    { question: "Какой город был столицей Российской империи до 1918 года?", correct_answer: "Санкт-Петербург", incorrect_answers: ["Москва", "Киев", "Новгород"] },
    { question: "В каком году распался СССР?", correct_answer: "1991", incorrect_answers: ["1989", "1993", "1986"] },
    { question: "Как называлась первая космическая станция?", correct_answer: "Салют-1", incorrect_answers: ["Мир", "Международная космическая станция", "Аполлон"] },

    // 🔹 НАУКА
    { question: "Как называется самая лёгкая из всех химических элементов?", correct_answer: "Водород", incorrect_answers: ["Кислород", "Гелий", "Азот"] },
    { question: "Какой газ поглощается растениями в процессе фотосинтеза?", correct_answer: "Углекислый газ", incorrect_answers: ["Кислород", "Азот", "Метан"] },
    { question: "Какой орган отвечает за перекачивание крови в теле человека?", correct_answer: "Сердце", incorrect_answers: ["Печень", "Лёгкие", "Почки"] },
    { question: "Как называется самый большой спутник Солнечной системы?", correct_answer: "Ганимед", incorrect_answers: ["Титан", "Луна", "Европа"] },
    { question: "Какая планета ближе всего к Солнцу?", correct_answer: "Меркурий", incorrect_answers: ["Венера", "Марс", "Земля"] },

    // 🔹 ГЕОГРАФИЯ
    { question: "Какой самый большой океан на Земле?", correct_answer: "Тихий", incorrect_answers: ["Атлантический", "Индийский", "Северный Ледовитый"] },
    { question: "Какая страна имеет самую большую площадь?", correct_answer: "Россия", incorrect_answers: ["Канада", "Китай", "США"] },
    { question: "Какой город является столицей Австралии?", correct_answer: "Канберра", incorrect_answers: ["Сидней", "Мельбурн", "Брисбен"] },
    { question: "Как называется самая длинная река в мире?", correct_answer: "Нил", incorrect_answers: ["Амазонка", "Янцзы", "Миссисипи"] },
    { question: "На каком материке находится пустыня Сахара?", correct_answer: "Африка", incorrect_answers: ["Азия", "Австралия", "Южная Америка"] },

    // 🔹 МАТЕМАТИКА
    { question: "Чему равно значение числа π (приблизительно)?", correct_answer: "3.14", incorrect_answers: ["3.21", "2.71", "1.62"] },
    { question: "Как называется результат сложения чисел?", correct_answer: "Сумма", incorrect_answers: ["Произведение", "Разность", "Частное"] },
    { question: "Как называется угол, равный 90 градусам?", correct_answer: "Прямой", incorrect_answers: ["Тупой", "Острый", "Развёрнутый"] },
    { question: "Сколько граней у куба?", correct_answer: "6", incorrect_answers: ["4", "8", "12"] },
    { question: "Сколько градусов в полном круге?", correct_answer: "360", incorrect_answers: ["180", "270", "90"] },

    // 🔹 СПОРТ
    { question: "Сколько игроков в футбольной команде (на поле)?", correct_answer: "11", incorrect_answers: ["10", "12", "9"] },
    { question: "Как называется главный турнир по теннису во Франции?", correct_answer: "Ролан Гаррос", incorrect_answers: ["Уимблдон", "US Open", "Australian Open"] },
    { question: "Сколько колец на олимпийском флаге?", correct_answer: "5", incorrect_answers: ["4", "6", "7"] },
    { question: "Какой вид спорта связан с терминами 'гольф-клуб' и 'путтер'?", correct_answer: "Гольф", incorrect_answers: ["Хоккей", "Крикет", "Теннис"] },
    { question: "Какая страна выиграла чемпионат мира по футболу 2018 года?", correct_answer: "Франция", incorrect_answers: ["Бразилия", "Германия", "Аргентина"] },

    // 🔹 КИНО И МУЗЫКА
    { question: "Какой режиссёр снял фильм 'Интерстеллар'?", correct_answer: "Кристофер Нолан", incorrect_answers: ["Стивен Спилберг", "Квентин Тарантино", "Джеймс Кэмерон"] },
    { question: "Какой рок-группе принадлежит альбом 'The Dark Side of the Moon'?", correct_answer: "Pink Floyd", incorrect_answers: ["The Beatles", "Led Zeppelin", "Queen"] },
    { question: "Кто сыграл Железного человека в фильмах Marvel?", correct_answer: "Роберт Дауни-младший", incorrect_answers: ["Крис Эванс", "Марк Руффало", "Том Холланд"] },
    { question: "Какой актёр сыграл главную роль в фильме 'Форрест Гамп'?", correct_answer: "Том Хэнкс", incorrect_answers: ["Леонардо ДиКаприо", "Брэд Питт", "Джонни Депп"] },
    { question: "Какой музыкальный инструмент называют 'королём инструментов'?", correct_answer: "Орган", incorrect_answers: ["Скрипка", "Фортепиано", "Гитара"] }

];

// Ключ для LocalStorage
export const LOCAL_STORAGE_KEY = 'quizState';