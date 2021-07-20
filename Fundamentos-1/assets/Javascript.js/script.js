let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '50%'
email.style.width = '50%'

function validaNome(){
let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 3){
        
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
}   else {
    txtNome.innerHTML= 'Nome Válido'
    txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1){
            
            txtEmail.innerHTML = 'E-mail invalido'
            txtEmail.style.color = 'red'
    }   else {
        txtEmail.innerHTML= 'E-mail Válido'
        txtEmail.style.color = 'green'
    }
}
