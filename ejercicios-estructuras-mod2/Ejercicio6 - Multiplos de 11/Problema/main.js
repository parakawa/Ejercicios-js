var k=1;
var n=0;
var suma=0;
while(n<3000){
	n=11*k;
	if(n<3000){
		document.write(n+'<br>');
		suma=suma+n;
	}
		
	k++;

} 

document.write("la suma de todos los múltiplos de 11 menores a 3000 es "+suma);