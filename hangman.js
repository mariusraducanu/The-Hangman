let nrOfTry = 10;
let nrOfLetters = 0;
let word = "";
let c = document.getElementById("hangmanAnim");
let ctx = c.getContext("2d");
let d = document.getElementById("hangmanAnim");
let ctxd = c.getContext("2d");

function startGame() {
    ctx.moveTo(50, 50);//asta si urmatorul reprezinta stalpul
    ctx.lineTo(50, 390);
    ctx.moveTo(390, 390); //asta si urmatorul reprezinta baza stalpului
    ctx.lineTo(5, 390);
    ctx.moveTo(50, 50); //asta si urmatorul reprezinta lemnul de care se atarna sfoara
    ctx.lineTo(190, 50);
    ctx.moveTo(190, 50); //asta si urmatorul reprezinta sfoara
    ctx.lineTo(190, 100);
    ctx.stroke();
}

function mySubmit() {
    word = document.getElementById("word").value;
    for (let i = 0; i < word.length; ++i) {
        let letter = document.createElement("div");
        letter.id = i;
        letter.innerHTML =" _ ";
        letter.style.display = "inline";
        const currentDiv = document.getElementById("showingWord");
        currentDiv.appendChild(letter);
        startGame();
    }
}

function checkLetters() {
    let letter = document.getElementById("letter").value;
    let result = word.indexOf(letter);
    const usedLetter = document.getElementById("usedLetter");
    usedLetter.innerHTML += letter + " ";
    if(word[result] === letter) {
        for (let i = 0; i < word.length; ++i) {
            if(word[i] === letter) {
                ++nrOfLetters;
                const letter2 = document.getElementById(i);
                letter2.innerHTML = word[i];
            }
        }
        if (nrOfLetters === word.length) {
            document.getElementById("winner").innerHTML = "Congratulations! You discovered the word!";
            document.getElementById("nrOfTry").style.display = "none";
            document.getElementById("word").disabled = true;
            document.getElementById("letter").disabled = true;
            document.getElementById("submit").innerHTML = "Reset";
            document.getElementById("submit").onclick = function(){resetGame()};
        }
    } else {
        --nrOfTry;
        if(nrOfTry > 0) {
            document.getElementById("nrOfTry").innerHTML = "Wrong letter! You have left " + nrOfTry + " lifes";
        } else {
            document.getElementById("nrOfTry").innerHTML = "Game Over!";
        }
        switch(nrOfTry) {
            case 9 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.arc(190, 130, 30, 0, 2 * Math.PI); // asta reprezinta capul
                    ctx.stroke();
                    break;
                case 8 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(190, 160);//asta si urmatorul reprezinta corpul
                    ctx.lineTo(190, 300);
                    ctx.stroke();
                    break;
                case 7 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(190, 190);//asta si urmatorul reprezinta mana stanga
                    ctx.lineTo(150, 250);
                    ctx.stroke();
                    break;
                case 6 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(190, 190);//asta si urmatorul reprezinta mana dreapta
                    ctx.lineTo(230, 250);
                    ctx.stroke();
                    break;
                case 5 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(220, 370);//asta si urmatorul reprezinta piciorul stang
                    ctx.lineTo(190, 300);
                    ctx.stroke();
                    break;
                case 4 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(160, 370);//asta si urmatorul reprezinta piciorul drept
                    ctx.lineTo(190, 300);
                    ctx.stroke();
                    break;
                case 3 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(170, 125); //asta reprezinta ochiul stang
                    ctx.lineTo(180, 125);
                    ctx.stroke();
                    break;
                case 2 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(210, 125); //asta reprezinta ochiul drept
                    ctx.lineTo(200, 125);
                    ctx.stroke();
                    break;
                case 1 :
                    c = document.getElementById("hangmanAnim");
                    ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(190, 135); //asta reprezinta nasul
                    ctx.lineTo(190, 140);
                    ctx.stroke();
                    break;
                case 0 :
                    d = document.getElementById("hangmanAnim");
                    ctxd = c.getContext("2d");
                    ctxd.beginPath();
                    ctxd.arc(190, 150, 4, 0, 1 * Math.PI);
                    ctxd.stroke();
                    break;
        }
    }
    if(!nrOfTry) {
        document.getElementById("word").disabled = true;
        document.getElementById("letter").disabled = true;
        document.getElementById("submit").innerHTML = "Reset";
        document.getElementById("submit").onclick = function(){resetGame()};
    }
}

function resetGame() {
    window.location.reload();
}