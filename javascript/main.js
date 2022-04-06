let enviar = document.querySelector("#enviar")
let inputs = document.querySelectorAll(".formulario__input")
let formulario = document.querySelector(".formulario")
let span = document.querySelectorAll(".formulario__span")
let label = document.querySelectorAll(".formulario__label")

let senha = document.querySelector("#senha")
let confirmaSenha = document.querySelector("#confirmaSenha")
let erroSenha = document.querySelectorAll(".erroSenha")

enviar.onclick = () => 
{
 

    for(let i = 0; i < inputs.length; i++)
    { 
        let pai = inputs[i].parentNode
        
        if(inputs[i].value.length < 1)
        {
            inputs[i].style.borderBottom = "2px solid red"
            inputs[i].style.marginBottom = "0.5rem"

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

        console.log(erroSenha[0])
        console.log(erroSenha[1])

        span[5].classList.remove('mostra')
        span[6].classList.remove('mostra')

        erroSenha[0].classList.add('mostraSenha')
        erroSenha[1].classList.add('mostraSenha')

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
}