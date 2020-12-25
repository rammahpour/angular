import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshareComponent } from './myshare.component';

describe('MyshareComponent', () => {
  let component: MyshareComponent;
  let fixture: ComponentFixture<MyshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
