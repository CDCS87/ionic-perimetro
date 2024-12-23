import { Component } from '@angular/core';
import { IonContent,IonSelect, IonSelectOption, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, CirculoComponent, TrianguloComponent, IonSelect, IonSelectOption, CommonModule],
})
export class HomePage {
  tipoFigura:string = ""

  constructor() {}

  esCirculo() { return this.tipoFigura == "circulo"}
  esTriangulo() { return this.tipoFigura == "triangulo"}

  elegirFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
  }
}