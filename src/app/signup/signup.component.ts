import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
    registerForm: FormGroup;
    errorMessage: string = null;

    constructor(private userService: UserService, private router: Router) {
        this.registerForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            image: new FormControl('')
        });
    }

    ngOnInit() { }

    onRegister() {
        const user = this.registerForm.value;
        if (user.password != user.confirmPassword) {
            this.errorMessage = 'Password doesn\'t match! Try again!';
            return;
        }
        const registerUser = { name: user.name, email: user.email, password: user.password, image: user.image };
        this.userService.register(registerUser).toPromise()
            .then(response => {
                if (response == null) {
                    this.errorMessage = 'This user already exists!';
                } else {
                    this.userService.saveUserInLocalStorage(response);
                    this.router.navigateByUrl('pages');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    ngAfterViewInit() {
        $(function () {
            $(".preloader").fadeOut();
        });
        $(function () {
            (<any>$('[data-toggle="tooltip"]')).tooltip()
        });
        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }
}
