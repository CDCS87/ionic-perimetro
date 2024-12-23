import { Component } from '@angular/core';
import { IonList, IonInput, IonItem, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/figuraGeometrica';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButton, IonList, IonInput, IonItem, FormsModule, IonCardHeader]
})
export class CirculoComponent {
radioStr: string = "";
resultado: string ="";

  constructor() {}
  
  calcularPerimetro() {
    // Convierte el radio ingresado a número
    const radio = parseFloat(this.radioStr);

    if (isNaN(radio) || radio <= 0) {
      this.resultado = 'Por favor, ingresa un número válido y mayor a 0';
      return;
    }

    const figuraGeometrica = new Circulo('Círculo', radio);
    const perimetro = figuraGeometrica.calcularPerimetro();
    this.resultado = `El perímetro del círculo es ${perimetro.toFixed(2)} cm`;
  }
}



