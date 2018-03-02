import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'the-cart',
    templateUrl: './cart.component.html',
    styles: []
})
export class CartComponent implements OnInit {

    constructor(private data: DataService, private router: Router) { }

    ngOnInit() {
    }

    onCheckOut() {
        if (this.data.loginRequired) {
            // Force login
            this.router.navigate(["login"]);
        } else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    }
}
