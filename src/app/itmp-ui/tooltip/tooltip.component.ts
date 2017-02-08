import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from '../base/base.component'

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent extends BaseComponent implements OnInit {

  private url: String

  @Input()
  private text: String
 
  constructor(){
    super();
    this.url = './app/itmp-ui/tooltip/tooltip-icon.png'
  }

  ngOnInit() {
    console.log('tooltip being initialized')
    this.tooltip = this.text
  }

}
