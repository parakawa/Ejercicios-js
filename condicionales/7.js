function cobro(alumnos){
	if (alumnos>=100)
		return 65;
	else if (alumnos>=50 && alumnos<100)
		return 70;
	else if (alumnos>=30 && alumnos<50)
		return 95;
	else if(alumnos<30)
		return 4000/alumnos;
}

function pago(alumnos){
	if(alumnos<30)
		return 4000;
	else 
		return cobro(alumnos)*alumnos;
}

console.log("El cobro por alumno es de $"+cobro(29)+"y el pago a la compañía de autobuses es de $"+pago(29));