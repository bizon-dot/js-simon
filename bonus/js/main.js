/* 

Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
    Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
   
 Bonus:
    Introdurre la parte di grafica oltre a quella di logica :wink:

*/

let randomNum = randomNumbers();
drawNumbers(randomNum);


var  t = 30;
var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = `Hai ${t--} secondi per memorizzare i numeri`;
}, 1000);




setTimeout(function(){
    let cols = document.getElementsByClassName('col');
    for (i = 0; i < cols.length; i++) {
        cols[i].classList.add('ghost');
    }
  
},30000)


/*  
    =======================================================================================================
        1.                              Genera un array contente 5 numeri casuali
                                                senza duplicati
    =======================================================================================================
    
*/

function randomNumbers() {
    let randomNumbers = [];
    while (randomNumbers.length < 5) {
        let num = Math.floor(Math.random() * 999) + 1;
        if (!(randomNumbers.includes(num))) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}

/*  
    ========================================================================================================
        2.                              Stampo i numeri nel DOM
    ========================================================================================================
    
*/

function drawNumbers(randomNum) {
    for (let index = 0; index < randomNum.length; index++) {
        let divNum = `${randomNum[index]}`
        let templateBox = document.createElement('div');
        templateBox.classList.add("col");
        templateBox.classList.add("m-5");
        templateBox.classList.add("number");
        templateBox.innerHTML = divNum;
        document.getElementById('board-numbers').appendChild(templateBox);

    }

    

}
