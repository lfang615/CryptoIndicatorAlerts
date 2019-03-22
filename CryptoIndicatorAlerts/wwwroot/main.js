(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-pairs/asset-pairs.component */ "./src/app/asset-pairs/asset-pairs.component.ts");
/* harmony import */ var _asset_pairs_asset_list_asset_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-pairs/asset-list/asset-list.component */ "./src/app/asset-pairs/asset-list/asset-list.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _asset_pairs_asset_pairs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset-pairs/asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");
/* harmony import */ var _asset_pairs_websocket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset-pairs/websocket.service */ "./src/app/asset-pairs/websocket.service.ts");
/* harmony import */ var _asset_pairs_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset-pairs/filter.pipe */ "./src/app/asset-pairs/filter.pipe.ts");
/* harmony import */ var _asset_pairs_selected_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asset-pairs/selected-filter.pipe */ "./src/app/asset-pairs/selected-filter.pipe.ts");
/* harmony import */ var _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./asset-pairs/asset-detail/asset-detail.component */ "./src/app/asset-pairs/asset-detail/asset-detail.component.ts");
/* harmony import */ var _asset_pairs_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset-pairs/asset-edit/asset-edit.component */ "./src/app/asset-pairs/asset-edit/asset-edit.component.ts");
















var appRoutes = [
    { path: '', redirectTo: '/assetpairs', pathMatch: 'full' },
    { path: 'assetpairs/view', component: _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__["AssetPairsComponent"] },
    { path: 'detail/:id', component: _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_14__["AssetDetailComponent"] },
    { path: 'assetpairs', component: _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__["AssetPairsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__["AssetPairsComponent"],
                _asset_pairs_asset_list_asset_list_component__WEBPACK_IMPORTED_MODULE_8__["AssetListComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _asset_pairs_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _asset_pairs_selected_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["SelectedFilterPipe"],
                _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_14__["AssetDetailComponent"],
                _asset_pairs_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_15__["AssetEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_asset_pairs_asset_pairs_service__WEBPACK_IMPORTED_MODULE_10__["AssetPairsService"], _asset_pairs_websocket_service__WEBPACK_IMPORTED_MODULE_11__["WebsocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-detail/asset-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/asset-pairs/asset-detail/asset-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXBhaXJzL2Fzc2V0LWRldGFpbC9hc3NldC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/asset-pairs/asset-detail/asset-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/asset-pairs/asset-detail/asset-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h2>{{ asset.baseName + asset.quoteName}}</h2>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-xs-12\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <h4>Last Closing Price: </h4>{{priceMessage}}\r\n        <input type=\"text\" class=\"form-control\" id=\"lastClose\" readonly value=\"{{priceMessage}}\" />\r\n      </div>\r\n      <br />\r\n     <h4>Volume</h4>\r\n     <div class=\"form-group\">\r\n       <label for=\"vol24\">Current 24HR Vol</label>\r\n       <input type=\"text\" class=\"form-control\" id=\"vol24\" />\r\n       <label for=\"volAvg24\">Avg 20 Period</label>\r\n       <input type=\"text\" class=\"form-control\" id=\"volAvg24\" />\r\n     </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/asset-pairs/asset-detail/asset-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/asset-pairs/asset-detail/asset-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: AssetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailComponent", function() { return AssetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asset_pairs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websocket.service */ "./src/app/asset-pairs/websocket.service.ts");





var AssetDetailComponent = /** @class */ (function () {
    function AssetDetailComponent(route, assetPairsService, websocketService) {
        this.route = route;
        this.assetPairsService = assetPairsService;
        this.websocketService = websocketService;
    }
    AssetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.assetPairsService.getItem(_this.id)
                .subscribe(function (response) {
                _this.asset = response;
                _this.connectPriceMessage();
            });
        });
    };
    AssetDetailComponent.prototype.connectPriceMessage = function () {
        var _this = this;
        this.websocketService
            .connectPrice((String(this.asset.baseName + this.asset.quoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.ngOnDestroy = function () {
        this.websocketService.close();
    };
    AssetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-detail',
            template: __webpack_require__(/*! ./asset-detail.component.html */ "./src/app/asset-pairs/asset-detail/asset-detail.component.html"),
            styles: [__webpack_require__(/*! ./asset-detail.component.css */ "./src/app/asset-pairs/asset-detail/asset-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _asset_pairs_service__WEBPACK_IMPORTED_MODULE_3__["AssetPairsService"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]])
    ], AssetDetailComponent);
    return AssetDetailComponent;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-edit/asset-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/asset-pairs/asset-edit/asset-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXBhaXJzL2Fzc2V0LWVkaXQvYXNzZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/asset-pairs/asset-edit/asset-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/asset-pairs/asset-edit/asset-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  asset-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/asset-pairs/asset-edit/asset-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/asset-pairs/asset-edit/asset-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: AssetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetEditComponent", function() { return AssetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetEditComponent = /** @class */ (function () {
    function AssetEditComponent() {
    }
    AssetEditComponent.prototype.ngOnInit = function () {
    };
    AssetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-edit',
            template: __webpack_require__(/*! ./asset-edit.component.html */ "./src/app/asset-pairs/asset-edit/asset-edit.component.html"),
            styles: [__webpack_require__(/*! ./asset-edit.component.css */ "./src/app/asset-pairs/asset-edit/asset-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetEditComponent);
    return AssetEditComponent;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-list/asset-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/asset-pairs/asset-list/asset-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.list-group{\r\n  max-height: 200px;\r\n  margin-bottom: 10px;\r\n  overflow-y:scroll;\r\n}\r\n\r\nbutton.list-group-item{\r\n  height: 40px;\r\n}\r\n\r\n.list-group-item {\r\n  padding: 1.50rem 1.25rem;\r\n}\r\n\r\n#trackedList{\r\n  height:auto;\r\n  overflow:visible\r\n}\r\n\r\nul.nav.nav-tabs:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtcGFpcnMvYXNzZXQtbGlzdC9hc3NldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXBhaXJzL2Fzc2V0LWxpc3QvYXNzZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lmxpc3QtZ3JvdXB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdy15OnNjcm9sbDtcclxufVxyXG5cclxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEuNTByZW0gMS4yNXJlbTtcclxufVxyXG5cclxuI3RyYWNrZWRMaXN0e1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIG92ZXJmbG93OnZpc2libGVcclxufVxyXG5cclxudWwubmF2Lm5hdi10YWJzOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/asset-pairs/asset-list/asset-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/asset-pairs/asset-list/asset-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!--<div class=\"row\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item nav-link active\" [ngClass]=\"{'active': !viewSelected}\">\r\n        <a (click)=\"viewSelected = !viewSelected\">Select Assets</a>\r\n      </li>\r\n      <li class=\"nav-item nav-link\" [ngClass]=\"{'active': viewSelected }\">\r\n        <a (click)=\"viewSelected = !viewSelected\">View Assets</a>\r\n      </li>\r\n    </ul>\r\n  </div>-->\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-xs-12\" *ngIf=\"!viewSelected\">\r\n      <h2>BTC Pairs</h2>\r\n      <input [(ngModel)]=\"searchText\" class=\"form-control\" id=\"assetSearch\" type=\"text\" placeholder=\"Search..\" />\r\n      <div class=\"list-group\" id=\"assetList\">\r\n        <button type=\"button\"\r\n                class=\"list-group-item list-group-item-action\"\r\n                [ngClass]=\"{'list-group-item-primary': asset.isSelected }\"\r\n                *ngFor=\"let i = index; let asset of assetList | filter: searchText\"\r\n                (click)=\"addToTrack(asset)\">\r\n          {{ asset.baseName }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"viewSelected && personalList\">\r\n    <!--<div id=\"trackedList\">-->\r\n    <!--<div class=\"list-group\" *ngFor=\"let asset of personalList; let even = even; let odd = odd; let i = index\">-->\r\n    <div class=\"col-xs-12\">\r\n      <h2>Tracked Assets</h2> \r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-action\" style=\"padding: 5px\"\r\n            *ngFor=\"let asset of (assetList | selectedFilter); let even = even; let odd = odd; let i = index\"\r\n            (click)=\"onSelectPersonal(asset); setIndex(i)\">\r\n          <div class=\"btn-group dropright\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-seconday dropdown-toggle\"\r\n                    data-toggle=\"dropdown\">\r\n              {{asset.baseName}}\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/detail', asset.id]\">View</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Remove</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/asset-pairs/asset-list/asset-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/asset-pairs/asset-list/asset-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AssetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetListComponent", function() { return AssetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asset_pairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AssetListComponent = /** @class */ (function () {
    function AssetListComponent(assetPairsService, route, router) {
        this.assetPairsService = assetPairsService;
        this.route = route;
        this.router = router;
        this.personalList = [];
        this.viewSelected = false;
        this.btnSelected = false;
        this.showSave = false;
    }
    AssetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetPairsService
            .getAssetPairs()
            .subscribe(function (response) {
            _this.assetList = response;
        });
        this.assetPairsService.selectionChange
            .subscribe(function (response) {
            _this.assetList = response;
            _this.showSave = true;
        });
        this.route.queryParams
            .subscribe(function (queryParams) {
            _this.viewSelected = queryParams["view"] === "1" ? true : false;
        });
        //this.socket = webSocket('wss://stream.binance.com:9443/ws/bnbbtc@kline_1m');
        //this.socket.subscribe(
        //  msg => console.log(msg), // Called whenever there is a message from the server.
        //  err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        //  () => console.log('complete') // Called when connection is closed (for whatever reason).
        //);
    };
    AssetListComponent.prototype.addToTrack = function (asset) {
        if (this.isSelected(asset) === undefined) {
            this.personalList.push(asset);
            this.assetPairsService.onChange(asset);
        }
    };
    AssetListComponent.prototype.isSelected = function (item) {
        var isSelected = this.assetList.find(function (x) { return x.baseName === item.baseName && x.isSelected == true; });
        return isSelected;
    };
    AssetListComponent.prototype.onRemove = function () {
        this.personalList.splice(this.itemPosition, 1);
        this.assetPairsService.onChange(this.selectedAsset);
    };
    AssetListComponent.prototype.setIndex = function (index) {
        this.itemPosition = index;
    };
    AssetListComponent.prototype.onSelectPersonal = function (asset) {
        this.selectedAsset = asset;
    };
    AssetListComponent.prototype.navigateToDetail = function (item) {
        this.router.navigate(['detail', item.id], { relativeTo: this.route });
    };
    AssetListComponent.prototype.onSave = function () {
        this.assetPairsService.saveItems()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AssetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./asset-list.component.html */ "./src/app/asset-pairs/asset-list/asset-list.component.html"),
            styles: [__webpack_require__(/*! ./asset-list.component.css */ "./src/app/asset-pairs/asset-list/asset-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_asset_pairs_service__WEBPACK_IMPORTED_MODULE_2__["AssetPairsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AssetListComponent);
    return AssetListComponent;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-pair.model.ts":
/*!*************************************************!*\
  !*** ./src/app/asset-pairs/asset-pair.model.ts ***!
  \*************************************************/
/*! exports provided: AssetPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPair", function() { return AssetPair; });
var AssetPair = /** @class */ (function () {
    function AssetPair(id, baseName, quoteName, isSelected) {
        this.id = id;
        this.baseName = baseName;
        this.quoteName = quoteName;
        this.isSelected = isSelected;
    }
    return AssetPair;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-pairs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/asset-pairs/asset-pairs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtcGFpcnMvYXNzZXQtcGFpcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtcGFpcnMvYXNzZXQtcGFpcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/asset-pairs/asset-pairs.component.html":
/*!********************************************************!*\
  !*** ./src/app/asset-pairs/asset-pairs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-assets></app-assets>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/asset-pairs/asset-pairs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/asset-pairs/asset-pairs.component.ts ***!
  \******************************************************/
/*! exports provided: AssetPairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPairsComponent", function() { return AssetPairsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetPairsComponent = /** @class */ (function () {
    function AssetPairsComponent() {
    }
    AssetPairsComponent.prototype.ngOnInit = function () {
    };
    AssetPairsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-pairs',
            template: __webpack_require__(/*! ./asset-pairs.component.html */ "./src/app/asset-pairs/asset-pairs.component.html"),
            styles: [__webpack_require__(/*! ./asset-pairs.component.css */ "./src/app/asset-pairs/asset-pairs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetPairsComponent);
    return AssetPairsComponent;
}());



/***/ }),

/***/ "./src/app/asset-pairs/asset-pairs.service.ts":
/*!****************************************************!*\
  !*** ./src/app/asset-pairs/asset-pairs.service.ts ***!
  \****************************************************/
/*! exports provided: AssetPairsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPairsService", function() { return AssetPairsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _asset_pair_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-pair.model */ "./src/app/asset-pairs/asset-pair.model.ts");






var AssetPairsService = /** @class */ (function () {
    function AssetPairsService(httpClient) {
        this.httpClient = httpClient;
        this.selectionChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AssetPairsService.prototype.getAssetPairs = function () {
        var _this = this;
        return this.httpClient.get('/api/binancepairs', {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var assetList = [];
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var item = response_1[_i];
                assetList.push(new _asset_pair_model__WEBPACK_IMPORTED_MODULE_5__["AssetPair"](item.Id, item.BaseName, item.QuoteName, item.IsSelected));
            }
            _this.assetList = assetList;
            return _this.assetList;
        }));
    };
    AssetPairsService.prototype.onChange = function (item) {
        var itemIndex = this.assetList.findIndex(function (x) { return x === item; });
        this.assetList[itemIndex].isSelected = !this.assetList[itemIndex].isSelected;
        //this.assetList.forEach((element, index, arr) => {
        //  (element.baseName === item && element.isSelected == false) ? arr[index].isSelected = true
        //    : arr[index].isSelected = false
        //});
        this.selectionChange.next(this.assetList);
    };
    AssetPairsService.prototype.getItem = function (id) {
        return this.httpClient.get('api/getpair/' + id, {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return new _asset_pair_model__WEBPACK_IMPORTED_MODULE_5__["AssetPair"](response.id, response.baseName, response.quoteName, response.isSelected);
        }));
    };
    AssetPairsService.prototype.saveItems = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json');
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', 'api/saveitems', this.assetList, { headers: header, reportProgress: true });
        return this.httpClient.request(req);
    };
    AssetPairsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssetPairsService);
    return AssetPairsService;
}());



/***/ }),

/***/ "./src/app/asset-pairs/filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/asset-pairs/filter.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.baseName.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/asset-pairs/selected-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/asset-pairs/selected-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: SelectedFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedFilterPipe", function() { return SelectedFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectedFilterPipe = /** @class */ (function () {
    function SelectedFilterPipe() {
    }
    SelectedFilterPipe.prototype.transform = function (items) {
        //if (!items) return [];
        //if (!searchText) return items;
        //searchText = searchText.toLowerCase();
        //return items.filter(it => {
        //  return it.baseName.toLowerCase().includes(searchText);
        //});
        return items.filter(function (x) { return x.isSelected; });
    };
    SelectedFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'selectedFilter'
        })
    ], SelectedFilterPipe);
    return SelectedFilterPipe;
}());



/***/ }),

