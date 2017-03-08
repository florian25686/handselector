import { Component } from '@angular/core';

export class HandImage {
        id: number;
        name: string;
        side: string;
        path: string;
}

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
	image1: HandImage = {
        	id: 1,
       		name: 'Bild2',
       	 	side: 'right',
        	path: 'src/img/bofh.png'
        };
}

