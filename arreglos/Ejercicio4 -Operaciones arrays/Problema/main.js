function operaciones(){
	var valores = [true, 5, false, "hola", "adios", 2];
	document.write("El arreglo es "+valores);
	if(valores[2]>=valores[5])
		document.write("El mayor de los valores numéricos es "+valores[2]);
	else
		document.write("El mayor de los valores numéricos es "+valores[5]);
	if(valores[0]==true)
		return true;
	else 
		return false;
	document.write('<br>'+"A continuación, la tabla de multiplicar de los valores numéricos");
	document.write('<br>'+valores[2]+"+"+valores[2]+"="+(valores[2]+valores[5]);

}

operaciones();
