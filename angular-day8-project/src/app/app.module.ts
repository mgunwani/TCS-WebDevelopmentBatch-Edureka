import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CalculationComponent]
})
export class AppModule { }
