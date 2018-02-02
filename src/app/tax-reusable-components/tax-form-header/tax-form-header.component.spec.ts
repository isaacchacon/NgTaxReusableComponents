import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { TaxFormHeaderComponent } from './tax-form-header.component';

describe('TaxFormHeaderComponent', () => {
  let component: TaxFormHeaderComponent;
  let fixture: ComponentFixture<TaxFormHeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let input:HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxFormHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFormHeaderComponent);
    component = fixture.componentInstance;
	
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display a different test title', () => {
	  component.formTitle = 'Test Title';
	  fixture.detectChanges();
	  de = fixture.debugElement.query(By.css('h3'));
	el = de.nativeElement;
	  expect(el.textContent).toContain('Test Title');
	});
	
	it('should show the id on the textbox', () => {
	  component.ID = '233';
	  fixture.detectChanges();
	  de = fixture.debugElement.query(By.css('input'));
	  input = de.nativeElement;
	  expect(input.value).toBe('233');
	});
	
});
