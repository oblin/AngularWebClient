import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styles: []
})
export class CheckoutComponent implements OnInit {
    constructor(public data: DataService, private router: Router) { }

    onCheckout() {
        this.data.checkout()
            .subscribe(success => {
                if (success)
                    this.router.navigate([""]);
            });
    }

    ngOnInit(): void {
    }
}
