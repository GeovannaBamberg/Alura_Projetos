const bodyElement = document.querySelector('body')
const lutador ={
    nome: 'Matheus Bamberg',
    nascionalidade: 'Brasil',
    idade: 44,
    peso:80,
    altura:1.70
}
const data= new Date();
let dataDoPost ={
    dia: data.getDay(),
    mes: data.getMonth(),
    ano: data.getFullYear(),
    frase: "Pensamento Aleatorio · A vida e uma caixa preta nunca saberemos o seu real significado. · Faça a pessoa que você gosta se sentir especial ao invés de só mais uma"
}

const meses = ['Janeiro', 'Feveiro', 'Março']

const jogo = {
    nome: 'League of legends - LOL',
    empresa: 'Riot',
    ano: 2009
}

function tela() {
    bodyElement.innerHTML= `<h1>Informações </h1>
    <p>
    Jogador:${lutador.nome}<br>
    nascionalidade: ${lutador.nascionalidade} <br>
    idade: ${lutador.idade}<br>
    peso: ${lutador.peso}<br>
    altura: ${lutador.altura}<br>
     </p>
    `
    bodyElement.innerHTML+= `<h1>Frases</h1>
    <h4>${dataDoPost.dia}/${dataDoPost.mes}/${dataDoPost.ano} </h4>
    <p>${dataDoPost.frase}</p>
    <br>
    `
    bodyElement.innerHTML+=`<h1> Array Meses do ano </h1>
    <p> ${meses}</p>`
    bodyElement.innerHTML+= `<h1> Objeto jogo </h1> <p>
    Jogo:${jogo.nome}<br>
    empresa: ${jogo.empresa} <br>
    data de laçamento: ${jogo.ano}
     </p>`
   
}

tela()