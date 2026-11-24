"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter = 0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}
// TODO: utwórz tablicę z elementami do losowania
let items = ["Informatyk", "Lekarz", "Nauczyciel", "Szef Kuchni", "Kelner", "Budowlaniec", "Artysta", "Piekarz",];
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function drawItem() {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}

function changeBackground() {
    let colors = ["#1ae1ee", "#5b10b6","#1ae1ee","#d6191c"];
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
}