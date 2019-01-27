
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-facorite-icon',
  templateUrl: './facorite-icon.component.html',
  styleUrls: ['./facorite-icon.component.css']
})
export class FacoriteIcon implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output('onclick') onclick: EventEmitter<any> = new EventEmitter<any>();

  toggleStar(): void {

    this.isSelected = !this.isSelected;
    this.onclick.emit({ newValue: this.isSelected });
    console.log('toggleStar fired in Favorite icon component');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
export interface FavoriteChangedEventsArgs {
  newValue: boolean
}