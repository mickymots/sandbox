import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ItmpUiModule } from './itmp-ui/itmp-ui.module';

import { CommonUiModule} from './common-ui/common-ui.module';

import { ChildBenefitsModule } from './child-benefits/child-benefits.module';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ItmpUiModule,
	AppRoutingModule,
	ChildBenefitsModule,
	CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
