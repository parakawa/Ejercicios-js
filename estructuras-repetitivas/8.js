/*probar con prueba.html*/
function potencia(){
	var potencia=1;
	var num=prompt('Introduzca la base:');
	var exp=prompt('Introduzca el exponente:');
	var cont=1;
	while(cont<=exp){
		potencia=potencia*num;
		cont++;
	}
	alert(num+"^"+exp+" = "+potencia);
}

potencia();