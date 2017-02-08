import { Component, OnInit , Input} from '@angular/core';
import {BaseComponent} from '../base/base.component'
import {TooltipComponent} from '../tooltip/tooltip.component'

@Component({
  selector: 'first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent extends BaseComponent implements OnInit {

   firstName: String;

   @Input()
   private toolTipText: String

   constructor() {
    super();
   }

  ngOnInit() {
    console.log('FirstNameComponent initialized')
    this.tooltip = this.toolTipText

  }

}
