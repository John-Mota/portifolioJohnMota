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
    this.isDarkTheme = !this.isDarkTheme;
    const body = this.elementRef.nativeElement.ownerDocument.body;
    
    if (this.isDarkTheme) {
      this.renderer.removeClass(body, 'light');
      this.renderer.addClass(body, 'dark');
    } else {   
      this.renderer.removeClass(body, 'dark');
      this.renderer.addClass(body, 'light');
    }
    const button = this.elementRef.nativeElement.querySelector('#switch button');
    if (button) {
      button.classList.toggle('active', this.isDarkTheme);
    }
  }
  
  


}
