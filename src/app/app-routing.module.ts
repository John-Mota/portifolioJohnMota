import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';

const routes: Routes = [
  {path: '', component: DirectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
