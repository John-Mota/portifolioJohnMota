import { Component } from '@angular/core';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
