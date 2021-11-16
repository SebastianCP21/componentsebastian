import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UglyButtonComponent } from './ugly-button.component';

describe('UglyButtonComponent', () => {
  let component: UglyButtonComponent;
  let fixture: ComponentFixture<UglyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UglyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UglyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
