import { Injectable } from '@angular/core';
import { Tasks } from '../gerenciador-de-tarefas/tarefas.model';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  public listAll(): Tasks[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  public regiser(task: Tasks): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  public searchById(id: number): Tasks | undefined {
    const tasks: Tasks[] = this.listAll();
    return tasks.find(task => task.id === id);
  }
  

  public toUpdate(task: Tasks): void {
    const tasks: Tasks[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  public remove(id: number): void {
    let tasks: Tasks[] = this.listAll();
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tarefas: Tasks[] = this.listAll();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
