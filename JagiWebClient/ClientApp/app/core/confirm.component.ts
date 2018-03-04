import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

/**
 * 提供顯示確認的彈跳視窗，
 * 使用方式：
     confirmDelete() {
        const initialState = {
            title: "確認刪除",
            description: "請確認是否刪除",
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

    title: string = "確認視窗";
    description: string = "Are your sure wanna deleted?";
    closeBtnName: string = "取消";
    action: Function = function () {}

    confirm() {
        this.action();
        this.bsModalRef.hide();
    }

    ngOnInit() {
    }
}
