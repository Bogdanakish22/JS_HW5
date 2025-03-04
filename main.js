let вибір = "Чай"; 

switch (вибір) {
    case "Кава":
        console.log("Ви обрали Каву");
        break;
    case "Чай":
        console.log("Ви обрали Чай");
        break;
    case "Сік":
        console.log("Ви обрали Сік");
        break;
    default:
        console.log("Невідомий вибір");
}


let день = "Субота"; 

switch (день) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П'ятниця":
        console.log("Це робочий день");
        break;
    case "Субота":
    case "Неділя":
        console.log("Це вихідний день");
        break;
    default:
        console.log("Невірно введений день");
}


let місяць = 8; 

switch (місяць) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невірно введений номер місяця");
}


let колір = "Зелений";

switch (колір) {
    case "Червоний":
        console.log("стоп");
        break;
    case "Жовтий":
        console.log("чекати");
        break;
    case "Зелений":
        console.log("йти");
        break;
    default:
        console.log("Не вірно введений колір");
}

let число1 = 10;    
let число2 = 0;     
let оператор = "/"; 

switch (оператор) {
    case "+":
        console.log(число1 + число2);
        break;
    case "-":
        console.log(число1 - число2);
        break;
    case "*":
        console.log(число1 * число2);
        break;
    case "/":
        if (число2 === 0) {
            console.log("Помилка: ділення на нуль!");
        } else {
            console.log(число1 / число2);
        }
        break;
    default:
        console.log("Невідомий оператор");
}
