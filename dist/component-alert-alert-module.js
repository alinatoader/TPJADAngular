(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-alert-alert-module"],{

/***/ "./src/app/pages/component/alert/alert.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/component/alert/alert.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Basic Alert</h3>\r\n                <h6 class=\"card-subtitle\">This is basic alert</h6>\r\n                <ngb-alert [dismissible]=\"false\">\r\n\t\t\t    <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n\t\t\t  </ngb-alert>\r\n  \t\t\t\t\t\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Closeable Alert</h3>\r\n                <h6 class=\"card-subtitle\">This is closeable alert</h6>\r\n                <p *ngFor=\"let alert of alerts\">\r\n\t\t\t\t  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n\t\t\t\t</p>\r\n  \t\t\t\t\t\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Self Closing  Alert</h3>\r\n                <h6 class=\"card-subtitle\">Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</h6>\r\n                <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n  \t\t\t\t<p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n  \t\t\t\t<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\t\r\n  \t\t\t\t<p>\r\n\t\t\t\t  <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n\t\t\t\t</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/component/alert/alert.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/component/alert/alert.component.ts ***!
  \**********************************************************/
/*! exports provided: NgbdAlertBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertBasic", function() { return NgbdAlertBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdAlertBasic = /** @class */ (function () {
    function NgbdAlertBasic() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        ///This is for the self closing alert
        this._success = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertBasic.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertBasic.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    NgbdAlertBasic.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
    };
    NgbdAlertBasic.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NgbdAlertBasic.prototype, "alerts", void 0);
    NgbdAlertBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/pages/component/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertBasic);
    return NgbdAlertBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/alert/alert.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/component/alert/alert.module.ts ***!
  \*******************************************************/
/*! exports provided: NgAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlertModule", function() { return NgAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.component */ "./src/app/pages/component/alert/alert.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        data: {
            title: 'Alert',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Alert' }]
        },
        component: _alert_component__WEBPACK_IMPORTED_MODULE_4__["NgbdAlertBasic"]
    }];
var NgAlertModule = /** @class */ (function () {
    function NgAlertModule() {
    }
    NgAlertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_4__["NgbdAlertBasic"]]
        })
    ], NgAlertModule);
    return NgAlertModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-alert-alert-module.js.map