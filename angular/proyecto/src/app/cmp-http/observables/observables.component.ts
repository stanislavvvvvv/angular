import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription, Observer, observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  suscripciones: Array<Subscription> = [];
  constructor() { }

  ngOnInit() {
    this.obsNumsPares();
    // this.conError()
  //  this.miInterval()
    // this.getNums();
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.suscripciones.forEach(sub => sub.unsubscribe());
  }
  getNums() {
    // cada 500 ms manda un numero
    const nums = interval(500);
    const  s = nums.subscribe( (numero) => {
      console.log(numero);
    });
    this.suscripciones.push(s);
  }
  miInterval() {
    const miIntervalObs = Observable.create( (observer: Observer<number>) => {
      let i = 0;
      setInterval( () => {
        observer.next(i);
        i++;
      }, 500);
    });
    const s = miIntervalObs.subscribe( (n) => {
      console.log(n);
    });
    this.suscripciones.push(s);
  }

  conError(){
    const obs = Observable.create( (observer: Observer<string>) =>{
      setTimeout( () => {
        observer.next('mensaje 1')
      },300)
      setTimeout( () => {
        observer.next('mensaje 2')
      },700)
      setTimeout( () => {
        observer.error('error....')
      },1300)
      setTimeout( () => {
        observer.complete()
      },2000)
    })
    const s = obs.subscribe(
      msg => console.log('mensaje' +msg),
      err => console.log('error' + err),
      () => console.log('se acabo el observale')
      
    )
    this.suscripciones.push(s)

  }

  obsNumsPares(){
    const obsNumsPares = Observable.create(
      (observer: Observer<number>) =>{
        setInterval( () => {
        const num = Math.floor(Math.random() * 101);
        observer.next(num);
        },200);
      }
    )
    const s = obsNumsPares.pipe(
        filter((n:number) => n % 2 === 0),
        map( (n:number) => n/2)
    ).subscribe((n)=>{
      console.log(n);
      
    })
    this.suscripciones.push(s)
  }

}
