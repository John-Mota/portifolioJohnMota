import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionComponent } from './direction/direction.component';
;
import { HomePageComponent } from './home-page/home-page.component';
import { FunctionsService } from './functions.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectionComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
