import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="images">
      <click-me></click-me>
    </div>
    `
})

export class AppComponent {
  title = 'Handauswahl';

}
