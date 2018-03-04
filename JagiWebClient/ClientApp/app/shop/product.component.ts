import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../shared/Order';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from '../core/confirm.component';
import { Globals } from '../core/globals.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styles: []
})
export class ProductComponent implements OnInit {
    private model: Product;
    constructor(private modalService: BsModalService, private globals: Globals) { }

    ngOnInit() {
        this.model = new Product();
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
     * �N���N������榡�]�]�t����~�^�ন yyyy/MM/dd
     * @param date �i�H�O����~�G 85/01/23 
     */
    dateFormat(date: string): string {
        return this.globals.dateFormatter(date);
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            alert(JSON.stringify(this.model));
        }
    }
}
