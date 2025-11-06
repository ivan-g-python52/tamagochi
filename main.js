'use strict';

let hunger = 50;
let happines = 50;
let heals = 50;

function dise() {
    const rollDice = happines-=Math.floor(Math.random() * (6+1));
    if (rollDice>=2) {
        return true
    } else {
        return false
    }
}

while (true) {
    const menu = `
    Ваш питомец:
    Голод: ${hunger}
    Счастье: ${happines}
    Здоровье: ${heals}
    ---
    Чем займемся?
    1. Кормить
    2. Играть
    3. Уложить спать
    4. Выход
    `;
    const choise = prompt(menu)
    switch (choise) {
        case '1':
            hunger-=Math.floor(Math.random() * (15-10+1))+10;
            if (dise) {
                happines-=Math.floor(Math.random() * (5+1));
            }
        break;
    }
    
}