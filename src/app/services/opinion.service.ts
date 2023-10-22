import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  constructor() { }

  saveData(data: any): void {
    // Recupere os dados existentes, se houver, do localStorage
    const existingData = JSON.parse(localStorage.getItem('savedData') || '[]');

    // Adicione os novos dados à matriz
    existingData.push(data);

    // Salve os dados atualizados no localStorage
    localStorage.setItem('savedData', JSON.stringify(existingData));

    console.log('Dados salvos localmente com sucesso!');
  }

  getSavedData(): any[] {
    // Recupere os dados do localStorage
    return JSON.parse(localStorage.getItem('savedData') || '[]');
  }
}
