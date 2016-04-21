function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");

  }

function division(){
	var D=parseInt(prompt("Ingresa el dividendo: "));
		validarSiNumero(D);
	var d=parseInt(prompt("Ingresa el divisor: "));
		validarSiNumero(d);
	var resultado=D/d;
	document.write("El resultado de la división es: "+resultado);
}

division();

