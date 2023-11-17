import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaComponent } from './gerenciador-de-tarefas/lista/lista.component';
import { RegistrarTarefasComponent } from './gerenciador-de-tarefas/registrar-tarefas/registrar-tarefas.component';
import { EditarTarefasComponent } from './gerenciador-de-tarefas/editar-tarefas/editar-tarefas.component';

const routes: Routes = [
  { path: '', component: DirectionComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'jogo-da-velha', component: JogoDaVelhaComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tarefas/lista', component: ListaComponent},
  { path: 'tarefas/registrar', component: RegistrarTarefasComponent},
  { path: 'tarefas/editar/:id', component: EditarTarefasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
