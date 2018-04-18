import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[faIcon]'
})
export class FaIconDirective {
    @Input('faIcon') faIcon: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.innerHTML += `<i class='fa ${this.faIcon}'></i>`;
    }
}