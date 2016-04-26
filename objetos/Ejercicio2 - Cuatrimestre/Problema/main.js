function cuatrimestre()
{
var fecha=new Date;
var mes=fecha.getMonth()+1;

document.write('Estamos en el mes '+mes+'<br>');

if(mes <=4)
   {
   document.write('Nos encontramos en el primer cuatrimestre del año');
   }
   else if(mes <= 8)
   {
   document.write('Nos encontramos en el segundo cuatrimestre del año');
   }
   else
   {
   document.write('Nos encntramos en el tercer cuatrimestre del año');
   }
}

cuatrimestre();