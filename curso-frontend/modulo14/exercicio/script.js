function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        /*
        A Regex abaixo consta com o i no final para ignorar maiusculas e minusculas
        */
        const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(validaEmail)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUnidadeFederativa (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const uf = /[A-Z]{2}/;

        if (this.value.match(uf)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUf) {
    validaUnidadeFederativa(emFoco);
}