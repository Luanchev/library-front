import { ComponentFixture, TestBed } from '@angular/core/testing';
import LibroFormComponent from './libro-form-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


describe('LibroFormComponent', () => {
  let component: LibroFormComponent;
  let fixture: ComponentFixture<LibroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroFormComponent, ReactiveFormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
