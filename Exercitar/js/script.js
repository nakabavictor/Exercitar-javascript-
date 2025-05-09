//Mais basico
const iniciarContador = (tempo, callback) => {
  let contador = tempo;

  const intervalo = setInterval(() => {
    console.log(contador);
    contador--;
    if (contador < 1) {
      clearInterval(intervalo);
      callback();
    }
  }, 1000);
};
iniciarContador(2, () => {
  console.log("Finalizei a execução da contagem regressiva. Valeu, falou!");
});

let tasks = [
  {
    descricao: "Passear com o cachorro",
    prioridade: 1,
    status: "concluída",
  },
  {
    descricao: "Comprar ingredientes para o almoço",
    prioridade: 1,
    status: "concluída",
  },
  {
    descricao: "Fazer o almoço",
    prioridade: 1,
    status: "pendente",
  },
  {
    descricao: "Ir para a academia",
    prioridade: 2,
    status: "pendente",
  },
  {
    descricao: "Resolver exercício do curso",
    prioridade: 3,
    status: "concluída",
  },
  {
    descricao: "Ir para o futebol",
    prioridade: 1,
    status: "pendente",
  },
  {
    descricao: "Comprar loucuras",
    prioridade: 1,
    status: "concluída",
  },
  {
    descricao: "comprar agua",
    prioridade: 1,
    status: "concluída",
  },
];

console.log(tasks);

//adicionar tarefas
tasks.push(
  {
    descricao: "Ver video sobre Node.js",
    prioridade: 2,
    status: "pendente",
  },
  {
    descricao: "Comprar ingredientes para sobremesa",
    prioridade: 2,
    status: "concluída",
  }
);

console.log(tasks);

//modificar um objeto dentro do array
tasks[0].descricao = "Dormir";
const onj1 = tasks[0];
console.log(onj1);

//rremover tarefas
const tarefasPendentes = tasks.filter(({ status }) => status === "pendente");
console.log(tarefasPendentes);

console.log(tasks);

//contar as tarefas pendentes
const tarefaspendcount = tasks.reduce(
  (prev, next) => (next.status === "pendente" ? prev + 1 : prev),
  0 // o numero inicializa o prev e o next "pega" o valor com o "parametro (.algumacoisa)" e depois faz a funcao, sempre seguindo em frente com o proximo valor/obj"
);
console.log(tarefaspendcount);

//ver se as tarefas eestao todas concluidas
let isEveryTaskDone = tasks.every((task) => task.status === "concluída");
console.log(isEveryTaskDone);

//tarefas concluidas
tasks = tasks.map((tasks) => ({
  tasks,
  status: "concluída",
}));

console.log(tasks);

//ver se as tarefas eestao todas concluidas novamente
isEveryTaskDone = tasks.every((task) => task.status === "concluída");
console.log(isEveryTaskDone);

/////API, Promisses e async await

const Myobjs = [
  {
    nome: "Pedro",
  },
];

async function getTitle(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
}

async function showTitle(id) {
  const title = await getTitle(1);
  const heading = document.getElementById("Titulo");
  heading.innerText = title.title;
  heading.style.color = "red";
}
showTitle(1);

//se colocar () no final de uma funcao ela e chamada na hora
//Api e uma requisao e uma resposta nem sempre vai ser um texto ou dado, um status talvez, serve para comunicacao (as requisisoes e respostas sao feitas em http), deve sempre ao maximo chegar ao padrao restful;
//Verbos pra api: GET, POST, DELETE, PUT (atualizacao de registros), PATCH (atualizacao parcial ed registros)
//API RESTFUL

const obj = [
  {
    nome: "Lucas",
    idade: 19,
    "mangas/manhwhas lidos": ["Steins gate", "Homunculus", "Soul eater"],
    detalhesprofissao: {
      profissao: "barista",
      empresa: "xxx",
      salario: "xxxx,xx",
    },
  },
  {
    nome: "Pedro",
    idade: 18,
    "mangas/manhwhas lidos": ["Black clover", "Solo leveling", "Nano machine"],
    detalhesprofissao: {
      profissao: "desenvolvedor",
      empresa: "xxx",
      salario: "xxxx,xx",
    },
  },
];

const objjason = JSON.stringify(obj);

const obj2 = JSON.parse(objjason);

console.log(obj);
console.log(typeof obj);

console.log(objjason);
console.log(typeof jasondata);

console.log(obj2);
console.log(typeof obj2);

const names = obj.map((obj) => obj.nome);
console.log(names);

//PROMISES

const promessa = new Promise((resolve, reject) => {
  const name = "Matheus";

  if (name == "Matheus") {
    resolve("Usuario Matheus foi encontrado");
  } else {
    reject("Usuario Matheus nao foi encontrado");
  }
});

promessa.then((dado) => {
  console.log(dado);
});

//e bom utilizar try catch, tem como utilizar then em cadeia
//Promisse.all([],then((dado) => {})) resolve todas as promisses juntas
//promisse e de forma asincrona. nao bloqueia o resto do codigo

//ordernar as tarefas por prioridade
const sortedTasks = tasks.sort((prevTask, currentTask) => prevTask.prioridade - currentTask.prioridade);
console.log("Por prioridade abaixo:");
console.log(sortedTasks);
