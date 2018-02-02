import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tax-form-title-bar',
  templateUrl: './tax-form-title-bar.component.html',
  styleUrls: ['./tax-form-title-bar.component.css']
})
export class TaxFormTitleBarComponent implements OnInit {

  @Input()
  firstTitle ="";
  @Input()
  secondTitle = "";
  @Input()
  thirdTitle = "";

  constructor() { }

  ngOnInit() {
  }

}
