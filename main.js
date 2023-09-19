const form = document.getElementById('form-tarefa');
const nomeTarefa = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(e);

    adicionaLinha ();
    atualizaTask ();

}) 

function adicionaLinha() {
        let inputTask = document.getElementById('new-task');
         
    if (nomeTarefa.includes(inputTask.value)) {
        alert(`Tarefa "${inputTask.value}" já foi adicionado`);
    } else {
        nomeTarefa.push(inputTask.value);
         
        let linha = '<li>';
        linha +=`<li>>${inputTask.value}</li>`;
        linha += '</li>';
        linhas += linha;
    }
    inputTask = '';
}

function atualizaTask () {
    const corpoList = document.getElementsByClassName('task-class');
    corpoList.innerHTMl = linhas;
}
