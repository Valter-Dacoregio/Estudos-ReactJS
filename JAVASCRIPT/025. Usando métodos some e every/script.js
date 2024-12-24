

// SOME EVERY

let nomes = ['Valter', 'Darlan', 'Ghért'];

let resultadoSome = nomes.some(nome => nome === 'Valter');
console.log(resultadoSome);




let pessoas = [
	{nome: 'Valter 1', idade: 24},
	{nome: 'Valter 2', idade: 25},
	{nome: 'Valter 3', idade: 26}
];

let resultadoEvery = pessoas.every(pessoa => pessoa.idade >= 24);
console.log(resultadoEvery);