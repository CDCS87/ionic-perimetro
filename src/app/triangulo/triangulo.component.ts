import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard } from "@ionic/angular/standalone";  
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/figuraGeometrica';
import { TrianguloEscaleno} from '../modelo/figuraGeometrica';



@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButton, IonList, IonItem, IonInput,FormsModule],
})
export class TrianguloComponent {
ladoAStr: string = "";
ladoBStr: string = "";
ladoCStr: string = "";
resultado: string ="";

  constructor() { }

  calcularPerimetro() {
    const ladoA = parseFloat(this.ladoAStr);
    const ladoB = parseFloat(this.ladoBStr);
    const ladoC = parseFloat(this.ladoCStr);
  
    // Validar que los lados sean números válidos y mayores a 0
    if (isNaN(ladoA) || ladoA <= 0) {
      this.resultado = 'Por favor, ingresa un número válido y mayor a 0 para el lado A.';
      return;
    }
    if (isNaN(ladoB) || ladoB <= 0) {
      this.resultado = 'Por favor, ingresa un número válido y mayor a 0 para el lado B.';
      return;
    }
    if (isNaN(ladoC) || ladoC <= 0) {
      this.resultado = 'Por favor, ingresa un número válido y mayor a 0 para el lado C.';
      return;
    }
  
    if (ladoA === ladoB && ladoB === ladoC) {
      this.resultado = "Es un triángulo equilátero.";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
      this.resultado = "Es un triángulo isósceles.";
    } else {
      this.resultado = "Es un triángulo escaleno.";
    }
  
    let figuraGeometrica;
    if (ladoA === ladoB && ladoB === ladoC) {
      figuraGeometrica = new TrianguloEquilatero("Triángulo Equilátero", ladoA);
    } else {
      figuraGeometrica = new TrianguloEscaleno("Triángulo Escaleno", ladoA, ladoB, ladoC);
    }
  

    const perimetro = figuraGeometrica.calcularPerimetro();
    this.resultado += ` El perímetro del triángulo es ${perimetro} cm`;
  }
}