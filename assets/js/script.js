
class Pessoa {
    constructor(nome, sobrenome, dtNascimento, email, contato, telefone, cargo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dtNascimento = dtNascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo = cargo;

    }

    static criarNovoUsuario(event){

        event.preventDefault()

        const nomeUsuario = document.getElementById("nome").value
        const sobrenomeUsuario = document.getElementById("sobrenome").value
        const dtNascimentoUsuario = document.getElementById("dtNascimento").value
        const emailUsuario = document.getElementById("email").value
        const contatoUsuario = document.getElementById("contato").value
        const telefoneUsuario = document.getElementById("telefone").value
        const cargoUsuario = document.getElementById("cargo").value
        
        let hoje = new Date();
        let anoAtual = hoje.getFullYear()
        
        if(nomeUsuario.length == 0 || sobrenomeUsuario.length == 0 || dtNascimentoUsuario.length == 0 || emailUsuario.length == 0 || contatoUsuario.length == 0 || telefoneUsuario.length == 0){
            const divModal = document.createElement("div")
            divModal.classList.add("divModal")

            const tituloModal = document.createElement("h2")
            tituloModal.innerText = "Atenção!"

            const mensagemModal = document.createElement("p")
            mensagemModal.innerText = "Por favor, preencha todas as informações"

            const btnModal = document.createElement("button")
            btnModal.innerText = "Fechar"

            btnModal.addEventListener("click", () => {
                divModal.classList.add("sumir")
            })

            divModal.append(tituloModal, mensagemModal, btnModal)
            const body = document.getElementsByTagName("body")[0]
            body.appendChild(divModal)
            }
        else if(
        usuarios.some((elem) => {
            return emailUsuario == elem.email
        })
        ){
            const divModal = document.createElement("div")
            divModal.classList.add("divModal")

            const tituloModal = document.createElement("h2")
            tituloModal.innerText = "Atenção!"

            const mensagemModal = document.createElement("p")
            mensagemModal.innerText = "Não é possível cadastrar um mesmo email mais de uma vez"

            const btnModal = document.createElement("button")
            btnModal.innerText = "Fechar"

            btnModal.addEventListener("click", () => {
                divModal.classList.add("sumir")
            })

            divModal.append(tituloModal, mensagemModal, btnModal)
            const body = document.getElementsByTagName("body")[0]
            body.appendChild(divModal)

        } 
        else if (anoAtual - dtNascimentoUsuario.slice(0,4) < 18){
            const divModal = document.createElement("div")
            divModal.classList.add("divModal")

            const tituloModal = document.createElement("h2")
            tituloModal.innerText = "Atenção!"

            const mensagemModal = document.createElement("p")
            mensagemModal.innerText = "É necessário ter pelo menos 18 anos para realizar o cadastro"

            const btnModal = document.createElement("button")
            btnModal.innerText = "Fechar"

            btnModal.addEventListener("click", () => {
                divModal.classList.add("sumir")
            })

            divModal.append(tituloModal, mensagemModal, btnModal)
            const body = document.getElementsByTagName("body")[0]
            body.appendChild(divModal)


        }
        else {

        const novoUsuario = new Pessoa(nomeUsuario, sobrenomeUsuario, dtNascimentoUsuario, emailUsuario,contatoUsuario, telefoneUsuario, cargoUsuario)
        usuarios.push(novoUsuario)
        this.listarNovosUsuarios(usuarios)
        }
    }    

    static listarNovosUsuarios(bancoDeUsuarios){
        const listaAlunos = document.getElementById("lista-de-alunos")
        listaAlunos.innerHTML = ""

        bancoDeUsuarios.forEach((elem) => {
        const li = document.createElement("li")
        const nomeAluno = document.createElement("p")
        const emailAluno = document.createElement("p")
        const cargoAluno = document.createElement("p")

        nomeAluno.innerText = `${elem.nome} ${elem.sobrenome}`;
        emailAluno.innerText = elem.email;
        cargoAluno.innerText = elem.cargo;

        li.append(nomeAluno,emailAluno,cargoAluno)
        listaAlunos.appendChild(li)

        })
    }


    static filtrarPorCargo(){
        const filtroCargo = document.getElementById("cargoOption").value

        if(filtroCargo == "Todos"){
            this.listarNovosUsuarios(usuarios)
        } else {
        const filtrados = usuarios.filter((elem) => {
            return elem.cargo == filtroCargo
            })
            this.listarNovosUsuarios(filtrados)
        }
    }

}

const usuarios = []

const btnRegistrar = document.getElementById("register-button")

btnRegistrar.addEventListener("click", (event) => {
    Pessoa.criarNovoUsuario(event)
})

const btnFiltro = document.getElementById("btn")

btnFiltro.addEventListener("click", () => {
     Pessoa.filtrarPorCargo()
 })
