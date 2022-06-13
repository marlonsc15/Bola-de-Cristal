const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Sei lá.",
    "Depende.",
    "Pode ser.",
    "Sim.",
    "Não.",
    "Caguei.",
    "Duvido.",
    "Ainda.",
    "Melhor não.",
]

function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Digite a pergunta")
        return
    } 

    buttonPerguntar.setAttribute("disabled",true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalResposta = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalResposta)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
   
}

