const API = "";

function checkForm() {
    const nome = document.getElementById("input-name");
    const tel = document.getElementById("input-tel");
    const cpf = document.getElementById("input-cpf");
    const email = document.getElementById("input-email");

    const dados = {
        nome: nome,
        tel: tel,
        cpf: cpf,
        email: email.value,
    };

    var validaTel,
        validaNome,
        validaEmail,
        validaCPF = false;

    function checkFirstName() {
        if (nome.value == "" || !isNaN(nome.value)) {
            validaNome = false;
            nome.style.border = "2px solid #f54242";
        } else {
            validaNome = true;
            nome.style.border = "2px solid #1aff00";
        }
    }

    function checkPhoneNumber() {
        if (
            !tel.value.match(/^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
        ) {
            validaTel = false;
            tel.style.border = "2px solid #f54242";
        } else {
            validaTel = true;
            tel.style.border = "2px solid #1aff00";
        }
    }

    function checkEmail() {
        if (
            email.value == "" ||
            !isNaN(email.value) ||
            !email.value.match(
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            )
        ) {
            validaEmail = false;
            email.style.border = "2px solid #f54242";
        } else {
            validaEmail = true;
            email.style.border = "2px solid #1aff00";
        }
    }

    function checkCPF() {
        if (
            cpf.value == "" ||
            !isNaN(cpf.value) ||
            !cpf.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
        ) {
            validaCPF = false;
            cpf.style.border = "2px solid #f54242";
        } else {
            validaCPF = true;
            cpf.style.border = "2px solid #1aff00";
        }
    }

    checkFirstName();
    checkPhoneNumber();
    checkEmail();
    checkCPF();

    if (
        validaTel &&
        validaNome &&
        validaEmail &&
        validaCPF &&
        document.getElementById("accept").checked
    ) {
        fetch(API, {
            method: "POST",
            body: JSON.stringify(dados),
        });
        alert("Envio confirmado!");
        modal.style.display = "none";
    } else alert("Verifique os erros no formulario!");
}

const submitBtn = document
    .getElementById("submit-btn")
    .addEventListener("click", checkForm);
