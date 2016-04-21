/*function recaudo(){
	var c=parseInt(prompt("Ingresa el número de sucursales:"));
	var ventaSucursal=0;
	var ventaTienda=0;
	for(i=1;i<=c;i++){
		var t=parseInt(prompt("Ingresa el número de tiendas en la sucursal "+i+" :"));
		for(j=1;j<=t;j++){
			var n=parseInt(prompt("Ingresa el número de empleados en la tienda"+j+" :"));
				for(k=1;k<=n;k++)
					var recaudoEmpleado=parseInt(prompt("Ingresa, en soles, lo recaudo por el empleado"+k+" :"));
					document.write("Lo recaudado por el empleado número "+k+" de la tienda "+j+" de la sucursal "+i+"fue de s/."+recaudoEmpleado+'<br>');
		}
	}	
}

recaudo();

jaja me complico la vida
*/

function recaudo(){
	var c=parseInt(prompt("Ingresa el número de sucursales:"));
	var t=parseInt(prompt("Ingresa el número de tiendas en cada sucursal:"));
	var n=parseInt(prompt("Ingresa el número de empleados que trabajan en cada tienda:"));
	var vTienda=0;
	var vSucursal=0;
	for(i=1;i<=c;i++)
	for(j=1;j<=t;j++)
	for(k=1;k<=n;k++){
		var vEmpleado=parseInt(prompt("Ingresa la venta del empleado "+k+" de la tienda "+j+" y sucursal "+i));
		document.write("La venta del empleado "+k+" de la tienda "+j+" y sucursal "+i+" fue de s/."+vEmpleado+'<br>');
	}
}

recaudo();