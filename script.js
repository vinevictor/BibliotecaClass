
class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade

    ConstrutorLivro(nomeLivro, autorLivro, editoraLivro, anoLivro) {
        let livro = new Livro()
        livro.Titulo = nomeLivro
        livro.Autor = autorLivro
        livro.Editora = editoraLivro
        livro.AnoPublicacao = anoLivro
        livro.Disponibilidade = true
        livros.push(livro)
    }
}

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []

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

    ConstrutorBiblioteca(nomeBiblioteca, enderecoBiblioteca, telefoneBiblioteca) {
        let biblioteca = new Biblioteca();
        biblioteca.Nome = nomeBiblioteca
        biblioteca.Endereco = enderecoBiblioteca
        biblioteca.Telefone = telefoneBiblioteca
        bibliotecas.push(biblioteca)
    }

    AdicionarLivro(nomeLivro, nomeBiblioteca) {
        bibliotecas.forEach(x => {
            if (nomeBiblioteca == x.Nome) {
                livros.forEach(y => {
                    if (nomeLivro == y.Titulo) {
                        x.AcervoDeLivros.push(y)
                    }
                })
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
bibliotecaUm.Nome = "Biblioteca"
bibliotecaUm.Endereco = "Centro,Batatais SP"
bibliotecaUm.Telefone = "16 3662-6782"

let bibliotecas = [bibliotecaUm]

bibliotecaUm.BuscarLivro("Vikings")
console.log(bibliotecaUm.EmprestimoLivro("O Samurai"))
bibliotecaUm.DevolucaoLivro("Vikings")

let nomeBiblioteca = prompt("")
let nomeLivro = prompt("")
let index
bibliotecas.forEach(x => {
    index = 0
    if (nomeBiblioteca == x.Nome) {
        return index;
    }
    index++
})

bibliotecas[index].AdicionarLivro(nomeLivro, nomeBiblioteca)