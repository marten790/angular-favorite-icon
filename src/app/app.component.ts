import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './facorite-icon/facorite-icon.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavoriteIconActive = { newValue: false };
  titleTwo = 'the second star has not been clicked';

  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    console.log('Favorite Icon: onFavoriteChanged has fired in app component');
    this.isFavoriteIconActive = eventArgs;
  }

  theTitleWillUpdateOnClick(updatedTitle: string) {
    console.log('Button clicker: theTitleWillUpdateOnClick fired in app component');
    this.titleTwo = updatedTitle;
  }
}
