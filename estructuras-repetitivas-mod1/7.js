/*probar con prueba.html*/
function tabla(){
	var num=prompt('Introduzca un número:');
	var producto=prompt('Introduzca el número de potencia al que quiere llegar:');
	for(var i=0; i<=producto; i++)
		alert(num+" * "+i+" = "+num*i);
}

tabla();