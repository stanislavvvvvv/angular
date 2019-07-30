import { Component, OnInit } from '@angular/core';
import { SevicioMemesService } from './sevicio-memes.service';
import { Meme } from './meme';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memeactual: Meme = new Meme();
  memes: Array<Meme>;
  constructor(private servicio: SevicioMemesService) { }

  ngOnInit() {
    this.memes = this.servicio.getMemes();
  }
  cambiardatos(event) {
      this.memeactual[event.prop] = event.val;
  }

}
