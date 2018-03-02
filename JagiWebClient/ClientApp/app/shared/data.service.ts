import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Order, OrderItem, Product } from './Order';

@Injectable()
export class DataService {
    private token: string = "";
    private tokenExpiration: Date;

    constructor(private http: HttpClient) { }

    public order: Order = new Order();
    public products: Product[] = [];

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds) {
        return this.http.post("/account/createtoken", creds)
            .map(response => {
                let tokenInfo: any = response;
                this.token = tokenInfo.token;
                this.tokenExpiration = tokenInfo.expiration;
                return true;
            });
    }

    public checkout() {
        let header = new HttpHeaders().set("Authorization", "Bearer " + this.token);
        return this.http.post("api/Products", this.order, { headers: header })
            .map(response => {
                this.order = new Order();
                return true;
            });
    }

    public loadProducts(): Observable<Product[]> { 
        return this.http.get<Product[]>("/api/products");
    }

    public addToOrder(product: Product) {
        let item: OrderItem = this.order.Items.find(i => i.ProductId == product.Id);

        if (item) {
            item.Quantity++;
        } else {
            item = new OrderItem();
            item.ProductId = product.Id;
            item.UnitPrice = product.Price;
            item.Quantity = 1;

            this.order.Items.push(item);
        }
    }
}
