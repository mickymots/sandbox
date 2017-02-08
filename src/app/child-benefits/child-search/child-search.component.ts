import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
//import {EmailComponent} from '../../common-ui/email/email.component'

@Component({
  selector: 'app-child-search',
  templateUrl: './child-search.component.html',
  styleUrls: ['./child-search.component.css']
})
export class ChildSearchComponent implements OnInit {

  searchForm : FormGroup;
  email: String;

  constructor(fb: FormBuilder) { 
    this.email ="enter email here";

  this.searchForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.required],
      'gender' : 'Female',
      'email': null,
      'hiking' : false,
      'running' : false,
      'swimming' : false
    })

  }

  ngOnInit() {
  }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

}
