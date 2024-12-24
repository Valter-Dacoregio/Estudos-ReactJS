
document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Refrigerante / 3 - Água Gelada </br>");

function pedir() {
	x = prompt("O que deseja pedir?");

	switch(x) {
		case "0":
			alert('Você pediu Sorvete!');
			break;
		case "1":
			alert('Você pediu Suco!');
			break;
		case "2":
			alert('Você pediu Refrigerante!');
			break;		
		case "3":
			alert('Você pediu Água Gelada!');
			break;
		default:
			alert('Ops, não temos esta opção!');
			break;
	}
}