/*function distancia(){
	var p1=parseInt(prompt("Ingrese el primer punto en metros"));
	var p2=parseInt(prompt("Ingrese el segundo punto en metros"));
	var x=(p2-p1)/2;
	alert('El punto de encuentro será alcanzado a los '+p1+x+' metros');
}

distancia();
*/

function aguasCalientes(){
	var p1=parseInt(prompt("Ingrese el primer punto en metros"));
	var p2=parseInt(prompt("Ingrese el segundo punto en metros"));
	var x=0;
	do{
		x++;
	} while(p1+x!=p2-x);
	document.write("Se encontrarán a "+(p1+x)+" metros");
}
aguasCalientes();


