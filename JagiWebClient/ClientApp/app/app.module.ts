import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ngx-bootstraps
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { zhCnLocale } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCnLocale); 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './shop/product-list.component';
import { CartComponent } from './shop/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './shop/product.component';
import { FaIconDirective } from './core/faicon.directive';
import { FormGroupComponent } from './core/form-group.component';
import { ValidateSpanComponent } from './core/validate-span.component';
import { ConfirmComponent } from './core/confirm.component';

// Services
import { DataService } from './shared/data.service';
import { Globals } from './core/globals.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartComponent,
        ShopComponent,
        CheckoutComponent,
        LoginComponent,
        ProductComponent,
        FaIconDirective,
        FormGroupComponent,
        ValidateSpanComponent,
        ConfirmComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,

        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TooltipModule.forRoot()
    ],
    providers: [DataService, Globals],
    entryComponents: [ConfirmComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private localeService: BsLocaleService) {
        localeService.use("zh-cn");
    }
}
