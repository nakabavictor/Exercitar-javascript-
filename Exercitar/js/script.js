const Myobjs = [{
    nome: "Pedro",
}]

async function getTitle(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
}

async function showTitle(id) {
    const title = await getTitle(1);
    const heading = document.getElementById("Titulo");
      heading.innerText = title.title;
      heading.style.color = "red"
}
showTitle(1);

//se colocar () no final de uma funcao ela e chamada na hora
//Api e uma requisao e uma resposta nem sempre vai ser um texto ou dado, um status talvez, serve para comunicacao (as requisisoes e respostas sao feitas em http), deve sempre ao maximo chegar ao padrao restful;
//Verbos pra api: GET, POST, DELETE, PUT (atualizacao de registros), PATCH (atualizacao parcial ed registros)
//API RESTFUL 