/***/ "./src/app/asset-pairs/websocket.service.ts":
/*!**************************************************!*\
  !*** ./src/app/asset-pairs/websocket.service.ts ***!
  \**************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connectPrice = function (symbol) {
        var _this = this;
        if (!this.priceSubject) {
            this.wsPrice = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1d');
            var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
                _this.wsPrice.onmessage = obs.next.bind(obs);
                _this.wsPrice.onerror = obs.error.bind(obs);
                _this.wsPrice.onclose = obs.complete.bind(obs);
                return _this.wsPrice.close.bind(_this.wsPrice);
            });
            var observer = {
                next: function (data) {
                    if (_this.wsPrice.readyState == WebSocket.OPEN) {
                        console.log('on open WS');
                    }
                }
            };
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
        }
    };
    WebsocketService.prototype.close = function () {
        console.log('on closing WS');
        this.wsPrice.close();
        this.priceSubject = null;
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <span class=\"navbar-brand mb-0 h1\">Indicator Alerts</span>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  \r\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           routerLink=\"assetpairs\"\r\n           [queryParams]=\"{view: '0'}\"\r\n           routerLinkActive=\"active\">Select Assets</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           routerLink=\"assetpairs\"\r\n           [queryParams]=\"{view: '1'}\"\r\n           routerLinkActive=\"active\">View Assets</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-success\"\r\n                [ngStyle]=\"{'visibility': saveVisible ? 'visible' : 'hidden'}\"\r\n                type=\"button\">Save</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  \r\n\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_asset_pairs_asset_pairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/asset-pairs/asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(assetPairsService) {
        this.assetPairsService = assetPairsService;
        this.saveVisible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetPairsService.selectionChange
            .subscribe(function (response) {
            _this.saveVisible = true;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_asset_pairs_asset_pairs_service__WEBPACK_IMPORTED_MODULE_2__["AssetPairsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aznin\source\repos\CryptoIndicatorAlerts\CryptoIndicatorAlerts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map