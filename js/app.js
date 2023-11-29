/*** SISTEMA DE REGISTRO POR FORMULÁRIO 
 * Para: Codificação para Front-End
 * Por: Luiz Carlos Jr.
***/

// Botão de envio:
const btnRegister = document.querySelector('#btnRegister');

// Tornar visíveis caso a validação dê errado:
const errorMsg1 = document.getElementsByClassName('message')[0],
errorMsg2 = document.getElementsByClassName('message')[1],
errorMsg3 = document.getElementsByClassName('message')[2],
errorMsg4 = document.getElementsByClassName('message')[3];

const errorIcon1 = document.getElementsByClassName('error-icon')[0],
errorIcon2 = document.getElementsByClassName('error-icon')[1],
errorIcon3 = document.getElementsByClassName('error-icon')[2],
errorIcon4 = document.getElementsByClassName('error-icon')[3];

btnRegister.addEventListener('click', function() {

    // Chamando os elementos .form-input:
    const inFirstName = document.getElementById('inFirstName').value,
    inLastName = document.getElementById('inLastName').value,
    inEmail = document.getElementById('inEmail').value,
    inPassword = document.getElementById('inPassword').value;

    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

    // Validando os dados:
    if(inFirstName === '') {
        turnDisplayOn(errorMsg1, errorIcon1)
    } else {
        turnDisplayOff(errorMsg1, errorIcon1)
    }

    if(inLastName === '') {
        turnDisplayOn(errorMsg2, errorIcon2)
    } else {
        turnDisplayOff(errorMsg2, errorIcon2)
    }

    if(emailRegex.test(inEmail) === false) {
        turnDisplayOn(errorMsg3, errorIcon3)
    } else {
        turnDisplayOff(errorMsg3, errorIcon3)
    }

    if(inPassword === '' || inPassword.length < 8) {
        turnDisplayOn(errorMsg4, errorIcon4)
    } else {
        turnDisplayOff(errorMsg4, errorIcon4)
    }
})

function turnDisplayOn(el1, el2) {
    el1.style.display = 'inherit';
    el2.style.display = 'inherit';
}
function turnDisplayOff(el1, el2) {
    el1.style.display = 'none';
    el2.style.display = 'none';
}