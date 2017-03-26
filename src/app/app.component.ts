import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="ImageSelector" ng-controller="ImageOptions" *ngIf="selectedOption == ''">
      <select #imageTypes name="imageTypes" (change)="onImageOptionsChange(imageTypes.value)">
        <option value="">--Bitte Bilderset auswählen--</option>
        <option value="hand">Hand Bilder</option>
        <option value="feet">Fuss Bilder</option>
      </select>
      <br/>
    </div>
    <div id="feetImages" *ngIf="selectedOption != ''">
      <limiter-images [imageTypes]="selectedOption"></limiter-images>
    </div>

    `
})

export class AppComponent {
  title = 'Spiegeltherapie';
  ImageSelector = 1;
  imageTypeSelect = 'default';
  selectedOption = '';
  numberImages: number = 10;

  onImageOptionsChange(imageTypes) {
    this.selectedOption = imageTypes;
  }
}
