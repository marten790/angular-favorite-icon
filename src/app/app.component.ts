import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './facorite-icon/facorite-icon.component';
import { IsLiked } from './like-post/like-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    likesCount: 0,
    isLiked: false,
    body: 'The text for the post'
  };

  isFavoriteIconActive = { newValue: false };
  titleTwo = 'the second star has not been clicked';

  isLikedClicked(eventArgs: IsLiked) {
    this.post = eventArgs;
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    this.isFavoriteIconActive = eventArgs;
  }
  theTitleWillUpdateOnClick(updatedTitle: string) {
    this.titleTwo = updatedTitle;
  }
}
