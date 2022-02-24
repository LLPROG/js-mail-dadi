let formAnswer = document.querySelector('.form-answer');


let email = '@gmail.com';
let emailList = ['luca', 'henry', 'gabriel', 'mauro', 'mattia','alessandro', 'anna'];



let code = false

let answer = prompt('inserisci un nome per generare un email')

for (let i = 0; i < emailList.length; i++) {
    if (emailList[i].toLowerCase() == answer.toLowerCase()) {
        code = true
    }
}


if (code !== false) {
    formAnswer.innerHTML ='questa email é gia utilizzata';
} else {
    formAnswer.innerHTML = 'la tua email è: ' + answer.toLowerCase() + email;
}










