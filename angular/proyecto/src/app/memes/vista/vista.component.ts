import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';
import { SevicioMemesService } from '../sevicio-memes.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  @Input() imagenUrl = '';
  @Input() color = '';
  @Input() isFav = '';

  constructor(private servicio: SevicioMemesService) { }

  ngOnInit() {
    console.log(this.color)
  }

}
