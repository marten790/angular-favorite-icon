import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a list of examples for things you are learning!';
  isFavorite = true;

  onFavoriteChanged(isFavoriteEvent) {
    console.log('onFavoriteChanged has fired', isFavoriteEvent);
  }
}
