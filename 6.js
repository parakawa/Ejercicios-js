function costoplato(personas){
	if(personas<=200)
		return 95;
	else if(personas>200 && personas<=300)
		return 85;
	else if(personas>300)
		return 75;
}

function costobanquete(personas){
	return costoplato(personas)*personas;
}

console.log("El costo del banquete es $"+costobanquete(301));