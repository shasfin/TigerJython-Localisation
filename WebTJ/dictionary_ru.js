// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2019-, Alexandra Maximova
//
// Language: Russian

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Выполнить | Ctrl+Enter",
    "start-modal-button-hover": "Выполнить в полноэкранном режиме",
    "stop-button-hover": "Остановить",

    "modal-close-button": "Закрыть",

    "options-current-language": "Русский", // language of the current dictionary
    "options-fullscreen": "Полноэкранный режим",
    "options-close-fullscreen": "Выйти из полноэкранного режима",
    "options-program-save": "Сохранить программу",
    "options-program-load": "Загрузить программу",
    "options-information": "Информация",

    "choose-program-name": "Пожалуйста выберите имя для программы:",
    "program-save-prefix": "program_",

    "file-api-error": "Ваш браузер не может открывать программы. Пожалуйста, смените браузер и попробуйте ещё раз.",

    "maketurtle-error": "Вызовите makeTurtle(), чтобы создать лист!",
    "multiple-maketurtle-error": "Вызывайте makeTurtle() только один раз! Удалите все остальные вызовы makeTurtle().",
    "line": "[строка: ",
    "correct-syntax": "Синтаксис правильный.",
    "file-not-found": "Файл не найден: '",
    "abort-message": "Вы отменили программу.",

    "error-msg-ie": "WebTigerJython не работает в Internet Explorer. Пожалуйста, используйте Chrome, FireFox или Edge.",

    // Translations for info.html
    "info-title": "Информация о WebTigerJython",
    "info-intro-1": "WebTigerJython -- для языка программирования Python. is a student friendly programming environment for the Python programming language." +  ААААААААААААААААААААА
        " The learning environment is designed especially for school lessons with the textbook \"",  ААААААААААААААААААААААААА
    "info-intro-2": "\" from Juraj Hromkovič and Tobias Kohn published by Klett & Balmer.",  АААААААААААААААААААА
    "info-features": "Свойства",
    "info-release-1.0.0": "Базовая версия",
    "info-release-1.1.0": "Расширенная языковая поддержка (французский)",
    "info-turtle-functions-title": "Поддерживаемые черепашкины функции",
    "info-turtle-functions-intro": "Следующие черепашкины команды поддерживаются в WebTigerJython в дополнение к стандартному синтаксису языка программирования Python.",
    "info-function-title": "Функция",
    "info-abbreviation-title": "Сокращение",
    "info-description-title": "Описание",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "Количество шагов",
    "info-angle": "угол",
    "info-color": "цвет",
    "info-number": "число",
    "info-function": "функция",
    "info-text": "\"текст\"",
    "info-penwidth": "толщина пера",
    "info-arithmetic-expression": "арифметическое выражение",
    "info-time": "время",
    "info-number-of": "количество",
    "info-body": "    тело",
    "info-question": "\"вопрос\"",
    "info-key": "\"ключ\"",
    "info-example": "Пример:",
    "info-license": "лицензия",
    "info-description-import": "Загрузить черепашкины команды. Только после этого компьютер поймёт черепашкины команды.",
    "info-description-makeTurtle": "Создать черепашку на листе.",
    "info-description-forward": "Переместиться вперёд на количество шагов.",
    "info-description-backward": "Переместиться назад на количество шагов.",
    "info-description-left": "Повернуться на месте налево на указанный угол.",
    "info-description-right": "Повернуться на месте направо на указанный угол.",
    "info-description-setpencolor": "Установить цвет пера. Обводка черепашки станет этого цвета.",
    "info-description-setpenwidth": "Установить толщину пера (в пикселях).",
    "info-description-print": "Отобразить в окне вывода текст в кавычках или результат арифметического выражения.",
    "info-description-delay": "Подождать указанное количество миллисекунд перед тем, как продолжить выполнение программы.",
    "info-description-ht": "Сделать черепашку невидимой, чтобы картинка рисовалась быстрее.",
    "info-description-st": "Сделать черепашку видимой, чтобы видеть, как она рисует.",
    "info-description-repeat": "Выполнить тело некое количество раз. Все инструкции тела должны иметь одинаковый отступ.",
    "info-description-pu": "Поднять перо и не рисовать.",
    "info-description-pd": "Опустить перо и рисовать.",
    "info-description-dot": "Нарисовать заполненный круг заданного диаметра d с центром в месте, в котором стоит черепашка.",
    "info-description-setheading": "Установить угол не относительно черепашки, а относительно листа. То есть, угол 0 перевернёт черепашку головой вверх, " +
        "угол 90 повернёт черепашку к правому краю листа и т.д.",
    "info-description-heading": "Возвращает угол черепашки относительно листа.",
    "info-description-speed": "Изменить скорость черепашки. Change the speed of the turtle. При скорости -1 черепашка бежит как можно быстрее. " +
        "При скорости 1 черепашка ползёт как можно медленнее.",
    "info-description-msgDlg": "Отображать текст в отдельном окошке. Чтобы продолжить выполнение программы, надо будет закрыть окошко, нажав \"OK\".",
    "info-description-label": "Вывести текст на листе в том месте, где стоит черепашка.",
    "info-description-input": "Компьютер отображает вопрос в отдельном окне и сохраняет ответ пользователя в переменной x." +
        "Есть три дополнительных варианта этой функции, каждая из которых ожидает определённый тип данных: " +
        "inputInt(\"вопрос\"), inputFloat(\"вопрос\") and inputString(\"вопрос\").",
    "info-description-setfillcolor": "Установить цвет закраски. Черепашка окрасится в этот цвет.",
    "info-description-startpath": "Начать записывать действия черепашки для последующей закраски площади.",
    "info-description-fillpath": "Соединить местоположение черепашки с начальной точкой и закрасить образовавшуюся замкнутую фигуру цветом закраски."
    "info-description-sqrt": "Извлечь квадратный корень из числа.",
    "info-description-isinteger": "Возращает логическое значение (истина или ложь), указывающее, если число целое.",
    "info-description-makecolor-intro": "Возвращает шестнадцатеричное обозначение цвета и сохраняет его в переменной c. Цвет может быть определён как:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") R, G и B являются целыми числами от 0 до 255 включительно или числами с плавающей " +
        "запятой от 0 до 1. R регулирует насыщеность красного, G -- зелёного, а B -- синего цвета."
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) значения R, G, B такие же, как в предыдущей команде. " +
        " A -- число с плавающей запятой от 0 до 1, обозначающее прозрачность.",
    "info-description-makecolor-rainbow": "радуга",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) возращает цвет в спектре радуги. Второй параметр -- число с плавающей запятой от 0 до 1.",
    "info-description-makecolor-hexadecimal": "шестнадцатеричный код",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") цвет обозначается шестнадцатеричным кодом.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") цвет обозначается по-английски.",
    "info-description-getpixelcolorstr": "Возвращает цвет пикселя, на котором сейчас находится черепашка.",
    "info-description-getpos": "Возвращает координаты (x, y) местоположения черепашки. The x-coordinate can be " +  FFFFFFFFFFFFFFF return, access, coordinate, current turtle position
        "accessed with getPos()[0] and the y-coordinate with getPos()[1].",
    "info-description-getx": "Return the x-coordinate of the current turtle position.", FFFFFFFFF return, coordinate, current turtle position
    "info-description-gety": "Return the y-coordinate of the current turtle position.", FFFFFFFFF return, coordinate, current turtle position
    "info-description-moveto": "Переместить черепашку в точку (x, y).",
    "info-description-setpos": "Переместить черепашку в точку (x, y, не оставляя следов.",
    "info-description-setx": "Переместить черепашку to the given x-coordinate without drawing.",  ААААААААААААаа to the given x-coordinate
    "info-description-sety": "Переместить черепашку to the given y-coordinate without drawing.",  ААААААААААААаа to the given y-coordinate
    "info-description-clean": "Удалить следы черепашки. Черепашка остаётся на месте.",
    "info-description-cs": "Удалить следы черепашки and set the turtle back to its initial position in the middle of the canvas.",  FFFFFFFFFFFFFFFf canvas initial position
    "info-description-clear": "Удалить следы черепашки. Черепашка остаётся на месте и становится невидимой.",
    "info-description-onkey": "Calls up the specified function when the specified key is pressed. Write the function " +  FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        "name without parentheses. To be able to intercept the keystrokes from your external keyboard, you must click " +
        "in the drawing area after you start the program. Then call the Screen().listen() function to let the canvas hear your key input.",
    "info-description-onclick": "Invokes the specified function when you click on the canvas. Write the function " +  FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        "name without parentheses. The x- and y- coordinates of the click are automatically passed to the function. " +
        "Then call the Screen().listen() function to make the canvas hear your input.",
    "info-description-listen": "Captures clicks and keystrokes in the canvas. This feature is used in conjunction " +  FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        "with Screen().onclick(..) and Screen().onkey(..). You only need to call this function once per program.",

    "info-contact": "Контакты",
    "info-contact-descr": "Please send your feedback and suggestions about the programming environment directly to Nicole Trachsler by e-mail: nicole.trachsler (at) inf.ethz.ch",  ААААААААААААААААААА
    "info-authors": "Авторы:",
    "info-copyright-descr": "The application is actively developed by the ABZ of ETH Zurich. The use of the " +  ААААААААААААААААААААААААААААААА
        "application is free, but it may not be used for commercial purposes. Any customization or copy of the " +  АААААААААААААААААААААА
        "application must be given in writing."  ААААААААААААААААААААААА
};
