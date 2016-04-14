function prob1(a,b,c){
	if(a>=1 && a<=10 && b>=1 && b<=10 && c>=1 && c<=10 )
		return (a+b+c)/3
	else 
		return "ingrese números entre 1 y 10"

}

promedio=prob1(1,2,3)
console.log(promedio)
promedio=prob1(0,2,3)
console.log(promedio)