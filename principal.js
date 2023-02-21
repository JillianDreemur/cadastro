var alunos = document.querySelectorAll('.aluno');
console.log(alunos);


function calculaMedia(nota1, nota2, nota3) {
    var n1 = parseFloat(nota1);
    var n2 = parseFloat(nota2);
    var n3 = parseFloat(nota3);
    var media = (n1 + n2 + n3) / 3;
    console.log(media);
    if (media < 0 || media > 10){
        return "Média Inválida"
    }
    return media.toFixed(2);
}


function calculaSituacao(media) {

    var m = parseFloat(media)
    if (m >= 7 && m <= 10) {

        return "Aprovado";
    }
    if (m >= 4 && m < 7) {

        return "Prova Final";
    }
    if (m < 4) {

        return "Reprovado";
    }else{
        return "Dados Inválidos"
    }
}