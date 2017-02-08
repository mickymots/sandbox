import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms'
import { FormBuilder, FormGroup, Validators , Validator  } from '@angular/forms';

import {  forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EmailComponent),
    multi: true
};

export const CUSTOM_INPUT_CONTROL_VALUE_VALIDATOR: any = 
{
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailComponent),
      multi: true,
    }  ;

@Component({
  selector: 'email',
  template: `<div class="form-group">
                    <label>Email: <ng-content></ng-content>
                        <input [(ngModel)]="value"
                                class="form-control"
                                (blur)="onBlur()">
                    </label>
                </div>`,


  styleUrls: ['./email.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALUE_VALIDATOR]
})
export class EmailComponent implements ControlValueAccessor, Validator  {

    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
       this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public validate(c: FormControl) {
        return (this.innerValue == null || this.innerValue.length <= 0) ? 
           
         {
            emailError: {
                valid: false,
            },
        } : null;
        
    }

    

}