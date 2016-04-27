/*ejecutar en consola*/

 var prompt = require("prompt");
 prompt.start();

function fibonacci(terminos){
	i=1;
	j=1;
	cont=3;
	console.log(i);
	console.log(j);
	while(cont<=terminos){
		k=i+j;
		i=j;
		j=k;
		console.log(k);
		cont++;
	}
}


prompt.get(['n'], function (err, result) {
	var n=parseInt(result.n);
    console.log( fibonacci(result.n));
   }); 