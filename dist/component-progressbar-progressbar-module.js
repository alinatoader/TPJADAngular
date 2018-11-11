(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-progressbar-progressbar-module"],{

/***/ "./src/app/pages/component/progressbar/progressbar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/component/progressbar/progressbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Basic Progressbar</h3>\r\n                <h6 class=\"card-subtitle\">This is Basic Progressbar</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\r\n                  \r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Progress bars with current value labels</h3>\r\n                <h6 class=\"card-subtitle\">This is Progress bars with current value labels</h6>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Striped progress bars</h3>\r\n                <h6 class=\"card-subtitle\">This is Striped progress</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Progress bars with custom labels</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Global configuration of progress bars</h3>\r\n                <h6 class=\"card-subtitle\">This is Global configuration of progress bars</h6>\r\n                <p>This progress bar uses the customized default values.</p>\r\n                <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\r\n\r\n                <p>This progress bar uses the customized default values, but changes the type using an input.</p>\r\n                <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/component/progressbar/progressbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/component/progressbar/progressbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdpregressbarBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpregressbarBasic", function() { return NgbdpregressbarBasic; });
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


var NgbdpregressbarBasic = /** @class */ (function () {
    function NgbdpregressbarBasic(config) {
        // customize default values of progress bars used by this component tree
        config.max = 1000;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
    }
    NgbdpregressbarBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/pages/component/progressbar/progressbar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], NgbdpregressbarBasic);
    return NgbdpregressbarBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/progressbar/progressbar.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/component/progressbar/progressbar.module.ts ***!
  \*******************************************************************/
/*! exports provided: progressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressbarModule", function() { return progressbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressbar.component */ "./src/app/pages/component/progressbar/progressbar.component.ts");
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
            title: 'Progressbar',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Progressbar' }]
        },
        component: _progressbar_component__WEBPACK_IMPORTED_MODULE_4__["NgbdpregressbarBasic"]
    }];
var progressbarModule = /** @class */ (function () {
    function progressbarModule() {
    }
    progressbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_progressbar_component__WEBPACK_IMPORTED_MODULE_4__["NgbdpregressbarBasic"]]
        })
    ], progressbarModule);
    return progressbarModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-progressbar-progressbar-module.js.map