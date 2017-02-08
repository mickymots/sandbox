import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule 
  ],
  
   exports: [EmailComponent],
  declarations: [HeaderComponent, FooterComponent, EmailComponent]
})
export class CommonUiModule { }
