function entrada(valor,tasa,periodo){
	this.valor=valor;
	this.tasa=tasa;
	this.periodo=periodo;
	this.calcular=calcular;
}

function calcular(){
	var valorFuturo=parseFloat(this.valor)*Math.pow(1+parseFloat(this.tasa)/100,parseInt(this.periodo));
  	document.write("Con valor: "+this.valor+'<br>'+"tasa: "+this.tasa+'<br>'+"periodo: "+this.periodo+'<br>'+" obtenemos un valor futuro de "+valorFuturo);
}

function llenado(){
	var valor=parseFloat(prompt("Valor:"));
	var tasa=parseFloat(prompt("Tasa:"));
	var periodo=parseInt(prompt("Periodo:"));

	obj1=new entrada(valor,tasa,periodo);
	obj1.calcular();
}

llenado();

