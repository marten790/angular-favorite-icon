import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './facorite-icon/facorite-icon.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = { newValue: false };
  titleTwo = 'hello, this title will update on click of the second star below';
  isFavorite = true;

  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    console.log('onFavoriteChanged has fired', eventArgs);
    this.title = eventArgs;
  }

  theTitleWillUpdateOnClick(updatedTitle: string) {
    console.log('this will be the updated title: ', updatedTitle);
    this.titleTwo = updatedTitle;
  }
}
