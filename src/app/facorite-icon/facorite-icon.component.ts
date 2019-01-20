import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facorite-icon',
  templateUrl: './facorite-icon.component.html',
  styleUrls: ['./facorite-icon.component.css']
})
export class FacoriteIcon implements OnInit {
  favActive = false;

  toggleStar() {
    this.favActive = !this.favActive;
    console.log("toggle clicked", this.favActive);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
