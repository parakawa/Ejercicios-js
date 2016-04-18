function costokm(bus){
	switch(bus) {
    case 'a':
        return 2;
        break;
    case 'b':
        return 2.5;
        break;
    case 'c':
        return 3;
        break;
    default:
        return "tipo de bus incorrecto"
	}
}

function costo(bus,personas,kilometros){
    costokm=costokm(bus);
    if(personas<20){
            return 20*costokm/personas*kilometros;
        }
        else 
            return costokm*kilometros;
}

/*console.log(costo('a',10,100));*/
console.log("El costo de viaje es $" +costo('b',19,100));
