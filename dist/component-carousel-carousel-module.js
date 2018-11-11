(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-carousel-carousel-module"],{

/***/ "./src/app/pages/component/carousel/carousel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/component/carousel/carousel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 col-xlg-5\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Carousel</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Carousel</h6>\r\n                <ngb-carousel>\r\n\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t    <img src=\"assets/images/big/img1.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t      <h3 class=\"text-white font-bold\">First slide label</h3>\r\n\t\t\t\t      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n\t\t\t\t    </div>\r\n\t\t\t\t  </ng-template>\r\n\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t    <img src=\"assets/images/big/img2.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t      <h3 class=\"text-white font-bold\">Second slide label</h3>\r\n\t\t\t\t      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n\t\t\t\t    </div>\r\n\t\t\t\t  </ng-template>\r\n\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t    <img src=\"assets/images/big/img3.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t      <h3 class=\"text-white font-bold\">Third slide label</h3>\r\n\t\t\t\t      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n\t\t\t\t    </div>\r\n\t\t\t\t  </ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xlg-5\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Carousel</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Carousel</h6>\r\n                <ngb-carousel>\r\n\t\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t\t    <img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t\t      <h3 class=\"text-white font-bold\">10 seconds between slides...</h3>\r\n\t\t\t\t\t      <p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t\t    <img src=\"assets/images/big/img5.jpg\"  alt=\"Random second slide\">\r\n\t\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t\t      <h3 class=\"text-white font-bold\">No keyboard...</h3>\r\n\t\t\t\t\t      <p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t  <ng-template ngbSlide>\r\n\t\t\t\t\t    <img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t    <div class=\"carousel-caption\">\r\n\t\t\t\t\t      <h3 class=\"text-white font-bold\">And no wrap after last slide.</h3>\r\n\t\t\t\t\t      <p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t</ngb-carousel>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/component/carousel/carousel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/component/carousel/carousel.component.ts ***!
  \****************************************************************/
/*! exports provided: NgbdCarouselBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasic", function() { return NgbdCarouselBasic; });
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


var NgbdCarouselBasic = /** @class */ (function () {
    function NgbdCarouselBasic(config) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    NgbdCarouselBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-buttons-radio',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/pages/component/carousel/carousel.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], NgbdCarouselBasic);
    return NgbdCarouselBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/carousel/carousel.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/component/carousel/carousel.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel.component */ "./src/app/pages/component/carousel/carousel.component.ts");
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
            title: 'Carousel',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Carousel' }]
        },
        component: _carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasic"]
    }];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasic"]]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-carousel-carousel-module.js.map