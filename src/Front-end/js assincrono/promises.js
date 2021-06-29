// Backend
function login(email, password) {
  const validEmail = "jeffersonsarti@gmail.com";
  const validPassword = "senhaforte123";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === validEmail && password === validPassword) {
        resolve({ email, auth: true });
      } else {
        reject({ auth: false });
      }
    }, 2000);
  });
}

function getTarefas(email) {
  const db = [
    {
      email: "jeffersonsarti@gmail.com",
      tarefas: [
        { id: 1, tarefa: "Fazer lição de casa" },
        { id: 2, tarefa: "Lavar louça" },
      ],
    },
    {
      email: "paolaconsigliere@gmail.com",
      tarefas: [
        { id: 1, tarefa: "Bater uma bola" },
        { id: 2, tarefa: "Cobrar dinheiro do devedor" },
      ],
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = db.findIndex((user) => user.email === email);
      if (userIndex !== -1) {
        resolve(db[userIndex].tarefas);
      } else {
        reject({falha: "Usuário não possui tarefas."})
      }
    }, 1500);
  })
}

// Sintaxe .then .catch
// login("jeffersonsarti@gmail.com", "senhaforte123")
//   .then((credenciais) => {
//     getTarefas(credenciais.email)
//       .then((tarefas) => console.log(tarefas))
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));

// Sintaxe async await
async function fazLogin() {
  try {
    const credenciais = await login("jeffersonsarti@gmail.com", "senhaforte123");
    const tarefas = await getTarefas(credenciais.email);
    console.log(tarefas);
  } catch (error) {
    if (error.auth === false) {
      console.log("Credenciais inválidas.")
    } else if (error.falha === "Usuário não possui tarefas.") { 
      console.log("O usuário não possui tarefas cadastradas.")
    } else {
      console.log("Ops! Tivemos um erro inesperado.")
    }
  }
}

fazLogin();
