function palindromo(){
	var palabra=prompt("Ingresa una frase que creas que es palindrómana");
	var palabra=palabra.toLowerCase().split("");
	var tamanio=palabra.length;
		for(var i=0;i<tamanio;i++)
			if(palabra[i]==" ")
				palabra.splice(i,1);
			var n=palabra.length;
			var aux=null;
		for(var j=0;j<n;j++)
			if(palabra[j]==palabra[n-j])
				aux.push(1);
			else 
				aux.push(0);
		while()

}
  
palindromo();
/*for(var j=0;j<palabra.length;j++)
		if()
	for(var i=0;i<tamanio;i++)
		if(palabra[i]==" ")
			delete palabra[i];
			document.write(palabra[i]);
		
*/


