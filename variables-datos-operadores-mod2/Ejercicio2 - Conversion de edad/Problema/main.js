function edad(){
	var name=prompt("Cuál es tu nombre?");
	var edad=prompt("Hola "+name+" , cuál es tu edad?");
	document.write("Bien, "+name+" puedo decirte que has vivido, por lo menos, "+(edad*365)+" días. Qué estás haciendo con tu vida?");
}

edad();