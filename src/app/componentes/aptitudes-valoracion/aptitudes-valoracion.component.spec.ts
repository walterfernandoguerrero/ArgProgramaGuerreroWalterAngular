import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesValoracionComponent } from './aptitudes-valoracion.component';

describe('AptitudesValoracionComponent', () => {
  let component: AptitudesValoracionComponent;
  let fixture: ComponentFixture<AptitudesValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudesValoracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudesValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
