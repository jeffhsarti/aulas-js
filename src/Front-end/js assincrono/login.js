/** Simulação do servidor/api (back) */
function login(userEmail, password, callback) {
  setTimeout(() => {
    callback({ userEmail, auth: true });
  }, 2000);
}

function getTarefas(userEmail, callback) {
  setTimeout(() => {
    callback([
      { id: 1, tarefa: "Fazer lição de casa" },
      { id: 2, tarefa: "Lavar louça" },
    ]);
  }, 1500);
}

/** Simulação do client (front) */

console.log("Evento de click no botão login");

login("jeffersonsarti@gmail.com", "senhaforte123", verificaCredenciais);

function verificaCredenciais(userCredentials) {
  if (userCredentials.auth) {
    console.log("Usuário autenticado, buscando tarefas...");
    getTarefas(userCredentials.userEmail, imprimeTarefas)
  } else {
    console.log("Autenticação falhou.");
  }
}

function imprimeTarefas(tarefas) {
  console.log("Tarefas recebidas com sucesso. Imprimindo...");
  tarefas.forEach((tarefa) => {
    console.log(tarefa);
  })
}

