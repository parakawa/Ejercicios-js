function Persona(peso,altura){
	this.peso=peso;
	this.altura=altura;
	this.imc=imc;
}

function imc(){
	var imc=parseFloat(this.peso)/Math.pow(parseFloat(this.altura),2);
	document.write("Siendo el peso "+this.peso+"kg, y la altura "+this.altura+"metros, el IMC es "+imc);
}

function calcularImc(){
	var peso=prompt("Ingresa el peso en kilogramos: ");
	var altura=prompt("Ingresa la estatura en metros: ");
	persona1=new Persona(peso,altura);
	persona1.imc();
}

calcularImc();