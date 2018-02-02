import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tax-form-header',
  templateUrl: './tax-form-header.component.html',
  styleUrls: ['./tax-form-header.component.css']
})
export class TaxFormHeaderComponent implements OnInit {

  constructor() { }
  
  @Input()
  formTitle: string;
  
  @Input()
  ID: string = "";
  
  ngOnInit() {
  }
}
