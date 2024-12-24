

function cadastroPessoa(info) {
	let novosDados = {
		...info,
		cargo: 'Programador',
		status: 1,
		codigo: '123456'
	};

	return novosDados;
}


let pessoaCompleta = cadastroPessoa(
	{
		nome: 'Valter', 
		sobrenome: 'Dacoregio', 
		anoInicio: 2018
	}
);

console.log(pessoaCompleta);