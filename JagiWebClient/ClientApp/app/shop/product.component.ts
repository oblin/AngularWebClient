import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../shared/Order';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from '../core/confirm.component';
import { Globals } from '../core/globals.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styles: []
})
export class ProductComponent implements OnInit {
    private model: Product;
    private testModel: any;
    constructor(private modalService: BsModalService,
        private globals: Globals, private router: Router) { }

    ngOnInit() {
        this.model = new Product();
        this.testModel = this.globals.razorModel;
    }

    deleting() {
        alert("Call deleting function");
    }

    modalRef: BsModalRef;
    confirmDelete(message: string) {
        let initialState: any = {
            action: this.deleting
        };
        if (message)
            initialState.description = message;

        this.modalRef = this.modalService.show(ConfirmComponent, { initialState });
    }

    /**
     * 將任意的日期格式（包含民國年）轉成 yyyy/MM/dd
     * @param date 可以是民國年： 85/01/23 
     */
    dateFormat(date: string): string {
        return this.globals.dateFormatter(date);
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    cancelForm() {
        this.router.navigate([""]);
    }
}
