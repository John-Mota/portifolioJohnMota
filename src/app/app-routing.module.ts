import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'direction', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'direction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
