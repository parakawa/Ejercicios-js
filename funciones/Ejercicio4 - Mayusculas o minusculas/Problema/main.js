function maymin(){
	var palabra=prompt("Ingresa una palabra:");
	if(palabra==palabra.toUpperCase())
		alert("La palabra "+palabra+" es todo mayúsculas");
	else if(palabra==palabra.toLowerCase())
		alert("La palabra "+palabra+" es todo minúsculas");
	else 
		alert("La palabra "+palabra+" es mixta, tiene mayúsculas y minúsculas");
}

maymin();