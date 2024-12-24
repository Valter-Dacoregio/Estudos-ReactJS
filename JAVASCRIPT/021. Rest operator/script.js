
function minhaLista(nomes) {
	console.log(nomes);
}
minhaLista("Valter", "Darlan", "Ghért", "Andrey");

function minhaLista2(nomes) {
	console.log(nomes);
}
minhaLista2(["Valter", "Darlan", "Ghért", "Andrey"]);


// USANDO REST OPERATOR
function minhaLista3(...nomes) {
	console.log(nomes);
}
minhaLista3("Valter", "Darlan", "Ghért", "Andrey");



console.log("-----------------------------");



function cadastrar(usuarios, ...novosUsuarios) {
	console.log(usuarios);
	console.log(novosUsuarios);

	let todosUsuarios = [
		...usuarios, 
		...novosUsuarios
	];

	console.log(todosUsuarios);
}

let usuarios = ["Ana", "Bianca"];

let novosUsuarios = cadastrar(usuarios, "Camila", "Daniela");