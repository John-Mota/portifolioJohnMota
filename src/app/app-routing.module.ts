import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: DirectionComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'direction', redirectTo: 'direction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
