import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tarefas.model';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tasks!: Tasks[];

  constructor(private tasksService: TarefasService) {

  }
  ngOnInit(): void {
    this.tasks = this.lisarTodos()
    
  }

  public lisarTodos(): Tasks[] {
    return this.tasksService.listAll()
  }

  public remover($event: any, tasks: Tasks): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tasks.nome + '"?')) {
      this.tasksService.remove(tasks.id);
      this.tasks = this.lisarTodos();
    }
  }

  public alterarStatus(task: Tasks): void {
    task.concluida = !task.concluida;
    if(confirm('Deseja alterar a tarefa "' + task.nome + '"?')) {
      this.tasksService.changeStatus(task.id);
      this.tasks = this.lisarTodos();
    }
  }
}
