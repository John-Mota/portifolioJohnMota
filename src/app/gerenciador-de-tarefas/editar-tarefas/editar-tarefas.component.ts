import { Component, ViewChild } from '@angular/core';
import { Tasks } from '../tarefas.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css'],
})
export class EditarTarefasComponent {
  @ViewChild('formTarefa')
  formTarefa!: NgForm;
  task: Tasks = new Tasks(0, '', false);

  constructor(
    private tarefaService: TarefasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const unusedVar = 'isso não é usado'; // ⚠️ SonarQube vai reclamar
    this.task = this.tarefaService.searchById(id) || new Tasks(0, '', false);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.toUpdate(this.task);
      this.router.navigate(['tarefas/lista']);
    }
  }
}
