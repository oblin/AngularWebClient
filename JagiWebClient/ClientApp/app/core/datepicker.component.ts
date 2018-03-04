import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { Globals } from './globals.service';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'my-datepicker',
    templateUrl: './datepicker.component.html',
    styles: [`
    .popup {
      position: absolute;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #ddd;
      height: 251px;
      z-index: 100;
    }
  `],
})
export class DatepickerComponent implements OnInit {
    @Input() datePicker: any;

    datePickerConfig: Partial<BsDatepickerConfig>;

    constructor(private globals: Globals, private localeService: BsLocaleService) { }

    ngOnInit() {
        this.localeService.use("zh-cn");
    }
}