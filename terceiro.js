var campoFiltrar = document.querySelector('#filtrar-tabela') ;

campoFiltrar.addEventListener("input", function() {
    var alunos = document.querySelectorAll(".aluno");

    if (this.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];

            var nomeTd = aluno.querySelector('.info-nome');
            var nome = nomeTd.textContent;

            
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                aluno.classList.remove("invisivel");
            } else {
                aluno.classList.add("invisivel");
            }
        }

    }   else {
        for (var i = 0; i < alunos.length; i++) {
             var aluno = alunos[i];
            aluno.classList.remove("invisivel");
            }
    }

});