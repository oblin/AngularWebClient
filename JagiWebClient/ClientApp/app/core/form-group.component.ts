import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {
    @Input() width: number;
    @Input() controlVariable: AbstractControlDirective;
    @Input() required: boolean;

    errorMessage: string = "��J��Ʀ����~�A�Э��s��J";

    ngOnInit(): void {
        if (this.controlVariable.errors) {
            if (this.controlVariable.errors.required)
                this.errorMessage = "This field is required";
        }
        
        //throw new Error("Method not implemented.");
    }
}
