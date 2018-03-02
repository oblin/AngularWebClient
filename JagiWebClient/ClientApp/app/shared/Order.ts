import * as _ from "lodash";

export class Order {
    public Id: number;
    // 設定預設的日期方便後續存取
    public OrderDate: Date = new Date();
    public OrderNumber: string;
    // 設定預設的陣列後續存取就不用在另外產生
    public Items: Array<OrderItem> = new Array<OrderItem>();
    public Subtotal(): number {
        return _.sum(_.map(this.Items, i => i.UnitPrice * i.Quantity));
    }
}

export class OrderItem {
    public Id: number;
    public ProductId: number;
    public Quantity: number;
    public UnitPrice: number;
}

export class Product {
    public Id: number;
    public Title: string;
    public Price: number;
}