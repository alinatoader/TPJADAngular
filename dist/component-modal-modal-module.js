(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-modal-modal-module"],{

/***/ "./src/app/pages/component/modal/modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/component/modal/modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Modal with default options</h3>\r\n                <h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\r\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t  <div class=\"modal-header\">\r\n\t\t\t\t    <h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t    </button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t    <p>One fine body&hellip;</p>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2(content)\">Launch demo modal</button>\r\n\t\t\t\t<div class=\"m-t-20\">{{closeResult}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\"> \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Modal with custom class</h3>\r\n                <h6 class=\"card-subtitle\">You can pass extra class to the model</h6>\r\n                <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t  <div class=\"modal-header\"> \r\n\t\t\t\t\t    <h4 class=\"modal-title text-white\">Modal title</h4>\r\n\t\t\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t    </button>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t\t    <p>One fine body&hellip;</p>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t\t    <button type=\"button\" class=\"btn btn-inverse\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content2)\">Launch demo modal</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/component/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/component/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService, modalService2) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
    }
    NgbdModalBasic.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.open = function (content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/pages/component/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #009efb;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;   \n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/modal/modal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/component/modal/modal.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.component */ "./src/app/pages/component/modal/modal.component.ts");
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
            title: 'Modal',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Modal' }]
        },
        component: _modal_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalBasic"]
    }];
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalBasic"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-modal-modal-module.js.map