import { Component } from '@angular/core';
import { JogoDaVelhaService } from '../services/jogo-da-velha.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent {
  constructor(private JogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
  	this.JogoDaVelhaService.inicializar();
  }

  
   // Retorna se a tela de início deve ser exibida.
  
  get showInicio(): boolean {
  	return this.JogoDaVelhaService.showInicio;
  }

 
   // Retorna se o tabuleiro deve ser exibido.
   
  get showTabuleiro(): boolean {
  	return this.JogoDaVelhaService.showTabuleiro;
  }

  
   // Retorna se a tela de fim de jogo deve ser exibida.
   
  get showFinal(): boolean {
  	return this.JogoDaVelhaService.showFinal;
  }

  
   // Inicializa os dados de um novo jogo.
   
  public iniciarJogo($event: any): void {
    $event.preventDefault();
  	this.JogoDaVelhaService.iniciarJogo();
  }

  
  //  Realiza uma jogada ao clicar um local no tabuleiro.
   
  public jogar(posX: number, posY: number): void {
  	this.JogoDaVelhaService.jogar(posX, posY);
    console.log(`aqui posição X: ${posX} : posição Y: ${posY}`)
  }

  
   // Retorna se a peça X deve ser exibida para a 
   
  public exibirX(posX: number, posY: number): boolean {
  	return this.JogoDaVelhaService.exibirX(posX, posY);
  }

  
   // Retorna se a peça O deve ser exibida para a coordena informada.
   
   
  public exibirO(posX: number, posY: number): boolean {
  	return this.JogoDaVelhaService.exibirO(posX, posY);
  }

  
   // Retorna se a marcação de vitória deve ser exibida para a coordena informada.
   
   
  public exibirVitoria(posX: number, posY: number): boolean {
  	return this.JogoDaVelhaService.exibirVitoria(posX, posY);
  }

 
   // Retorna o número do jogador a jogar.
   
  get jogador(): number {
  	return this.JogoDaVelhaService.jogador;
  }

  
  // Inicia um novo jogo.
   
  public novoJogo($event: { preventDefault: () => void; }): void {
    $event.preventDefault();
  	this.JogoDaVelhaService.novoJogo();
  }
}
