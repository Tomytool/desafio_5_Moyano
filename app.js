class figura {
  constructor(ancho, alto, numeroLados) {
    this.ancho = ancho;
    this.alto = alto;
    this.numeroLados = numeroLados;
  }
  calculo() {
    if (this.numeroLados == 3) {
      console.log('Tu figura es un triangulo.');
      let area = (this.ancho * this.alto) / 2;
      console.log('Su área es: ' + area);
    }
    if (this.numeroLados == 4 && this.alto == this.ancho) {
      console.log('Tu figura es un cuadrado.');
      let area = this.alto * this.ancho;
      console.log('Su área es: ' + area);
    }
    if (this.numeroLados == 4 && this.alto != this.ancho) {
      console.log('Tu figura es un rectangulo.');
      let area = this.alto * this.ancho;
      console.log('Su área es: ' + area);
    }
  }
}

const ingresoFigura = () => {
  let condicion = true;
  let anchoFigura, altoFigura, datoNumeroLados;
  while (condicion) {
    datoNumeroLados = parseInt(
      prompt('Ingrese el numero de lados de su figura:')
    );
    condicion = false;
    if (datoNumeroLados < 3 || datoNumeroLados > 4) {
      alert('debe ingresar un numero igual a 3 o 4');
      condicion = true;
    }
  }
  condicion = true;
  while (condicion) {
    anchoFigura = parseInt(prompt('Ingrese la base de la figura:'));
    altoFigura = parseInt(prompt('Ingrese el alto de la figura'));
    condicion = false;
    if (anchoFigura < 0 || altoFigura < 0) {
      alert('la base y el alto debe ser mayor a 0');
      condicion = true;
    }
  }
  const figuraIngresada = new figura(anchoFigura, altoFigura, datoNumeroLados);
  figuraIngresada.calculo();
};
