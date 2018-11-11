import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class UserService implements OnInit {
    apiUrl = 'https://demo-tpjad.herokuapp.com';

    constructor(private http: HttpClient) { }

    login(user: any) {
        return this.http.post(this.apiUrl + '/login', user);
    }

    saveUserInLocalStorage(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.clear();
    }

    register(user: any) {
        return this.http.post(this.apiUrl + '/register', user);
    }

    ngOnInit(): void {
    }
}