import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispTypeComponent } from './disp-type.component';

describe('DispTypeComponent', () => {
  let component: DispTypeComponent;
  let fixture: ComponentFixture<DispTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
