import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div id="images">
      <div><img src="{{image1.path}}"></div>
      <click-me></click-me>
    </div>
    `
})

export class AppComponent {
  title = 'Kursmarkierungen';
  image1: HandImage = {
        id: 1,
        name: 'Bild2',
        side: 'right',
        path: 'src/img/bofh.png',
        test: 'hello'
        };

}
