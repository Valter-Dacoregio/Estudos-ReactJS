

// includes
// endsWith
// startWith

let nomes = ['Valter', 'Darlan', 'Ghért'];

let incluido = nomes.includes('Valter');

if(incluido) {
	console.log('VALTER ESTÁ NA LISTA');
} else {
	console.log('VALTER NÃO ESTÁ NA LISTA');
}


let nome = 'Valter';

let terminaCom = nome.endsWith('r');

if(terminaCom) {
	console.log('O NOME TERMINA COM \'r\'');
} else {
	console.log('O NOME NÃO TERMINA COM \'r\'');
}



let iniciaCom = nome.startsWith('V');

if(iniciaCom) {
	console.log('O NOME INICIA COM \'V\'');
} else {
	console.log('O NOME NÃO INICIA COM \'V\'');
}