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
