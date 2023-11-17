import { Component, OnInit, ViewChild } from '@angular/core';
import { Tasks } from '../tarefas.model';
import { TarefasService } from 'src/app/services/tarefas.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-tarefas',
  templateUrl: './registrar-tarefas.component.html',
  styleUrls: ['./registrar-tarefas.component.css']
})
export class RegistrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  public task!: Tasks;
  
  constructor(
    private taskService: TarefasService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.task = new Tasks(0,'', false);
  }

  public cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.taskService.regiser(this.task);
      this.router.navigate(["tarefas/lista"]);
    }
  }

}
