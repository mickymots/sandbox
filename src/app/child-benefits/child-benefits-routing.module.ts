import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from '../common-ui//header/header.component'
import {FooterComponent} from '../common-ui/footer/footer.component'
import { ChildBenefitsHomeComponent } from './child-benefits-home/child-benefits-home.component';
import { ChildSearchComponent } from './child-search/child-search.component';



export const routes: Routes = [
  { path: '', component: ChildBenefitsHomeComponent, data: { title: 'Child Benefits' }, 
  
	children:[
		
	 { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}  ]
	 
	},
	
	
	 { path: 'child-search', component: ChildSearchComponent, data: { title: 'Child Search' } 
  
	, children:[
		
	 { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}  ]
	 
	}
	
	
	
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChildBenefitsRoutingModule { }
