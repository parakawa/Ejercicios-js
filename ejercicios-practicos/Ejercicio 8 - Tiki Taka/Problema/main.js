function tikiTaka(){
	var n=parseInt(prompt("Ingresa el número de ventas:"));
	var may1000=0;
	var may500=0;
	var menor500=0;
	var ventaTotal=0;
	for(var i=1;i<=n;i++){
		venta=parseInt(prompt("Ingresa la venta número "+i+" en soles :"));
		ventaTotal=ventaTotal+venta;
		if(venta>1000)
			may1000++;
		else if(venta>500 && venta<=1000)
			may500++;
		else if(venta<=500)
			menor500++;
	}
	document.write("El monto total vendido fue s/."+ventaTotal+'<br>'+"Las ventas mayores a s/1000 fueron "+may1000+'<br>'+"Las ventas mayores a s/500 y menores a s/1000 fueron "+may500+'<br>'+"Las ventas menores a s/500 fueron "+menor500+'<br>');
}

tikiTaka();
