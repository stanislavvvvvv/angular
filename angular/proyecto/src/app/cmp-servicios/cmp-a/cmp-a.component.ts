import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  datos: Array<string> = [];
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
  }
  enviarDato(dato: string){
    this.datosService.enviar(dato);
  }

  guardarDato(dato: string){
    this.datosService.addDato(dato);
  }

}
