function promedio(){
var miembros=prompt('Ingresa el número de miembros:');
suma=0;
for(i=1;i<=miembros;i++){
	estatura=prompt('Ingresa la estatura del miembro número '+i+': ');
	suma=suma+parseInt(estatura);
	}
	
	alert('El promedio de estatura es: '+suma/miembros);
}

promedio();