let resultImg = document.getElementById("result-img");
let codEl = document.getElementById("num-cod");
let salmonEl = document.getElementById("num-salmon");
let tropicalEl = document.getElementById("num-tropical");
let pufferEl = document.getElementById("num-puffer");
let fishBtn = document.getElementById("fish-btn");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let untilChoiceInput = document.getElementById("untilchoice");
let fishInventory = document.getElementById("inventory");
let sortBtn = document.getElementById("sort");

let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

fishBtn.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
untilChoiceInput.addEventListener("change", untilChoice);
sortBtn.addEventListener("click", sortFish);

function fishOnce() {
  let character = document.getElementById("character-select").value;
  let randNum = Math.random();

  if (character === "steve") {
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      fishInventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      fishInventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "alex") {
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      fishInventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      fishInventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "villager") {
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      fishInventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      fishInventory.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  }
}

function plus5() {
  for (let fish = 1; fish <= 5; fish++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = numCod + 200;
  while (numCod < codTarget) {
    fishOnce();
  }
}

function untilChoice() {
  let untilChoiceValue = +untilChoiceInput.value;
  for (let fish = 1; fish <= untilChoiceValue; fish++) {
    fishOnce();
  }
}

function sortFish() {
  fishInventory.innerHTML = "";
  for (let fish = 0; fish < numCod; fish++) {
    fishInventory.innerHTML += "<img src='img/Raw-Cod.png'>";
  }
  for (let fish = 0; fish < numSalmon; fish++) {
    fishInventory.innerHTML += "<img src='img/Raw-Salmon.png'>";
  }
  for (let fish = 0; fish < numTropical; fish++) {
    fishInventory.innerHTML += "<img src='img/Tropical-Fish.png'>";
  }
  for (let fish = 0; fish < numPuffer; fish++) {
    fishInventory.innerHTML += "<img src='img/Pufferfish.png'>";
  }
}
