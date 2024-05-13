import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroModeloComponent } from './genero-modelo.component';

describe('GeneroModeloComponent', () => {
  let component: GeneroModeloComponent;
  let fixture: ComponentFixture<GeneroModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroModeloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneroModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
