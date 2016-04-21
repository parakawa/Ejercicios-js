/*probar con prueba.html*/

function cuboycuarta(){
	for(var i=0; i<10;i++){
		var number = prompt('Introduzca el número:['+i+']=');
		cubo=1;
		cuarta=1;
         for (var k=1;k<=3;k++)
         	{cubo=cubo*number;}
         for (var j=1;j<=4;j++)
         	{cuarta=cuarta*number;}
         alert('El cubo de '+number+' es '+cubo+' y su cuarta es '+cuarta);
     }

}

cuboycuarta();
