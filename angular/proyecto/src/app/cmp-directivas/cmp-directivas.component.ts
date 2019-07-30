import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  color = 'blue';
  items = ['uno','dos','tres']
  mostrarItem=true;
  constructor() { }

  ngOnInit() {
  }
  toggleMostrarItem() {
    this.mostrarItem = !this.mostrarItem
  }

}
