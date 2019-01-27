import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-post',
  templateUrl: './like-post.component.html',
  styleUrls: ['./like-post.component.css']
})
export class LikePostComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input() likesCount: number;
  @Input() body: string;
  @Output() onclick: EventEmitter<any> = new EventEmitter<any>();


  likeClicked() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }
    this.onclick.emit({
      likesCount: this.likesCount,
      isLiked: this.isLiked,
      body: this.body
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
export interface IsLiked {
  likesCount: number;
  isLiked: boolean;
  body: string;
}
