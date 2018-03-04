import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'validate-span',
  templateUrl: './validate-span.component.html',
  styles: ['[hidden] { display: none !important; }']
})
export class ValidateSpanComponent {
    @Input() controlVariable: AbstractControlDirective;
}
