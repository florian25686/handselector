import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="ImageSelector" ng-controller="ImageOptions" *ngIf="selectedOption == ''">
      <select name="imageTypes" (change)="onImageOptionsChange($event)">
        <option value="">--Bitte Bilderset auswählen--</option>
        <option value="hand">Hand Bilder</option>
        <option value="feet">Fuss Bilder</option>
      </select>
      <br/>
    </div>
    <div id="images" *ngIf="selectedOption == 'hand'">
		  <hand-images></hand-images>
    </div>
    <div id="feetImages" *ngIf="selectedOption == 'feet'">
      <feet-images></feet-images>
    </div>

    `
})

export class AppComponent {
  title = 'Spiegeltherapie';
  ImageSelector = 1;
  imageTypeSelect = 'default';
  selectedOption = '';

  onImageOptionsChange(event) {
    this.selectedOption = event.target.value;
  }
}
