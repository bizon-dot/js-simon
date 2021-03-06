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

setTimeout(function(randomNumbers){
    let points = [];
    for (let index = 0; index < 5; index++) {
        guessNum = parseInt(prompt(`Inserisci il numero. Numeri rimanenti da inserire ${5 - index}`));
        if (randomNum.includes(guessNum)){
            points.push(guessNum);

        }
    }
    alert(`Hai indovinato ${points.length} numeri! I seguenti: ${points}`);
    
},3000)
alert(randomNum);


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

