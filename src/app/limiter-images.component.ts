import { Component, Input } from '@angular/core';


@Component({
  selector: 'limiter-images',
  template: `
    <div id="ImageSelector" ng-controller="ImageOptions" *ngIf="selectedOption == ''">
      <select #numberImages name="imageNumbers" (change)="onImageNumbersChange(numberImages.value)">
        <option value="">--Bitte Anzahl der Bilder auswählen--</option>
        <option value="5">5</option>
        <option value="10" *ngIf="imageTypesSelected == 'hand'">10</option>
        <option value="15" *ngIf="imageTypesSelected == 'hand'">15</option>
        <option value="20" *ngIf="imageTypesSelected == 'hand'">20</option>
        <option value="25" *ngIf="imageTypesSelected == 'hand'">25</option>
        <option value="30" *ngIf="imageTypesSelected == 'hand'">30</option>
        <option value="35" *ngIf="imageTypesSelected == 'hand'">35</option>
        <option value="40" *ngIf="imageTypesSelected == 'hand'">40</option>
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
