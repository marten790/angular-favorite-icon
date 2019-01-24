import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-clicker',
  templateUrl: './button-clicker.component.html',
  styleUrls: ['./button-clicker.component.css']
})
export class ButtonClickerComponent implements OnInit {

  @Output('title-update-button') notify: EventEmitter<string> = new EventEmitter<string>();


  hitThistoChangeString(): void {
    console.log('this should change the text of the heading', this.notify);
    this.notify.emit('this has been updated!');
  }
  constructor() { }

  ngOnInit() {
  }

}
