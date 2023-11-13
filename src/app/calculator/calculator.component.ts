import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  private number1: string = '';
  private number2: string = '';
  public result: number = 0;
  private operacao: string = '';
  public displayValue = '';
  public lastOperator = '';
  
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.limpar(); 
  }

  public limpar(): void {
    this.number1 = '';
    this.number2 = '';
    this.result = 0;
    this.operacao = '';
    this.displayValue = '';
  }

  public insertNumber(number: string): void {
    if(this.operacao === '') {
      this.number1 = this.contactNumber(this.number1, number);
    } else {
      this.number2 = this.contactNumber(this.number2, number);
    }
    this.updateDisplay();
  }

  public contactNumber(currentNumber: string = '', numConcat: string = ''): string {
    if (currentNumber === '0' || currentNumber === '') {
      currentNumber = '';
    }

    if (numConcat === '.' && currentNumber === '') {
      return '0.';
    }

    if (numConcat === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + numConcat;
  }

  public setOperation(operation: string): void {
    if (this.operacao === '') {
      this.operacao = operation;
      this.updateDisplay();
    } else {
      if (this.number2 !== '') {
        this.calcular();
      }
      this.operacao = operation;
    }
  }

  public calcular(): void {
    if (this.number2 === '') {
      return;
    }

    this.result = this.calculatorService.calcular(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operacao
    );

    this.number1 = this.result.toString();
    this.number2 = '';
    this.operacao = '';
    this.updateDisplay();
  }

  public back(): void {
    if (this.operacao === '') {
      this.number1 = this.number1.slice(0, -1);
    } else {
      this.number2 = this.number2.slice(0, -1);
    }
    this.updateDisplay();
  }

  private updateDisplay(): void {
    let displayText = '';
    if (this.operacao !== '') {
      displayText = this.number1 + ' ' + this.operacao + ' ' + this.number2;
    } else {
      displayText = this.number1;
    }
    this.displayValue = displayText;
  }

  get display(): string {
    return this.displayValue;
  }

}
