import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {

  constructor(
    private themeService: FunctionsService,
    private router: Router
  ) {}


  get isDarkTheme() {
    return this.themeService.isDarkTheme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  goToHome() {
  this.router.navigate(['/home']);
  }

}
