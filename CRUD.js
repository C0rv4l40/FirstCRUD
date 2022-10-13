/*
1) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/
let nomes = []
let nome = document.getElementById("nome")
let nomeExcluir, nomeExcluirPos, nomeEdit, nomeEditPos, nomeNovo, pesqNome, pesqNomePos


function cadastrar(){
    nomes.push(nome.value)
        alert(`nome cadastrado:\n${nomes}`)
}
function excluir(){
    nomeExcluir = prompt(`digite o nome que deseja excluir:`)
    nomeExcluirPos = nomes.indexOf(nomeExcluir)
    if(nomeExcluirPos == -1){
        alert(`nome não existe`)
    }else{
    nomes.splice(nomeExcluirPos, 1)
        alert(`nome excluído, nomes restantes:\n${nomes}`)
    }
}
function listar(){ 
    alert(nomes)
}
function editar(){
    nomeEdit = prompt(`digite o nome que deseja editar: `)
    nomeNovo = prompt(`mudar ${nomeEdit} para: `)
    nomeEditPos = nomes.indexOf(nomeEdit)
    if (nomeEditPos == -1) {
        alert(`nome não existe`)
    }else{
        nomes.splice(nomeEditPos, 1, nomeNovo)
        alert(nomes)
    }
}
function pesquisar(){
    pesqNome = prompt("Pesquisar se está cadastrado:")
    pesqNomePos = nomes.indexOf(pesqNome)
    if (pesqNomePos == -1) {
        alert(`${pesqNome} não está cadastrado.`)
    }else{
        alert(`${pesqNome} já esta cadastrado.`)
    }
}