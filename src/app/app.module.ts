import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CounterComponent, CounterParentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
