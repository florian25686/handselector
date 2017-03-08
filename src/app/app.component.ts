import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>Bild1: <img src="{{image1.path}}"></label>
    </div>
    `
})

export class AppComponent {
	title = 'Spiegeln';
}

