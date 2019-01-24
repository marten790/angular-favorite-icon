
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-facorite-icon',
  templateUrl: './facorite-icon.component.html',
  styleUrls: ['./facorite-icon.component.css']
})
export class FacoriteIcon implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') onclick: EventEmitter<any> = new EventEmitter<any>();

  toggleStar(): void {

    this.isSelected = !this.isSelected;
    this.onclick.emit({ newValue: this.isSelected });
    console.log('this.change', this.onclick);
  }


  constructor() {
  }

  ngOnInit() {
  }

}
export interface FavoriteChangedEventsArgs {
  newValue: boolean
}