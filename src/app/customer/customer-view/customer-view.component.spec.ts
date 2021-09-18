import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CustomerViewComponent } from './customer-view.component';

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   // expect(component).toBeTruthy();
   //expect(component.customers$).toBe('NOTICE BOARD');
   // we are accessing "h1"
   const title = fixture.debugElement.query(By.css('h1')).nativeElement;
   expect(title.innerHTML).toBe('List of Customers');
  });
});
