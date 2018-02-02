import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TaxReusableComponentsModule} from './tax-reusable-components/tax-reusable-components.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TaxReusableComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
