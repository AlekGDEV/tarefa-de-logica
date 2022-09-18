let alunos = [
  ['Alexandre', 'AlexandreGDEV@outlook.com', '85999481675'],
  ['Bruno', 'bruno@email.com', '85999999999'],
  ['Alicia', 'alicia@email.com', '85999999999'],
  ['Marcelo', 'marcelo@email.com', '85999999999'],
  ['Italo', 'italo@email.com', '85999999999']
];

function adicionar() {
  pagina_novo.style.display = 'block';
  pagina_listar.style.display = 'none'; 
}

function adding_aluno() {
  event.preventDefault();
  alunos.push([`${nome.value}`,`${email.value}`, `${telefone.value}`])
  listar();
}

function listar() {
  pagina_listar.style.display = 'block';
  pagina_novo.style.display = 'none'; 

  function atualizar_lista() {
    tabela_alunos.innerHTML = ' ';
  }
  atualizar_lista();
  alunos.forEach(function (cadaAluno) {
      tabela_alunos.innerHTML += 
      `
      <tr>
          <td>${cadaAluno[0]}</td>
          <td>${cadaAluno[1]}</td>
          <td>${cadaAluno[2]}</td>
      </tr>
      `
  });
}