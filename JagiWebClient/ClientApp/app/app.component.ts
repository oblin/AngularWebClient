import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Globals } from './core/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
    title = 'Jagi Web Client ½d¥»¡I';

    constructor(private global: Globals, private elementRef: ElementRef) {}

    ngOnInit(): void {
        let value = this.elementRef.nativeElement.getAttribute('model');
        this.global.razorModel = value;
    }
}

