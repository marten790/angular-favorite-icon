import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'util-title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {
  titleInput: string;

  constructor() { }

  ngOnInit() {
  }

}
