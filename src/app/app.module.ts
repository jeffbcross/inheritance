import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { InputComponent } from './input/input.component';
import { DrawInputComponent } from './draw-input/draw-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    InputComponent,
    DrawInputComponent,
    CheckboxComponent
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
