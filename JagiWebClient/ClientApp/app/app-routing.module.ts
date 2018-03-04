import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './shop/product.component';

const routes: Routes = [
    { path: '', component: ShopComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false } )],
    exports: [RouterModule]
})
export class AppRoutingModule { }