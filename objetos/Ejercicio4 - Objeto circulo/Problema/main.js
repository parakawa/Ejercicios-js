function Circulo(radio){
	this.radio=radio;
	this.area=area;
	this.longitud=longitud;
}

function area(){
	var area=(Math.pow(parseFloat(this.radio),2)*Math.PI).toFixed(2);
	document.write("El área del círculo es:"+area+'<br>');

}

function longitud(){
	var longitud=(2*parseFloat(this.radio)*Math.PI).toFixed(2);
	document.write("La longitud de círculo es:"+longitud+'<br>');

}

function llenado(){
	var radio=prompt("Ingresa un radio para calcular área y longitud:");
	circulo1=new Circulo(radio);
	circulo1.area();
	circulo1.longitud();
}

llenado();