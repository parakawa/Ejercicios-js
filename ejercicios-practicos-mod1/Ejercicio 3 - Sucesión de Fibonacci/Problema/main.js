/*ejecutar en consola*/
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

fibonacci(13);