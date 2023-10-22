import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpinionService } from '../services/opinion.service';

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
    private renderer: Renderer2
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
    if (this.meuFormulario.valid) {
      const feedback = this.meuFormulario.value;

      // Salve os dados usando o OpinionService
      this.opinionService.saveData(feedback);

      // Limpar os campos do formulário após o salvamento bem-sucedido
      this.meuFormulario.reset();

      // Recarregue os dados salvos do localStorage
      this.savedData = this.opinionService.getSavedData();

      console.log('Dados salvos localmente com sucesso!');
    } else {
      console.log('Formulário inválido');
    }
  }
}
