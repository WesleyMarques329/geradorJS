let sliderElement = document.querySelector("#slider");
let btnElement =  document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassoword = document.querySelector("#container-password");

let charset = "abcdfghjijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML =  sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassoword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}