function output(){
	var name=prompt("Cuál es tu nombre?");
	var apellido=prompt("Hola "+name+" , cuál es tu apellido?");
	var edad=parseInt(prompt("Ahora cuéntame, cuántos años tienes?"));
	var distrito=prompt("No es que te quiera acosar ni nada, pero, en qué distrito vives?");
	for(i=1;i<30;i++)
	document.write("=");
	document.write('<br>'+"Hola, "+name+" "+apellido);
	document.write('<br>'+"Adiós, habitante del distrito de "+distrito+'<br>');
	for(i=1;i<30;i++)
	document.write("=");
}

output();