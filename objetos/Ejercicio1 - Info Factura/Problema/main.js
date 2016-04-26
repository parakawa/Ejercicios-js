var factura = {
  empresa: {
    nombre:    "Laboratoria",
    direccion: "Av. Pardo 601",
    telefono:  "020349850"
  },
  cliente: {
    nombre:    "Galactilab",
    direccion: "La calle del pensamiento",
    telefono:  "2397423484"
  },
  elementos: [
    { descripcion: "Producto 1", cantidad: 0, precio: 0 },
    { descripcion: "Producto 2", cantidad: 0, precio: 0 },
    { descripcion: "Producto 3", cantidad: 0, precio: 0 }
  ],
  informacion: {
    igv:            1.19,
    total:          0,
    formaPago:      "contado"
  }
};

factura.total = function() {
  for(var i=0; i<this.elementos.length; i++) {
    this.informacion.total += this.elementos[i].cantidad * this.elementos[i].precio*this.informacion.igv;
  }

  factura.impresion = function() {
  this.total();
  alert("TOTAL = " + this.informacion.total + " euros");
}