import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Product } from '../shared/Order';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styles: []
})
export class ProductListComponent implements OnInit {
    constructor(private data: DataService) { }

    public products: Product[];

    ngOnInit() {
        this.data.loadProducts()
            .subscribe(products => {
                this.products = products;
            });
    }

    addProduct(product: Product) {
        this.data.addToOrder(product);
    }
}
