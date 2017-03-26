import { Component, Input } from '@angular/core';


@Component({
  selector: 'limiter-images',
  template: `
    Anzahl der Bilder auswählen für {{ imageTypesSelected }}
    <div id="ImageSelector" ng-controller="ImageOptions" *ngIf="selectedOption == ''">
      <select #numberImages name="imageNumbers" (change)="onImageNumbersChange(numberImages.value)">
        <option value="">--Bitte Anzahl der Bilder auswählen--</option>
        <option value="2">2</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <br/>
      Auwahl: {{selectedOption}}
    </div>
    <div *ngIf="numberImagesSelected != 0">
      <div id="images" *ngIf="imageTypesSelected == 'hand'">
  		  <hand-images [numberSelectedImages]="selectedOption"></hand-images>
      </div>
      <div id="feetImages" *ngIf="imageTypesSelected == 'feet'">
        <feet-images [numberSelectedImages]="selectedOption"></feet-images>
      </div>
    </div>
    `
})

export class LimiterImagesComponent {
  title = 'Spiegeltherapie';

  imageTypeSelect = 'default';
  selectedOption = '';
  numberImagesSelected = 0;
  @Input('imageTypes') imageTypesSelected: string;
  onImageNumbersChange(numberSelected) {
    this.selectedOption = numberSelected;
    this.numberImagesSelected = numberSelected;
  }
}
