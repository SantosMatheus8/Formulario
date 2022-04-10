let enviar = document.querySelector("#enviar")
let inputs = document.querySelectorAll(".formulario__input")
let formulario = document.querySelector(".formulario")
let span = document.querySelectorAll(".formulario__span")
let label = document.querySelectorAll(".formulario__label")

let senha = document.querySelector("#senha")
let confirmaSenha = document.querySelector("#confirmaSenha")
let erroSenha = document.querySelectorAll(".erroSenha")

let email =  document.querySelector("#email")
let emailInvalido = document.querySelector(".erroEmailInvalido")

let cpfInvalido = document.querySelector(".erroCPFInvalido")

enviar.onclick = () => 
{
    for(let i = 0; i < inputs.length; i++)
    { 
        let pai = inputs[i].parentNode
        
        if(inputs[i].value.length < 1)
        {
            inputs[i].style.borderBottom = "2px solid red"
            inputs[i].style.marginBottom = "0.5rem"
            inputs[i].focus()

            span[i].classList.add('mostra')

            label[i].style.color = "red"

            pai.style.marginBottom = "1.2rem"
        }
        if(inputs[i].value.length > 0)
        {
            label[i].style.color = "rgba(27, 91, 252, 0.71)"
            span[i].classList.remove('mostra')
            inputs[i].style.borderBottom = "2px solid rgba(27, 91, 252, 0.71)"
        }
    }

    if(!(senha.value == confirmaSenha.value))
    {
        let labelSenha = inputs[5].parentNode.lastElementChild
        let paiSenha = inputs[5].parentNode
        let labelConfirma = inputs[6].parentNode.lastElementChild
        let paiConfirma = inputs[6].parentNode

        span[5].classList.remove('mostra')
        span[6].classList.remove('mostra')

        erroSenha[0].classList.add('mostraSenha')
        erroSenha[1].classList.add('mostraSenha')
        erroSenha[0].focus()

        inputs[5].style.borderBottom = "2px solid red"
        inputs[5].style.marginBottom = "0.5rem"

        inputs[6].style.borderBottom = "2px solid red"
        inputs[6].style.marginBottom = "0.5rem"

        labelSenha.style.color = "red"
        labelConfirma.style.color = "red"

        paiSenha.style.marginBottom = "1.2rem"
        paiConfirma.style.marginBottom = "1.2rem"
            
        confirmaSenha.value = ''
    }
    if((senha.value == confirmaSenha.value) && senha.value.length > 0)
    {
        erroSenha[0].classList.remove('mostraSenha')
        erroSenha[1].classList.remove('mostraSenha')
    }

    if(email.validity.valid == false && email.value.length > 0)
    {
        emailInvalido.classList.add('mostraErroEmail')

        pai = inputs[4].parentNode
        pai.style.marginBottom = "1.2rem"

        inputs[4].style.borderBottom = "2px solid red"
        inputs[4].style.marginBottom = "0.5rem"

        label[4].style.color = "red"
    }
    else 
    {
        emailInvalido.classList.remove('mostraErroEmail')
    }

    let cpf = inputs[2].value

    if(validaCPF(cpf) == false && cpf.length > 0)
    {
        cpfInvalido.classList.add('mostraErroCPF')

        pai = inputs[2].parentNode
        pai.style.marginBottom = "1.2rem"

        inputs[2].style.borderBottom = "2px solid red"
        inputs[2].style.marginBottom = "0.5rem"

        label[2].style.color = "red"
    }
    else
    {
        cpfInvalido.classList.remove('mostraErroCPF')
    }
}

function validaCPF(cpf)
{
    let j = 10
    let soma = 0
    let digitos = (cpf.length - 2)

    for(let i = 0; i < digitos; i++)
    {
        soma += Number(cpf[i]) * j
        j--
    }
    let resto = (soma * 10) % 11
    let primeiroDigito

    if(resto < 10)
    {
    primeiroDigito = resto
    }
    if(resto >= 10)
    {
        primeiroDigito = 0
    }

    soma = 0
    digitos = (cpf.length - 1)
    j = 11
    let segundoDigito

    for(let i = 0; i < digitos; i++)
    {
        soma += Number(cpf[i]) * j
        j--
    }

    resto = (soma * 10) % 11

    if(resto < 10)
    {
        segundoDigito = resto
    }
    if(resto >= 10)
    {
        segundoDigito = 0 
    }

    if(primeiroDigito == cpf[9] && segundoDigito == cpf[10])
    {
        return true
    }
    else
    {
        return false
    }
}
