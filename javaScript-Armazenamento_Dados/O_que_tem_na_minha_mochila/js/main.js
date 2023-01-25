const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


form.addEventListener("submit", (evento) => {
  evento.preventDefault()

 const nomeItem =(evento.target.elements['nome'].value) 
 const quantidadeItem =(evento.target.elements['quantidade'].value) 

 criarElemento(nomeItem,quantidadeItem)

})


function criarElemento(nome, quantidade) {

 const novoItem = document.createElement('li')
 novoItem.classList.add("item")

 const numeroItem = document.createElement('strong')
 numeroItem.innerHTML = quantidade

 novoItem.appendChild(numeroItem) 
 novoItem.innerHTML+=(nome)

 lista.appendChild(novoItem)

}

 /*const elementoNomeDoNovoItem = document.getElementById("nome").value
 const elementoQuantidadeItem = document.getElementById("quantidade").value

    return alert(`o item ${elementoNomeDoNovoItem} foi adicionado ao estoque com ${elementoQuantidadeItem} itens`) */