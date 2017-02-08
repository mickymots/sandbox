import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent implements OnInit {

  label: String
  tooltip: String

  constructor() { 
   this.label = '';
   this.tooltip = '';
  }

  ngOnInit() {
  }

}
