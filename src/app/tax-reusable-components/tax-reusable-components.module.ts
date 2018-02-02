import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormHeaderComponent } from './tax-form-header/tax-form-header.component';
import { TaxFormTitleBarComponent } from './tax-form-title-bar/tax-form-title-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaxFormHeaderComponent, TaxFormTitleBarComponent],
  exports:[TaxFormHeaderComponent,TaxFormTitleBarComponent]
})
export class TaxReusableComponentsModule { }
