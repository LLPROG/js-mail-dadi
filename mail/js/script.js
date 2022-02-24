let formAnswer = document.querySelector('.form-answer');
let btn = document.querySelector('.btn');
let btnClear = document.querySelector('.btn-clear');



let emailList = ['luca@gmail.com', 'henry@gmail.com', 'gabriel@gmail.com', 'mauro@gmail.com', 'mattia@gmail.com','alessandro@gmail.com', 'anna@gmail.com'];



let code = false




btn.addEventListener('click', function() {

    let answer = document.querySelector('#accedi').value;


    for (let i = 0; i < emailList.length; i++) {

        if (emailList[i].toLowerCase() == answer.toLowerCase()) {
            code = true
        }
    }


    if (code !== false) {
        formAnswer.innerHTML = 'ben tornato' ;
    } else {
        formAnswer.innerHTML ='non sei ancora registrato';

    }

})

btnClear.addEventListener('click', function() {
    window.location.reload();

})


