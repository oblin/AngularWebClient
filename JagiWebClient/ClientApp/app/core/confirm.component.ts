import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

/**
 * ������ܽT�{���u�������A
 * �ϥΤ覡�G
     confirmDelete() {
        const initialState = {
            title: "�T�{�R��",
            description: "�нT�{�O�_�R��",
            action: this.deleting // callback method
        };
        this.modalRef = this.modalService.show(ConfirmComponent, { initialState });
    }
 */
@Component({
    selector: 'confirm',
    templateUrl: "confirm.component.html",
    styles: []
})
export class ConfirmComponent implements OnInit {
    constructor(public bsModalRef: BsModalRef) { }

    title: string = "�T�{����";
    description: string = "Are your sure wanna deleted?";
    closeBtnName: string = "����";
    action: Function = function () {}

    confirm() {
        this.action();
        this.bsModalRef.hide();
    }

    ngOnInit() {
    }
}
