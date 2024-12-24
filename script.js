const start_btn = document.getElementById("start_btn");
const input_key = document.getElementById("user_id");
const error = document.getElementById("error");
const main = document.querySelector(".main");

const task = document.querySelector(".task");
const ans_btn = document.getElementById("ans_btn");
const ans_text = document.getElementById("answer");
const error_task = document.getElementById("task_error");

const qr_block = document.querySelector(".qr");
const qr_code = document.getElementById("qr_code");

var is_start = false;

var keys = ["001", "002", "003", "004",
            "005", "006", "007", "008",
            "009", "010", "011"
]


// Привязываем к кнопке начало игры обработчик
start_btn.addEventListener("click", () => {
    // Обрабатываем двойное нажатие
    if (!is_start){
        // Обрабатываем верность введенного значения
        value = input_key.value;
        if (keys.indexOf(value) != -1){
            is_start = true;
            // Запускаем игру в соотвествии с номером игрока
            if (value == "001"){game1()}
            else if (value == "002"){game2()}
            else if (value == "003"){game3()}
            else if (value == "004"){game4()}
            else if (value == "005"){game5()}
            else if (value == "006"){game6()}
            else if (value == "007"){game7()}
            else if (value == "008"){game8()}
            else if (value == "009"){game9()}
            else if (value == "010"){game10()}
            else if (value == "011"){game11()}
        }
        else {
            // Отображаем ошибку
            error.style.display = "block";
            setTimeout(() => {
                error.style.display = "none";
            }, 3000);
        }
    }
});


// Функция сброса стартового меню
function startgame(){
    main.style.z_index = "-2";
    main.style.display = "none";

    task.style.display = "flex";
    task.style.z_index = "100";

}


// Функция отображения результата
function win(qr_id){
    qr_code.setAttribute("src", `img/qrs/${qr_id}.png`);

    task.style.z_index = "-2";
    task.style.display = "none";

    qr_block.style.z_index = "1";   
    qr_block.style.display = "flex";
}


// Игра 1. Загадка.
function game1(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "Обожают впускать гостей, но сами в гостях ни разу не были.";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "двери"){
            task.removeChild(h2);
            win(1);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}


// Игра 2. Ребус
function game2(){
    startgame();

    rebus = document.createElement("img");
    rebus.setAttribute("src", "img/tasks/2.jpg");
    task.appendChild(rebus);

    h2 = document.createElement("h2");
    h2.innerText = "Разгадайте ребус:";
    task.appendChild(h2);

    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "снегурочка"){
            task.removeChild(rebus);
            task.removeChild(h2);
            win(2);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}


// Игра 3. Загадка
function game3(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "Самый нужный, самый важный Новогодний гость в семье. Он старается, как может, И не просит оливье.";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "телевизор"){
            task.removeChild(h2);
            win(3);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}


// Игра 4. Ребус
function game4(){
    startgame();

    rebus = document.createElement("img");
    rebus.setAttribute("src", "img/tasks/4.png");
    task.appendChild(rebus);

    h2 = document.createElement("h2");
    h2.innerText = "Разгадайте ребус:";
    task.appendChild(h2);

    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "снеговик"){
            task.removeChild(rebus);
            task.removeChild(h2);
            win(4);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 5. Загадка
function game5(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "Светит, но не греет. Мигает и праздничное настроение создает, на елку ее вешают. Что же это?";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "гирлянда"){
            task.removeChild(h2);
            win(5);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 6. Ребус
function game6(){
    startgame();

    rebus = document.createElement("img");
    rebus.setAttribute("src", "img/tasks/6.png");
    task.appendChild(rebus);

    h2 = document.createElement("h2");
    h2.innerText = "Разгадайте ребус:";
    task.appendChild(h2);

    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "вьюга"){
            task.removeChild(rebus);
            task.removeChild(h2);
            win(6);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 7. Загадка
function game7(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "Кто весь новогодний праздник проводит стоя, не ест, не пьёт и никуда не может отойти?";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "елка" || ans.toLowerCase() === "ёлка"){
            task.removeChild(h2);
            win(7);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 8. Ребус
function game8(){
    startgame();

    rebus = document.createElement("img");
    rebus.setAttribute("src", "img/tasks/8.png");
    task.appendChild(rebus);

    h2 = document.createElement("h2");
    h2.innerText = "Разгадайте ребус:";
    task.appendChild(h2);

    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "22"){
            task.removeChild(rebus);
            task.removeChild(h2);
            win(8);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 9. Загадка
function game9(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "Перед Новым годом она тает, хотя и не лед. И уплывает, хотя и не лодка.";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "зарплата"){
            task.removeChild(h2);
            win(9);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 10. Ребус
function game10(){
    startgame();

    rebus = document.createElement("img");
    rebus.setAttribute("src", "img/tasks/10.png");
    task.appendChild(rebus);

    h2 = document.createElement("h2");
    h2.innerText = "Разгадайте ребус:";
    task.appendChild(h2);

    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "мандарин"){
            task.removeChild(rebus);
            task.removeChild(h2);
            win(10);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}

// Игра 11. Загадка
function game11(){
    startgame();

    h2 = document.createElement("h2");
    h2.innerText = "С одной стороны лес, с другой – поле";
    
    task.appendChild(h2);
    ans_btn.addEventListener("click", () => {
        // Проверяю ответы
        ans = ans_text.value
        if (ans.toLowerCase() === "шуба"){
            task.removeChild(h2);
            win(11);
        } else {
            // Отображаем ошибку
            error_task.style.display = "block";
            setTimeout(() => {
                error_task.style.display = "none";
            }, 3000);
        }
    });
}