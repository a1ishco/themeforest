

const emailArr = ["al@i-mail.com", "sabina-@mail.com","matrix@matrix.com"]
const passArr =  ["123", "456","789"]

const inptEm = document.getElementById('typeEmailX'); // input email
const inptPas = document.getElementById('typePasswordX'); // input password
const alertxt = document.querySelector('#alertText') // text that shows login success or invalid password/login
const form  = document.querySelector('form');



form.onsubmit =(e)=>{
    e.preventDefault();
    
    if ((jQuery.inArray(inptEm.value, emailArr) == jQuery.inArray(inptPas.value, passArr)) && jQuery.inArray(inptEm.value, emailArr) != -1) {
        console.log('true');
        alertxt.innerHTML = "Login Success";
        alertxt.className = 'text-white-50 mb-5 bg-success'
        window.location.assign('http://127.0.0.1:5500/js/strane/index2.html');

    }
    else {
        console.log('false');

        alertxt.innerHTML = "Email or password entered wrong";
        alertxt.className = 'text-white-50 mb-5 bg-danger'
    }
}

