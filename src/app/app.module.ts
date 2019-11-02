import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl);

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
