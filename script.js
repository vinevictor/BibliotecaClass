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
        Livros.forEach(nome => {
            if (nomeLivro == nome.Titulo) {
                console.log(nome)
            }
        })
    }
}

let livroUm = new Livro()
livroUm.Titulo = "O Guerreiro"
livroUm.Autor = "Mark Audren"
livroUm.Editora = "Panene"
livroUm.AnoPublicacao = 2001
livroUm.Disponibilidade = true

let livroDois = new Livro()
livroDois.Titulo = "O Samurai"
livroDois.Autor = "Luther Jax"
livroDois.Editora = "The Editor"
livroDois.AnoPublicacao = 2010
livroDois.Disponibilidade = true

let livroTres = new Livro()
livroTres.Titulo = "Vikings"
livroTres.Autor = "Ragnar"
livroTres.Editora = "Kattegat Editing"
livroTres.AnoPublicacao = 1993
livroTres.Disponibilidade = false

let Livros = [livroUm, livroDois, livroTres]
