import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-clicker',
  templateUrl: './button-clicker.component.html',
  styleUrls: ['./button-clicker.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonClickerComponent implements OnInit {

  @Output('notify') notify: EventEmitter<string> = new EventEmitter<string>();


  hitThistoChangeString(): void {
    console.log('Button clicker hitThistoChangeString fired');
    this.notify.emit('Second star was clicked!');
  }
  constructor() { }

  ngOnInit() {
  }

}
