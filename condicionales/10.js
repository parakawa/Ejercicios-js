function manodeobra(articulo,materia){
	if (articulo==3 || articulo==4)
		return materia*0.75;
	else if (articulo==1 || articulo==5)
		return materia*0.8;
	else if (articulo==2 || articulo==6)
		return materia*0.85;
	else if(articulo<1 && articulo>6)
		return "ingrese códigos entre 1 y 6"
}

function fabricacion(articulo,materia){
	if (articulo==2 || articulo==5)
		return materia*0.3;
	else if (articulo==3 || articulo==6)
		return materia*0.35;
	else if (articulo==1 || articulo==4)
		return materia*0.28;
	else if(articulo<1 && articulo>6)
		return "ingrese códigos entre 1 y 6"
}

function produccion(articulo,materia){
	if(articulo<7 && articulo>0)
		return materia+manodeobra(articulo,materia)+fabricacion(articulo,materia);
	else 
		return "ingrese códigos entre 1 y 6";
}

function venta(articulo,materia){
	if(articulo<7 && articulo>0)
		return produccion(articulo,materia)*1.45;
	else 
		return "ingrese códigos entre 1 y 6";
}

console.log("El precio de venta del artículo elegido es: s/."+venta(1,0.5));

