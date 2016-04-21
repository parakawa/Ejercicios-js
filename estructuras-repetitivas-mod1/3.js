/*probar en prueba.html*/

function suma(){
              var suma=0;
              for(var i=0; i<10; i++){ 
                  var number = prompt('Introduzca el número:['+i+']=');        
                  if(!isNaN(number) && number!=''){
                      suma = suma + parseInt(number);                      
                  }
                  else{
                      alert('Introduce un número!');
                      i--;
                  }                        
              }
              alert('La suma de los números es: '+ suma);
      }

suma();