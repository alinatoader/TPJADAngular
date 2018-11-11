import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    loginForm: FormGroup;
    errorMessage: string = null;

    constructor(public router: Router, private loginService: UserService, private socialAuthService: AuthService) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
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

    onLoggedin() {
        this.loginService.login(this.loginForm.value).toPromise()
            .then(response => {
                if (response == null) {
                    this.errorMessage = 'Invalid credentials!';
                } else {
                    this.loginService.saveUserInLocalStorage(response);
                    this.router.navigateByUrl('pages');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "linkedin") {
            socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                //console.log(socialPlatform + " sign in data : ", userData);
                this.loginService.saveUserInLocalStorage(userData);
                this.router.navigateByUrl('pages');
            }
        );
    }

}
