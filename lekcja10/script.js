"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let desc = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function(){
    name.textContent = "Nightmare";
    desc.textContent = "Tryb: Villain";
    avatar.src = "https://api.dicebear.com/10.x/bottts/svg?seed=Villain";

    // document.body.classList.add("villain");
    
    let isHero = document.body.classList.contains("hero");
    
    if (isHero) {
        document.body.classList.replace("hero", "villain");
        name.textContent = "Nightmare";
        desc.textContent = "Tryb: Villain";
        avatar.src = "https://api.dicebear.com/10.x/bottts/svg?seed=Villain";
        avatar.style.borderColor = "#ef4444";
        toggleBtn.textContent = "Wróć do bohatera";
    }
    else {
        document.body.classList.replace("villain", "hero");
        name.textContent = "Wiewior-man";
        desc.textContent = "Tryb: Hero";
        avatar.src = "https://api.dicebear.com/10.x/bottts/svg?seed=Nightmare";
        avatar.style.borderColor = "#3b82f6";
        toggleBtn.textContent = "Zmień tryb";
    }
});