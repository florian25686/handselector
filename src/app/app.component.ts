import { Component } from '@angular/core';

export class HandImage {
constructor(
        public id: number,
        public name: string,
        public side: string,
        public path: string) {}
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div id="images">
      <label>Bild1: <img src="{{image1.path}}"></label>
	<ul>
		<li *ngFor="let bild of existingImages">
		name: {{bild.name}} <img src="{{bild.path}}">
		</li>
	</ul>
    </div>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  image1: HandImage = {
        id: 1,
        name: 'Bild2',
        side: 'right',
        path: 'src/img/bofh.png'
        };

  existingImages = [
	new HandImage(2,'Bild3', 'right', 'src/img/img2.jpg'),
	new HandImage(3,'Bild4', 'left', '')
	];

  heroes = ['Windstorm', 'Bombasto', 'Magenta', 'Torando'];
 myHery = this.heroes[0];
}
