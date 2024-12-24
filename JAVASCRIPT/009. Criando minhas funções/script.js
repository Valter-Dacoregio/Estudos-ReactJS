
// Função entrar

function entrar() {
	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome?');

	if (texto == null || texto == '') {
		alert('Digite seu nome novamente!');
		area.innerHTML = 'Bem vindo ...';
		// entrar();
	} else {
		area.innerHTML = 'Bem vindo ' + texto;
	}
}

function entrar2(nome) {
	var area = document.getElementById('area2');
	var texto = prompt('Digite seu sobrenome?');
	area.innerHTML = nome + ' ' + texto;
	
}