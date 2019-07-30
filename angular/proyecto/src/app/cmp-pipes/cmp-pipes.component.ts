import { Component, OnInit } from '@angular/core';
// import { resolve } from 'path';
// import { reject } from 'q';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  precio = 50;
  nombreProducto = 'auriculares malisimos';
  descripcionProducto = 'unos auriculares puta mierda';
  fechaCompra: Date = new Date();
  mascotas = ['pez', 'caballo', 'gato', 'perro'];
  txtFiltro = '';

  // msg = new Promise<string>( (resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('MENSAJE JOASUODJ OASJDASJILDASIO');
  //   }, 3000);
  // });
  constructor() { }

  ngOnInit() {
  }
  addMascota(refer) {
    this.mascotas.push(refer);
  }
}
