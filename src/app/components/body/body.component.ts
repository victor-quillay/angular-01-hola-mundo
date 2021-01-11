import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Un grand poder, requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  personajes: string[] = [
    'Spiderman',
    'Tortuga Ninja',
    'Ironman'
  ];

  

}
