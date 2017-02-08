import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from './base/base.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FirstNameComponent } from './first-name/first-name.component';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
   exports: [TooltipComponent,FirstNameComponent],
  declarations: [BaseComponent, TooltipComponent, FirstNameComponent]
})
export class ItmpUiModule { }
