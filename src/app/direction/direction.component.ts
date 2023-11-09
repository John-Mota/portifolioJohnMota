import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpinionService } from '../services/opinion.service';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
  meuFormulario: FormGroup;
  savedData: any[] = [];

  feedback = {
    name: '',
    email: '',
    suggestions: ''
  }

  @ViewChild('myModal') myModal!: ElementRef;

  constructor(
    private themeService: FunctionsService,
    private opinionService: OpinionService,
    private router: Router,
    private renderer: Renderer2,
    private sendEmailService: SendEmailService,
  ) {
    this.meuFormulario = new FormGroup({
      email: new FormControl(
        this.feedback.email,
        [Validators.required, Validators.email]),
      name: new FormControl(
        this.feedback.name,
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(70)]),
      suggestions: new FormControl(
        this.feedback.suggestions,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)])
    })

    this.savedData = this.opinionService.getSavedData();
  }

  get isDarkTheme() {
    return this.themeService.isDarkTheme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  openModal() {
    const modal = this.myModal.nativeElement;
    this.renderer.addClass(modal, 'show');
    modal.style.display = 'block';
    this.renderer.addClass(modal, 'custom-modal');
  }

  closeModal() {
    console.log('clicou close');
    const modal = this.myModal.nativeElement;
    this.renderer.removeClass(modal, 'show');
    this.meuFormulario.reset();
    modal.style.display = 'none';
  }

  enviarFormulario() {
    const { name, email, suggestions } = this.meuFormulario.value;
    const timeZoneOffset = new Date().getTimezoneOffset();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.sendEmailService.enviarEmail(name, email, suggestions, timeZoneOffset, timeZone).subscribe(
      () => {
        this.closeModal()
      },
      (error) => {
        console.error('Erro ao enviar email', error);
      }
    )
  }
}
