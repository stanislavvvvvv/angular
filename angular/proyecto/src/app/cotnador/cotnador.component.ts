import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotnador',
  templateUrl: './cotnador.component.html',
  styleUrls: ['./cotnador.component.css']
})
export class CotnadorComponent implements OnInit {
  contador = 0;

  constructor() { }

  ngOnInit() {
  }
  sumar(){
    this.contador += 1;
  }
  restar(){
    this.contador -= 1;
  }

}
