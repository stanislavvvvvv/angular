import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  nombre: string = 'stanislav' + 2;
  editando = true;

  constructor() { }

  ngOnInit() {
  }

  toggleEditando() {
    this.editando = !this.editando;
  }
  resetNombre() {
    this.nombre = '';
  }
  cambiarNombre(event) {
    this.nombre = event.target.value;
  }
  mostrar(inputRef) {
    console.log(inputRef.value);
  }
}
