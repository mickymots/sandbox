import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './common-ui/header/header.component'
import {FooterComponent} from './common-ui/footer/footer.component'
import {DashboardComponent} from './dashboard/dashboard.component'


const routes: Routes = [
  
	  // Dashboard
	 { path: '',   component: DashboardComponent, children:[
		
	 { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}  ]},
	 
	// Child Benefits
	{ 
		path: 'child-benefits',
		loadChildren: './child-benefits/child-benefits.module#ChildBenefitsModule',
		data: { title: 'Child Benefits', preload: true }
	}
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
