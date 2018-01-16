import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
// import {CommonModule} from '@angular/common';
import {MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports:      [  BrowserModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
