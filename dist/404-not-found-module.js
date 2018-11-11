(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404-not-found-module"],{

/***/ "./src/app/404/not-found-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/404/not-found-routing.module.ts ***!
  \*************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/404/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/404/not-found.component.css":
/*!*********************************************!*\
  !*** ./src/app/404/not-found.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.error-box {\r\n  height: 100%;\r\n  position: fixed;\r\n  background: url(../../../assets/images/background/error-bg.jpg) no-repeat center center #fff;\r\n  width: 100%; }\r\n  .error-box .footer {\r\n    width: 100%;\r\n    left: 0px;\r\n    right: 0px; }\r\n\r\n.error-body {\r\n  padding-top: 5%; }\r\n  .error-body h1 {\r\n    font-size: 210px;\r\n    font-weight: 900;\r\n    text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;\r\n    line-height: 210px; }\r\n\r\n@media(max-width:767px) {\r\n  .error-box {\r\n        position: relative;\r\n        padding-bottom: 60px;\r\n    }\r\n    .error-body {\r\n        padding-top: 10%;\r\n    }\r\n    .error-body h1 {\r\n            font-size: 100px;\r\n            font-weight: 600;\r\n            line-height: 100px;\r\n        }\r\n}*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvNDA0L25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JHIiwiZmlsZSI6InNyYy9hcHAvNDA0L25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouZXJyb3ItYm94IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvZXJyb3ItYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcbiAgLmVycm9yLWJveCAuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDsgfVxyXG5cclxuLmVycm9yLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA1JTsgfVxyXG4gIC5lcnJvci1ib2R5IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMCAjZmZmZmZmLCA2cHggNnB4IDAgIzI2MzIzODtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMTBweDsgfVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5lcnJvci1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxuICAgIC5lcnJvci1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmVycm9yLWJvZHkgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG59Ki9cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/404/not-found.component.html":
/*!**********************************************!*\
  !*** ./src/app/404/not-found.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1>404</h1>\r\n        <h3 class=\"text-uppercase\">Page Not Found !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\" [routerLink]=\"['/']\">Back to home</a> </div>\r\n    <footer class=\"footer text-center\">© 2018 A&B</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/404/not-found.component.ts":
/*!********************************************!*\
  !*** ./src/app/404/not-found.component.ts ***!
  \********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $(".preloader").fadeOut();
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/404/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/404/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/404/not-found.module.ts":
/*!*****************************************!*\
  !*** ./src/app/404/not-found.module.ts ***!
  \*****************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/404/not-found.component.ts");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/404/not-found-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=404-not-found-module.js.map