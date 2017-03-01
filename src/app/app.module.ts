import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
