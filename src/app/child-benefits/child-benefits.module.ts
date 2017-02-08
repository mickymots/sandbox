import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBenefitsHomeComponent } from './child-benefits-home/child-benefits-home.component';
import { ChildBenefitsRoutingModule, routes } from './child-benefits-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonUiModule} from '../common-ui/common-ui.module';
import { ChildSearchComponent } from './child-search/child-search.component';

@NgModule({
  imports: [
    CommonModule,
	  ChildBenefitsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
	  CommonUiModule
  ],
  declarations: [ChildBenefitsHomeComponent, ChildSearchComponent]
})
export class ChildBenefitsModule { }
