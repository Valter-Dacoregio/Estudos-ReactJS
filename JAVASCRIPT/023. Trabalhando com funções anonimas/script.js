

// UTILIZANDO FUNÇÃO ANÔNIMA
function adicionar(...numeros) {
	
	let total = numeros.reduce(function(total, proximo) {
		return total + proximo;
	});

	console.log(total);
}

adicionar(1,2,3,4,5);


// UTILIZANDO FUNÇÃO ANÔNIMA, ARROW FUNCTION
function adicionar2(...numeros) {
	
	let total = numeros.reduce((total, proximo) => {
		return total + proximo;
	});

	console.log(total);
}

adicionar2(1,2,3,4,5);


// UTILIZANDO FUNÇÃO ANÔNIMA, 
// ARROW FUNCTION REDUZIDA (SEM CRIAÇÃO DE ATRIBUTOS DENTRO DA FUNÇÃO)
function adicionar3(...numeros) {
	
	let total = numeros.reduce((total, proximo) => total + proximo);

	console.log(total);
}

adicionar3(1,2,3,4,5);


// UTILIZANDO FUNÇÃO ANÔNIMA, 
// ARROW FUNCTION REDUZIDA (SEM CRIAÇÃO DE ATRIBUTOS DENTRO DA FUNÇÃO)
function adicionar4(...numeros) {
	
	let total = numeros.reduce((total, proximo) =>  {
		let soma = total + proximo;
		return soma;
	});

	console.log(total);
}

adicionar4(1,2,3,4,5);


// REDUCE SIMPLES
function adicionar5(...numeros) {
	
	let reduceSimples = numeros.reduce((total, proximo) => proximo);

	console.log(reduceSimples);
}

adicionar5(1,2,3,4,5);


