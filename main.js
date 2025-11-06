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

let isRunning = true;
while (isRunning) {
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
        
        case '2':
            happines+=Math.floor(Math.random() * (15-10+1))+10;
            if (dise) {
                hunger+=Math.floor(Math.random() * (5+1));
            }
            break;
        case '3':
            heals+=Math.floor(Math.random() * (15-10+1))+10;
            if (dise) {
                hunger+=Math.floor(Math.random() * (5+1));
            }
            break;
        case '4':
            isRunning = false;
            alert('До свидания!')
            break;
        default:
            alert('Ошибка ввода')
            break;
    }
    
    if (hunger>=80) {
        alert('Будте внимательны ваш питомец очень голоден')
    } else if (happines<=20) {
        alert('Будте внимательны ваш питомец очень грустный')
    } else if (heals<=20){
        alert('Будте внимательны ваш питомец приболел')
    }  
    
    if (hunger===100 || happines===0 || heals===0) {
        alert('Ваш питомец умер!')
    }
    hunger+=5;
    happines-=5;
    heals-=5;
}