import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { TaxFormTitleBarComponent } from './tax-form-title-bar.component';

describe('TaxFormTitleBarComponent', () => {
  let component: TaxFormTitleBarComponent;
  let fixture: ComponentFixture<TaxFormTitleBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxFormTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFormTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display the first title', () => {
	  component.firstTitle = 'First Title';
	  fixture.detectChanges();
	  de = fixture.debugElement.query(By.css('h4'));
		el = de.nativeElement;
	  expect(el.textContent).toContain('First Title');
	});
	
	it('should display two titles', () => {
	  component.firstTitle = 'First Title';
	  component.secondTitle = 'Second Title';
	  fixture.detectChanges();
	  const x  = fixture.debugElement.queryAll(By.css('h4'));
		el = x[0].nativeElement;
		expect(x.length).toBe(2);
	  expect(el.textContent).toContain('First Title');
		el = x[1].nativeElement;
	   expect(el.textContent).toContain('Second Title');
	   
	});
	
		it('should also display three titles', () => {
	  component.firstTitle = 'First Title';
	  component.secondTitle = 'Second Title';
	  component.thirdTitle = "Third One";
	  fixture.detectChanges();
	  const x  = fixture.debugElement.queryAll(By.css('h4'));
	  expect(x.length).toBe(3);
		el = x[0].nativeElement;
	  expect(el.textContent).toContain('First Title');
		el = x[1].nativeElement;
	   expect(el.textContent).toContain('Second Title');
	   el = x[2].nativeElement;
	   expect(el.textContent).toContain('Third One');
	});
	
});
