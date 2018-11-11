(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-dropdown-collapse-dropdown-collapse-module"],{

/***/ "./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Dropdown</h3>\r\n        <h6 class=\"card-subtitle\">This is basic Dropdown</h6>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                <button class=\"dropdown-item\">Action - 1</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n                <button class=\"dropdown-item\">Action - 1</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Manual triggers</h3>\r\n        <h6 class=\"card-subtitle\">You can easily control dropdowns programmatically using the exported dropdown instance.</h6>\r\n        <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n          <button class=\"btn btn-outline-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\r\n            <button class=\"dropdown-item\">Action - 1</button>\r\n            <button class=\"dropdown-item\">Another Action</button>\r\n            <button class=\"dropdown-item\">Something else is here</button>\r\n          </div>\r\n          <button class=\"btn btn-outline-success btn-sm\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\r\n          <button class=\"btn btn-outline-danger btn-sm\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Collapse</h3>\r\n        <h6 class=\"card-subtitle\">The NgbCollapse directive provides a simple way to hide and show an element with animations.</h6>\r\n        <p>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n            Toggle\r\n          </button>\r\n        </p>\r\n        <blockquote id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n          You can collapse this card by clicking Toggle\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdDropdownBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasic", function() { return NgbdDropdownBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownBasic = /** @class */ (function () {
    function NgbdDropdownBasic() {
        // This is for the collapse example
        this.isCollapsed = false;
    }
    NgbdDropdownBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-basic',
            template: __webpack_require__(/*! ./dropdown-collapse.component.html */ "./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.html")
        })
    ], NgbdDropdownBasic);
    return NgbdDropdownBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/dropdown-collapse/dropdown-collapse.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/component/dropdown-collapse/dropdown-collapse.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-collapse.component */ "./src/app/pages/component/dropdown-collapse/dropdown-collapse.component.ts");
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
            title: 'Dropdown',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Dropdown' }]
        },
        component: _dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_4__["NgbdDropdownBasic"]
    }];
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_4__["NgbdDropdownBasic"]]
        })
    ], DropdownModule);
    return DropdownModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-dropdown-collapse-dropdown-collapse-module.js.map