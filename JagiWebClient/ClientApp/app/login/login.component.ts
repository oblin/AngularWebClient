import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {
    errorMessage: string = "";

    constructor(private data: DataService, private router: Router) { }

    public creds = {
        username: "",
        password: ""
    };

    ngOnInit() {
    }

    onLogin() {
        this.data.login(this.creds).subscribe(
            success => {
                if (success) {
                    if (this.data.order.Items.length == 0) {
                        this.router.navigate([""]);
                    } else {
                        this.router.navigate(["checkout"]);
                    }
                }
            },
            err => this.errorMessage = "µn¤J¥¢±Ñ"
        );
    }
}
