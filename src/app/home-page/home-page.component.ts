import { Component } from '@angular/core';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private themeService: FunctionsService) {}

  isDarkTheme: boolean = true;

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
      this.applyTheme();
    });
  }

  private applyTheme() {

    if (this.isDarkTheme) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }

}
