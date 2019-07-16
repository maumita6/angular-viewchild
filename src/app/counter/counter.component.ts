import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
message:string='';
count:number=0;

  constructor() { }

  
  incresebyone(){
  this.count = this.count +1;
  this.message = 'Counter '+ this.count;
  }
  decresebyone(){
  this.count = this.count - 1;
  this.message = 'Counter '+ this.count;
  }
}