var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {

    event.preventDefault();

    var valida = validaNota();
    
    var form = document.querySelector("#form-alunos");

    var aluno = obtemAlunoDoFormulario(form);

    var alunoTr = montaTr(aluno);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    form.reset();

});

function obtemAlunoDoFormulario(form) {
    var aluno = {
        nome:form.nome.value,
        nota1:form.nota1.value,
        nota2:form.nota2.value,
        nota3:form.nota3.value,
        media: calculaMedia(form.nota1.value, form.nota2.value, form.nota3.value),
        situacao:calculaSituacao(calculaMedia(form.nota1.value, form.nota2.value, form.nota3.value))
    }

    return aluno;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaNota() {

    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    
    
    if (nota1 < 0 || nota1 > 10) {
        alert("Primeira nota inválida");
        nota1.focus()
    }
    if (nota2 < 0 || nota2 > 10) {
        alert("Segunda nota inválida");
        nota2.focus()
    }
    if (nota3 < 0 || nota3 > 10) {
        alert("Terceira nota inválida");
        nota3.focus()
    }
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    var nomeTd = montaTd(aluno.nome,"info-nome");
    var nota1Td = montaTd(aluno.nota1,"info-nota1");
    var nota2Td = montaTd(aluno.nota2,"info-nota2");
    var nota3Td = montaTd(aluno.nota3,"info-nota3");
    var mediaTd = montaTd(aluno.media,"info-media");
    var situacaoTd = montaTd(aluno.situacao,"info-situacao");


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(nota3Td);
    alunoTr.appendChild(mediaTd);
    alunoTr.appendChild(situacaoTd);


    return alunoTr;
}