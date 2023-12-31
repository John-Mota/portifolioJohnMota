import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionComponent } from './direction/direction.component';
;
import { HomePageComponent } from './home-page/home-page.component';
import { FunctionsService } from './services/functions.service';
import { HeaderComponent } from './header/header.component';
import { OpinionService } from './services/opinion.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaComponent } from './gerenciador-de-tarefas/lista/lista.component';
import { EditarTarefasComponent } from './gerenciador-de-tarefas/editar-tarefas/editar-tarefas.component';
import { RegistrarTarefasComponent } from './gerenciador-de-tarefas/registrar-tarefas/registrar-tarefas.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectionComponent,
    HomePageComponent,
    HeaderComponent,
    CalculatorComponent,
    JogoDaVelhaComponent,
    DashboardComponent,
    ListaComponent,
    EditarTarefasComponent,
    RegistrarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FunctionsService, OpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
