
class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade
}

class Biblioteca {
    Nome
    Endereco
    Telefone

    BuscarLivro(nomeLivro) {
        livros.forEach(nome => {
            if (nomeLivro == nome.Titulo) {
                console.log(nome)
            }
        })
    }

    EmprestimoLivro(nomeLivro) {
        let livroDisponivel = false
        livros.forEach(nome => {
            if (nomeLivro == nome.Titulo && nome.Disponibilidade == true) {
                nome.Disponibilidade = false
                livroDisponivel = true
            }
        })
        return livroDisponivel
    }

    DevolucaoLivro(nomeLivro) {
        livros.forEach(nome => {
            if (nomeLivro == nome.Titulo) {
                nome.Disponibilidade = true
                console.log("Livro atualizado")
            }
        })

    }


}


let livroUm = new Livro();
livroUm.Titulo = "O Guerreiro"
livroUm.Autor = "Mark Audren"
livroUm.Editora = "Panene"
livroUm.AnoPublicacao = 2001
livroUm.Disponibilidade = true

let livroDois = new Livro();
livroDois.Titulo = "O Samurai"
livroDois.Autor = "Luther Jax"
livroDois.Editora = "The Editor"
livroDois.AnoPublicacao = 2010
livroDois.Disponibilidade = true

let livroTres = new Livro();
livroTres.Titulo = "Vikings"
livroTres.Autor = "Ragnar"
livroTres.Editora = "Kattegat Editing"
livroTres.AnoPublicacao = 1993
livroTres.Disponibilidade = false

let livros = [livroUm, livroDois, livroTres]

let bibliotecaUm = new Biblioteca()
bibliotecaUm.Nome = "Biblioteca Centro"
bibliotecaUm.Endereco = "Centro,Batatais SP"
bibliotecaUm.Telefone = "16 3662-6782"

bibliotecaUm.BuscarLivro("Vikings")
console.log(bibliotecaUm.EmprestimoLivro("O Samurai"))
bibliotecaUm.DevolucaoLivro("Vikings")
