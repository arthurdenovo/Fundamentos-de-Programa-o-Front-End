console.log("Dois alunos de Sistemas de Informação realizaram quatro provas em uma determinada disciplina. O resultado foi:");
const aluno1 = "Rodrigo Silva Souza"
const aluno2 = "João Pereira Pera"

const aluno1_nota1 = 10.0
const aluno1_nota2 = 8.5
const aluno1_nota3 = 9.0
const aluno1_nota4 = 8.5

const aluno2_nota1 = 6.5
const aluno2_nota2 = 8.5
const aluno2_nota3 = 7.0
const aluno2_nota4 = 7.5

let media1 = (aluno1_nota1 + aluno1_nota2 + aluno1_nota3 + aluno1_nota4) / 4
let media2 = (aluno2_nota1 + aluno2_nota2 + aluno2_nota3 + aluno2_nota4) / 4

if (media1 >= 8.0) {
    console.log(aluno1)
    console.log("Aprovado")
} else {
    console.log(aluno1)
    console.log("Final")
}

if (media2 >= 8.0) {
    console.log(aluno2)
    console.log("Aprovado")
} else {
    console.log(aluno2)
    console.log("Final")
}
