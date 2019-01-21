import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-facorite-icon',
  templateUrl: './facorite-icon.component.html',
  styleUrls: ['./facorite-icon.component.css']
})
export class FacoriteIcon implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  toggleStar() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
    console.log('this.change', this.change);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
