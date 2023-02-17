import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispBikeComponent } from './disp-bike.component';

describe('DispBikeComponent', () => {
  let component: DispBikeComponent;
  let fixture: ComponentFixture<DispBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
