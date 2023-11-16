import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DirectionComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'jogo-da-velha', component: JogoDaVelhaComponent},
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
