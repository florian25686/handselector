import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="ImageSelector" *ngIf="ImageSelector == 1">
      <select id="imageTypeSelector" name="imageTypes">
        <option value="hand">Hand Bilder</option>
        <option value="feet">Fuss Bilder</option>
      </select>
    </div>
    <div id="images" *ngIf="ImageSelector == 0">
		  <click-me></click-me>
    </div>
    `
})

export class AppComponent {
  title = 'Spiegeltherapie';
  ImageSelector = 1;
}
