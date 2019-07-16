import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements AfterViewInit {

  constructor() { }


@ViewChild(CounterComponent, {static: true}) counterComponent : CounterComponent;

increase(){
  console.log( this.counterComponent);
  //this.counterComponent.incresebyone();
}

decrease(){
  this.counterComponent.decresebyone();
}
   ngAfterViewInit() {
    console.log('Hello ', this.counterComponent); 
  }

}