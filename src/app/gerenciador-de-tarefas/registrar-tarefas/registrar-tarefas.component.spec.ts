import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTarefasComponent } from './registrar-tarefas.component';

describe('RegistrarTarefasComponent', () => {
  let component: RegistrarTarefasComponent;
  let fixture: ComponentFixture<RegistrarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTarefasComponent]
    });
    fixture = TestBed.createComponent(RegistrarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
