let computer = document.querySelector('.computer');
let winner = document.querySelector('.winner');
let player = document.querySelector('.player');


let group = [1, 2, 3, 4, 5, 6];

let code = false

let playerInput = parseInt(prompt('inserisci un numero tra 1 e 6')) ;


for (let i = 0; i < group.length; i++) {


    if (group[i] == playerInput) {
        code = true
    }
} 

    // player number

    if (code !== false) {

        player.innerHTML ='il tuo numero é: ' + playerInput;
           
        let randomNumber = group[Math.floor(Math.random(1) * group.length)];

        computer.innerHTML ='il computer ha scelto: ' + randomNumber;

        if (playerInput > randomNumber) {
            winner.innerHTML = 'hai vinto';
        } else if (playerInput == randomNumber) {
            winner.innerHTML = 'questo é un pareggio';
        } else {
            winner.innerHTML = 'il computer ha vinto';
        }

    } else {
        player.innerHTML = 'il tuo numero non é valido';
        winner.innerHTML = 'non posso dire chi ha vinto';

    }








