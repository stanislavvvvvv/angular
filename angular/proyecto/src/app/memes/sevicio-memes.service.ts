import { Injectable, EventEmitter } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class SevicioMemesService {
  memes: Array<Meme> = [];
  constructor() { }
  getMemes(): Array<Meme> {
    return this.memes;
  }
  addMeme(meme: Meme) {
    this.memes.push(meme);
  }
  deleteMeme() {

  }

}
