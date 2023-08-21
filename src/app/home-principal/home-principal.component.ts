import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.css']
})
export class HomePrincipalComponent {

  isDarkTheme = true


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
    

  toggleTheme() {
    console.log('toggleTheme() called');
    this.isDarkTheme = !this.isDarkTheme;
  
    console.log('isDarkTheme:', this.isDarkTheme);
  
    const body = this.elementRef.nativeElement.ownerDocument.body;
  
    if (this.isDarkTheme) {
      console.log('Applying dark theme');
      this.renderer.removeClass(body, 'light');
      this.renderer.addClass(body, 'dark');
    } else {
      console.log('Applying light theme');
      this.renderer.removeClass(body, 'dark');
      this.renderer.addClass(body, 'light');
    }
  }
  
  


}
