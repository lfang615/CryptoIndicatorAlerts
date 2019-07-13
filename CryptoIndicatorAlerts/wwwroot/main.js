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
/* harmony import */ var _bitmex_bitmex_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bitmex/bitmex.service */ "./src/app/bitmex/bitmex.service.ts");
/* harmony import */ var _asset_pairs_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asset-pairs/filter.pipe */ "./src/app/asset-pairs/filter.pipe.ts");
/* harmony import */ var _asset_pairs_selected_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./asset-pairs/selected-filter.pipe */ "./src/app/asset-pairs/selected-filter.pipe.ts");
/* harmony import */ var _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset-pairs/asset-detail/asset-detail.component */ "./src/app/asset-pairs/asset-detail/asset-detail.component.ts");
/* harmony import */ var _asset_pairs_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./asset-pairs/asset-edit/asset-edit.component */ "./src/app/asset-pairs/asset-edit/asset-edit.component.ts");
/* harmony import */ var _bitmex_bitmex_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bitmex/bitmex.component */ "./src/app/bitmex/bitmex.component.ts");


















var appRoutes = [
    { path: '', redirectTo: '/assetpairs', pathMatch: 'full' },
    { path: 'assetpairs/view', component: _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__["AssetPairsComponent"] },
    { path: 'detail/:id', component: _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_15__["AssetDetailComponent"] },
    { path: 'edit/:id', component: _asset_pairs_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_16__["AssetEditComponent"] },
    { path: 'assetpairs', component: _asset_pairs_asset_pairs_component__WEBPACK_IMPORTED_MODULE_7__["AssetPairsComponent"] },
    { path: 'bitmex', component: _bitmex_bitmex_component__WEBPACK_IMPORTED_MODULE_17__["BitmexComponent"] }
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
                _asset_pairs_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _asset_pairs_selected_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SelectedFilterPipe"],
                _asset_pairs_asset_detail_asset_detail_component__WEBPACK_IMPORTED_MODULE_15__["AssetDetailComponent"],
                _asset_pairs_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_16__["AssetEditComponent"],
                _bitmex_bitmex_component__WEBPACK_IMPORTED_MODULE_17__["BitmexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_asset_pairs_asset_pairs_service__WEBPACK_IMPORTED_MODULE_10__["AssetPairsService"], _asset_pairs_websocket_service__WEBPACK_IMPORTED_MODULE_11__["WebsocketService"], _bitmex_bitmex_service__WEBPACK_IMPORTED_MODULE_12__["BitmexService"]],
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

module.exports = "<div class=\"row pb-2 pt-5 mt-5 mb-1 border-bottom\">\r\n  <div class=\"col-xs-12 col-md-10\">\r\n    <h1>{{asset.BaseName}}</h1>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-xs-12 col-md-12\">\r\n    <button type=\"button\" class=\"btn btn-primary\">Manage</button>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-4 mt-3\">\r\n    <div class=\"form-group\">\r\n      <h4>Last Closing Price:</h4>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastClose\" readonly value=\"{{priceBTC}}\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-xs-12 col-md-4 mt-4\">\r\n    <div class=\"card text-white bg-dark\">\r\n      <div class=\"card-header\"><h5>Volume</h5></div>\r\n      <div class=\"card-body\">\r\n        <label>1D</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Current</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"vol1D\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Avg 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"volAvg1D\" value=\"{{volAvg1D}}\" />\r\n        </div>\r\n        <label>4H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Current</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"vol4H\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Avg 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"volAvg4H\" value=\"{{volAvg4H}}\" />\r\n        </div>\r\n        <label>1H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Current</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"vol1H\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Avg 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"volAvg1H\" value=\"{{volAvg1H}}\" />\r\n        </div>\r\n        <label>15M</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Current</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"vol15M\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">Avg 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"volAvg15M\" value=\"{{volAvg15M}}\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-4 mt-4\">\r\n    <div class=\"card text-white bg-dark\">\r\n      <div class=\"card-header\"><h5>Moving Average</h5></div>\r\n      <div class=\"card-body\">\r\n        <label>1D</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma24-1\" readonly value=\"{{ma1D_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma24-2\" readonly value=\"{{ma1D_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma24-3\" readonly value=\"{{ma1D_3}}\" />\r\n        </div>\r\n        <label>4H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma4-1\" readonly value=\"{{ma4H_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma4-2\" readonly value=\"{{ma4H_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma4-3\" readonly value=\"{{ma4H_3}}\" />\r\n        </div>\r\n        <label>1H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma1-1\" readonly value=\"{{ma1H_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma1-2\" readonly value=\"{{ma1H_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma1-3\" readonly value=\"{{ma1H_3}}\" />\r\n        </div>\r\n        <label>15M</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma15M-1\" readonly value=\"{{ma15M_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma15M-2\" readonly value=\"{{ma15M_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">MA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ma15M-3\" readonly value=\"{{ma15M_3}}\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-4 mt-4\">\r\n    <div class=\"card text-white bg-dark\">\r\n      <div class=\"card-header\"><h5>Exponential Moving Average</h5></div>\r\n      <div class=\"card-body\">\r\n        <label>1D</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema24-1\" readonly value=\"{{ema1D_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema24-2\" readonly value=\"{{ema1D_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema24-3\" readonly value=\"{{ema1D_3}}\" />\r\n        </div>\r\n        <label>4H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema4-1\" readonly value=\"{{macd1D}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema4-2\" readonly value=\"{{ema4H_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema4-3\" readonly value=\"{{ema4H_3}}\" />\r\n        </div>\r\n        <label>1H</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema1-1\" readonly value=\"{{ema1H_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema1-2\" readonly value=\"{{ema1H_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema1-3\" readonly value=\"{{ema1H_3}}\" />\r\n        </div>\r\n        <label>15M</label>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 20</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema15M-1\" readonly value=\"{{ema15M_1}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 50</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema15M-2\" readonly value=\"{{ema15M_2}}\" />\r\n        </div>\r\n        <div class=\"input-group mb-1\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">EMA 100</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"ema15M-3\" readonly value=\"{{ema15M_3}}\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-4 mt-4\">\r\n    <div class=\"card text-white bg-dark\">\r\n      <div class=\"card-header\"><h5>RSI</h5></div>\r\n      <div class=\"card-body\">\r\n        <label for=\"rsi24\">Current 24HR RSI</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"rsi24\" readonly value=\"{{rsi1D}}\" />\r\n        <label for=\"rsi4\">Current 4HR RSI</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"rsi4\" readonly />\r\n        <label for=\"rsi1\">Current 1HR MA</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"rsi1\" />\r\n        <label for=\"rsi15M\">Current 15M RSI</label>\r\n        <input type=\"text\" id=\"rsi15M\" class=\"form-control\" readonly />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asset_pairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../websocket.service */ "./src/app/asset-pairs/websocket.service.ts");






var AssetDetailComponent = /** @class */ (function () {
    function AssetDetailComponent(route, assetPairsService, websocketService) {
        this.route = route;
        this.assetPairsService = assetPairsService;
        this.websocketService = websocketService;
    }
    AssetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.assetPairsService.aseetList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.find(function (item) { return item.Id === id; }); }))
            .subscribe(function (item) { _this.asset = item; });
        this.getVolumes();
        this.getMAs();
        this.getEMAs();
        this.getRSIs();
        this.getMACD();
        this.assetPairsService.load(id);
        //this.assetPairsService.getItem(id)
        //  .pipe(map((x: AssetPair) => {
        //    return new AssetPair(x.id, x.baseName, x.quoteName, x.isSelected)
        //  }))
        //  .subscribe((response) => {
        //    this.asset = response;
        //    console.log(this.asset.baseName)
        //  } 
    };
    AssetDetailComponent.prototype.getVolumes = function () {
        var _this = this;
        this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "1d")
            .subscribe(function (item) { _this.volAvg1D = item; });
        this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "4h")
            .subscribe(function (item) { _this.volAvg4H = item; });
        this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "1h")
            .subscribe(function (item) { _this.volAvg1H = item; });
        this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "15m")
            .subscribe(function (item) { _this.volAvg15M = item; });
    };
    AssetDetailComponent.prototype.getMAs = function () {
        var _this = this;
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "20")
            .subscribe(function (item) { _this.ma1D_1 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "50")
            .subscribe(function (item) { _this.ma1D_2 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "100")
            .subscribe(function (item) { _this.ma1D_3 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "20")
            .subscribe(function (item) { _this.ma4H_1 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "50")
            .subscribe(function (item) { _this.ma4H_2 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "100")
            .subscribe(function (item) { _this.ma4H_3 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "20")
            .subscribe(function (item) { _this.ma1H_1 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "50")
            .subscribe(function (item) { _this.ma1H_2 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "100")
            .subscribe(function (item) { _this.ma1H_3 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "20")
            .subscribe(function (item) { _this.ma15M_1 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "50")
            .subscribe(function (item) { _this.ma15M_2 = item; });
        this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "100")
            .subscribe(function (item) { _this.ma15M_3 = item; });
    };
    AssetDetailComponent.prototype.getMACD = function () {
        var _this = this;
        this.assetPairsService.getMACD(this.asset.BaseName + this.asset.QuoteName, "1d")
            .subscribe(function (item) { _this.macd1D = item; });
    };
    AssetDetailComponent.prototype.getEMAs = function () {
        //this.assetPairsService.getEMA(this.asset.BaseName + this.asset.QuoteName, "1d", "20")
        //  .subscribe((item: string) => { this.ema1D_1 = item; })
        var _this = this;
        this.assetPairsService.getEMA(this.asset.BaseName + this.asset.QuoteName, "1d", "9")
            .subscribe(function (item) { _this.ema1D_2 = item; });
        //this.assetPairsService.getEMA(this.asset.BaseName + this.asset.QuoteName, "1d", "200")
        //  .subscribe((item: string) => { this.ema1D_3 = item; })
    };
    AssetDetailComponent.prototype.getRSIs = function () {
        var _this = this;
        this.assetPairsService.getRSI(this.asset.BaseName + this.asset.QuoteName, "1d")
            .subscribe(function (item) { _this.rsi1D = item; });
    };
    AssetDetailComponent.prototype.connectWsPrice = function () {
        var _this = this;
        this.websocketService
            .connectPrice((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.connectWsVolume1D = function () {
        var _this = this;
        this.websocketService
            .connectVolume1D((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.connectWsVolume4H = function () {
        var _this = this;
        this.websocketService
            .connectVolume4H((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.connectWsVolume1H = function () {
        var _this = this;
        this.websocketService
            .connectVolume1H((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.connectWsVolume15M = function () {
        var _this = this;
        this.websocketService
            .connectVolume15M((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
            .subscribe(function (response) {
            _this.priceBTC = JSON.parse(response.data)['k']['c'];
        });
    };
    AssetDetailComponent.prototype.ngOnDestroy = function () {
        //this.websocketService.close();
    };
    AssetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-detail',
            template: __webpack_require__(/*! ./asset-detail.component.html */ "./src/app/asset-pairs/asset-detail/asset-detail.component.html"),
            styles: [__webpack_require__(/*! ./asset-detail.component.css */ "./src/app/asset-pairs/asset-detail/asset-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _asset_pairs_service__WEBPACK_IMPORTED_MODULE_4__["AssetPairsService"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"]])
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

module.exports = "<div class=\"row pb-2 pt-5 mt-5 mb-1 border-bottom\">\r\n  <div class=\"col-xs-6 col-md-10\">\r\n    <h1>Manage - {{asset.BaseName}}</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4\">\r\n  <div class=\"col-xs-10 col-md-10\"></div>\r\n  <div class=\"col-xs-2 col-md-2\">\r\n    <button class=\"btn btn-success\" type=\"button\">Save</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-3\">\r\n  <div class=\"col-xs-12\">\r\n    <form>\r\n      <p class=\"mt-3\">\r\n        <button class=\"btn btn-outline-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#volGroup\">Volume</button>\r\n      </p>\r\n      <div id=\"volGroup\" class=\"collapse card card-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"volLength\">Volume MA Length</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"volLength\" name=\"volLength\"/>\r\n        </div>\r\n      </div>\r\n      \r\n      <p class=\"mt-3\">\r\n        <button class=\"btn btn-outline-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#maGroup\">Moving Average</button>\r\n      </p>\r\n      <div id=\"maGroup\" class=\"collapse card card-body card card-body\">\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableMA1\" name=\"enableMA1\"/>\r\n          <label class=\"form-check-label\" for=\"enableMA1\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maPeriod1\">Timeframe 1</label>\r\n          <select class=\"form-control\" id=\"maPeriod1\" name=\"maPeriod1\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">{{ time }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maShort1\">MA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maShort1\" name=\"maShort1\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maMedium1\">MA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maMedium1\" name=\"maMedium1\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maLong1\">MA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maLong1\" name=\"maLong1\"/>\r\n        </div>\r\n\r\n        <div class=\"form-check mt-1\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableMA2\" name=\"enableMA2\"/>\r\n          <label class=\"form-check-label\" for=\"enableMA2\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maPeriod2\">Timeframe 2</label>\r\n          <select class=\"form-control\" id=\"maPeriod2\" name=\"maPeriod2\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maShort2\">MA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maShort2\" name=\"maShort2\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maMedium2\">MA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maMedium2\" name=\"maMedium2\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maLong2\">MA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maLong2\" name=\"maLong2\" />\r\n        </div>\r\n\r\n        <div class=\"form-check mt-1\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableMA3\" name=\"enableMA3\"/>\r\n          <label class=\"form-check-label\" for=\"enableMA3\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maPeriod3\">Timeframe 3</label>\r\n          <select class=\"form-control\" id=\"maPeriod3\" name=\"maPeriod3\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maShort3\">MA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maShort3\" name=\"maShort3\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maMedium3\">MA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maMedium3\" name=\"maMedium3\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"maLong3\">MA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"maLong3\" name=\"maLong3\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"mt-3\">\r\n        <button class=\"btn btn-outline-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#emaGroup\">EMA</button>\r\n      </p>\r\n      <div id=\"emaGroup\" class=\"collapse card card-body\">\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableEMA1\" name=\"enableEMA1\" />\r\n          <label class=\"form-check-label\" for=\"enableEMA1\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaPeriod1\">Timeframe 1</label>\r\n          <select class=\"form-control\" id=\"emaPeriod1\" name=\"emaPeriod1\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaShort1\">EMA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaShort1\" name=\"emaShort1\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaMedium1\">EMA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaMedium1\" name=\"emaMedium1\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaLong1\">EMA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaLong1\" name=\"emaLong1\"/>\r\n        </div>\r\n\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableEMA2\" name=\"enableEMA2\"/>\r\n          <label class=\"form-check-label\" for=\"enableEMA2\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaPeriod2\">Timeframe 2</label>\r\n          <select class=\"form-control\" id=\"emaPeriod2\" name=\"emaPeriod2\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaShort2\">MA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaShort2\" name=\"emaShort2\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaMedium2\">MA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaMedium2\" name=\"emaMedium2\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaLong2\">MA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaLong2\" name=\"emaLong2\" />\r\n        </div>\r\n\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableEMA3\" name=\"enableEMA3\" />\r\n          <label class=\"form-check-label\" for=\"enableEMA3\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaPeriod3\">Timeframe 3</label>\r\n          <select class=\"form-control\" id=\"emaPeriod3\" name=\"emaPeriod3\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaShort3\">EMA - Short</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaShort3\" name=\"emaShort3\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaMedium3\">EMA - Medium</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaMedium3\" name=\"emaMedium3\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emaLong3\">EMA - Long</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"emaLong3\" name=\"emaLong3\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"mt-3\">\r\n        <button class=\"btn btn-outline-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#rsiGroup\">RSI</button>\r\n      </p>\r\n      <div id=\"rsiGroup\" class=\"collapse card card-body\">\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableRSI\" name=\"enableRSI\"/>\r\n          <label class=\"form-check-label\" for=\"enableRSI\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"rsiPeriod1\">Timeframe 1</label>\r\n          <select class=\"form-control\" id=\"rsiPeriod1\" name=\"rsiPeriod1\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"rsiPeriod2\">Timeframe 2</label>\r\n          <select class=\"form-control\" id=\"rsiPeriod2\" name=\"rsiPeriod2\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"rsiPeriod3\">Timeframe 3</label>\r\n          <select class=\"form-control\" id=\"rsiPeriod3\" name=\"rsiPeriod3\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"mt-3\">\r\n        <button class=\"btn btn-outline-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"macdGroup\">MACD</button>\r\n      </p>\r\n      <div id=\"macdGroup\" class=\"collapse card card-body\">\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"enableMACD\" name=\"enableMACD\"/>\r\n          <label class=\"form-check-label\" for=\"enableMACD\">Enable</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"macdPeriod1\">Timeframe 1</label>\r\n          <select class=\"form-control\" id=\"macdPeriod1\" name=\"macdPeriod1\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"macdPeriod2\">Timeframe 2</label>\r\n          <select class=\"form-control\" id=\"macdPeriod2\" name=\"macdPeriod2\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"macdPeriod3\">Timeframe 3</label>\r\n          <select class=\"form-control\" id=\"macdPeriod3\" name=\"macdPeriod3\">\r\n            <option value=\"0\"></option>\r\n            <option *ngFor=\"let time of timeFrames\"\r\n                    value=\"time\">\r\n              {{ time }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asset_pairs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset-pairs.service */ "./src/app/asset-pairs/asset-pairs.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AssetEditComponent = /** @class */ (function () {
    function AssetEditComponent(assetPairsService, route) {
        this.assetPairsService = assetPairsService;
        this.route = route;
        this.timeFrames = ['5M', '15M', '1H', '4H', '1D', '1W'];
    }
    AssetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.assetPairsService.aseetList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return items.find(function (item) { return item.Id === id; }); }))
            .subscribe(function (item) { _this.asset = item; });
    };
    AssetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-edit',
            template: __webpack_require__(/*! ./asset-edit.component.html */ "./src/app/asset-pairs/asset-edit/asset-edit.component.html"),
            styles: [__webpack_require__(/*! ./asset-edit.component.css */ "./src/app/asset-pairs/asset-edit/asset-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_asset_pairs_service__WEBPACK_IMPORTED_MODULE_3__["AssetPairsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\r\n\r\n  <!--<div class=\"row\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item nav-link active\" [ngClass]=\"{'active': !viewSelected}\">\r\n        <a (click)=\"viewSelected = !viewSelected\">Select Assets</a>\r\n      </li>\r\n      <li class=\"nav-item nav-link\" [ngClass]=\"{'active': viewSelected }\">\r\n        <a (click)=\"viewSelected = !viewSelected\">View Assets</a>\r\n      </li>\r\n    </ul>\r\n  </div>-->\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-xs-12\" *ngIf=\"!viewSelected\">\r\n      <h2>BTC Pairs</h2>\r\n      <input [(ngModel)]=\"searchText\" class=\"form-control\" id=\"assetSearch\" type=\"text\" placeholder=\"Search..\" />\r\n      <div class=\"list-group\" id=\"assetList\">\r\n        <button type=\"button\"\r\n                class=\"list-group-item list-group-item-action\"\r\n                [ngClass]=\"{'list-group-item-primary': asset.IsSelected }\"\r\n                *ngFor=\"let i = index; let asset of assetList | filter: searchText\"\r\n                (click)=\"addToTrack(asset)\">\r\n          {{ asset.BaseName }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"viewSelected && personalList\">\r\n    <!--<div id=\"trackedList\">-->\r\n    <!--<div class=\"list-group\" *ngFor=\"let asset of personalList; let even = even; let odd = odd; let i = index\">-->\r\n    <div class=\"col-xs-12\">\r\n      <h2>Tracked Assets</h2> \r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-action\" style=\"padding: 5px\"\r\n            *ngFor=\"let asset of (assetList | selectedFilter); let even = even; let odd = odd; let i = index\"\r\n            (click)=\"onSelectPersonal(asset); setIndex(i)\">\r\n          <div class=\"btn-group dropright\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-seconday dropdown-toggle\"\r\n                    data-toggle=\"dropdown\">\r\n              {{asset.BaseName}}\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/detail', asset.Id]\">View</a>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/edit', asset.Id]\">Manage</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Remove</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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
        //this.assetPairsService
        //  .getAssetPairs()
        //  .subscribe((response) =>
        //  {
        //    this.assetList = response;
        //  });
        var _this = this;
        this.assetPairsService.aseetList.subscribe(function (items) {
            _this.assetList = items;
        });
        this.assetPairsService.loadAll();
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
        var isSelected = this.assetList.find(function (x) { return x.BaseName === item.BaseName && x.IsSelected == true; });
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
        this.router.navigate(['detail', item.Id], { relativeTo: this.route });
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




var AssetPairsService = /** @class */ (function () {
    function AssetPairsService(httpClient) {
        this.httpClient = httpClient;
        this.selectionChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dataStore = [];
        this._assetList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.loadAll();
    }
    Object.defineProperty(AssetPairsService.prototype, "aseetList", {
        get: function () {
            return this._assetList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AssetPairsService.prototype.loadAll = function () {
        var _this = this;
        this.httpClient.get('/api/binancepairs', {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (data) {
            _this.dataStore = data;
            _this._assetList.next(Object.assign([], _this.dataStore));
        });
        //.pipe(map(
        //  (response: any[]) => {
        //    const assetList = [];
        //    for (let item of response) {
        //      assetList.push(new AssetPair(item.Id, item.BaseName, item.QuoteName, item.IsSelected));
        //    }
        //    this.assetList = assetList;
        //    return this.assetList;
        //  }))
    };
    AssetPairsService.prototype.load = function (id) {
        var _this = this;
        this.httpClient.get('api/getpair/' + id, {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (data) {
            _this.dataStore.forEach(function (item, index) {
                if (item.Id === data.Id) {
                    _this.dataStore[index] = data;
                }
            });
            _this._assetList.next(Object.assign([], _this.dataStore));
        });
    };
    AssetPairsService.prototype.onChange = function (item) {
        var itemIndex = this.dataStore.findIndex(function (x) { return x === item; });
        this.dataStore[itemIndex].IsSelected = !this.dataStore[itemIndex].IsSelected;
        //this.assetList.forEach((element, index, arr) => {
        //  (element.baseName === item && element.isSelected == false) ? arr[index].isSelected = true
        //    : arr[index].isSelected = false
        //});
        this.selectionChange.next(this.dataStore.slice());
    };
    AssetPairsService.prototype.getItem = function (id) {
        return this.httpClient.get('api/getpair/' + id, {
            observe: 'body',
            responseType: 'json'
        }).subscribe(function (item) { return item; });
        //.pipe(map(
        //  (response: any) => {
        //    return new AssetPair(response.id, response.baseName, response.quoteName, response.isSelected);
        //}));
    };
    AssetPairsService.prototype.getVolume = function (symbol, interval) {
        return this.httpClient.get('api/volume/' + symbol + '/' + interval);
    };
    AssetPairsService.prototype.getMA = function (symbol, interval, length) {
        return this.httpClient.get('api/ma/' + symbol + '/' + interval + '/' + length);
    };
    AssetPairsService.prototype.getRSI = function (symbol, interval) {
        return this.httpClient.get('api/rsi/' + symbol + '/' + interval);
    };
    AssetPairsService.prototype.getEMA = function (symbol, interval, length) {
        return this.httpClient.get('api/ema/' + symbol + '/' + interval + '/' + length);
    };
    AssetPairsService.prototype.getMACD = function (symbol, interval) {
        return this.httpClient.get('api/macd/' + symbol + '/' + interval);
    };
    AssetPairsService.prototype.saveItems = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json');
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', 'api/saveitems', this.dataStore, { headers: header, reportProgress: true });
        return this.httpClient.request(req);
    };
    AssetPairsService.prototype.ngOnDestroy = function () {
        console.log('destroyed bitch.');
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
        return items.filter(function (x) { return x.IsSelected; });
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
                        console.log('on open WS' + symbol + 'price stream & 24HR Vol');
                    }
                }
            };
            this.priceSubject = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
            return this.priceSubject;
        }
    };
    WebsocketService.prototype.connectVolume1D = function (symbol) {
        var _this = this;
        this.wsVolume1D = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1d');
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            _this.wsVolume1D.onopen = function () { console.log('on open Ws' + symbol + '1D vol stream'); };
            _this.wsVolume1D.onmessage = obs.next.bind(obs);
            _this.wsVolume1D.onerror = obs.error.bind(obs);
            _this.wsVolume1D.onclose = obs.complete.bind(obs);
            return _this.wsVolume1D.close.bind(_this.wsVolume1D);
        });
        var observer = {
            next: function (data) {
            }
        };
        this.volumeSubject1D = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
        return this.volumeSubject1D;
    };
    WebsocketService.prototype.connectVolume4H = function (symbol) {
        var _this = this;
        this.wsVolume4H = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_4h');
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            _this.wsVolume4H.onopen = function () { console.log('on open Ws' + symbol + '4H vol stream'); };
            _this.wsVolume4H.onmessage = obs.next.bind(obs);
            _this.wsVolume4H.onerror = obs.error.bind(obs);
            _this.wsVolume4H.onclose = obs.complete.bind(obs);
            return _this.wsVolume4H.close.bind(_this.wsVolume4H);
        });
        var observer = {
            next: function (data) {
            }
        };
        this.volumeSubject4H = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
        return this.volumeSubject4H;
    };
    WebsocketService.prototype.connectVolume1H = function (symbol) {
        var _this = this;
        this.wsVolume1H = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1h');
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            _this.wsVolume1H.onopen = function () { console.log('on open Ws' + symbol + '1H vol stream'); };
            _this.wsVolume1H.onmessage = obs.next.bind(obs);
            _this.wsVolume1H.onerror = obs.error.bind(obs);
            _this.wsVolume1H.onclose = obs.complete.bind(obs);
            return _this.wsVolume1H.close.bind(_this.wsVolume1H);
        });
        var observer = {
            next: function (data) {
            }
        };
        this.volumeSubject1H = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
        return this.volumeSubject1H;
    };
    WebsocketService.prototype.connectVolume15M = function (symbol) {
        var _this = this;
        this.wsVolume15M = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_15m');
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            _this.wsVolume15M.onopen = function () { console.log('on open Ws' + symbol + '15M vol stream'); };
            _this.wsVolume15M.onmessage = obs.next.bind(obs);
            _this.wsVolume15M.onerror = obs.error.bind(obs);
            _this.wsVolume15M.onclose = obs.complete.bind(obs);
            return _this.wsVolume15M.close.bind(_this.wsVolume15M);
        });
        var observer = {
            next: function (data) {
            }
        };
        this.volumeSubject15M = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
        return this.volumeSubject15M;
    };
    WebsocketService.prototype.close = function () {
        console.log('on closing WS');
        this.wsPrice.close();
        this.wsVolume1D.close();
        this.wsVolume4H.close();
        this.wsVolume1H.close();
        this.wsVolume15M.close();
        this.priceSubject = null;
        this.volumeSubject1D = null;
        this.volumeSubject4H = null;
        this.volumeSubject1H = null;
        this.volumeSubject15M = null;
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/bitmex/bitmex.component.css":
/*!*********************************************!*\
  !*** ./src/app/bitmex/bitmex.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpdG1leC9iaXRtZXguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bitmex/bitmex.component.html":
/*!**********************************************!*\
  !*** ./src/app/bitmex/bitmex.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row pb-2 pt-5 mt-5 mb-1\">\r\n  <!--<button type=\"button\" class=\"btn btn-success\" (click)=\"testOrder()\">Test Order!</button>-->\r\n  <div class=\"col-xs-12 col-md-10\">\r\n    <div class=\"btn-group\" role=\"group\">\r\n      <button type=\"button\"\r\n              class=\"btn btn-primary\"\r\n              [ngClass]=\"{'active': mktOrderSelect }\"\r\n              (click)=\"changeOrderForm('market')\">\r\n        Market\r\n      </button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-primary\"\r\n              [ngClass]=\"{'active': lmtOrderSelect }\"\r\n              (click)=\"changeOrderForm('limit')\">\r\n        Limit\r\n      </button>\r\n      <div class=\"btn-group\" role=\"group\">\r\n        <button id=\"btnGroupDrop1\"\r\n                type=\"button\"\r\n                class=\"btn btn-primary dropdown-toggle\"\r\n                [ngClass]=\"{'active': stopMktSelect || stopLmtSelect || profitLmtSelect || trailStopSelect }\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\">\r\n          Stop\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n          <a class=\"dropdown-item\"\r\n             [ngClass]=\"{'active': stopMktSelect}\"\r\n             [routerLink]=\"\"\r\n             (click)=\"changeOrderForm('stop')\">Stop Market</a>\r\n          <a class=\"dropdown-item\"\r\n             [ngClass]=\"{'active': stopLmtSelect}\"\r\n             [routerLink]=\"\"\r\n             (click)=\"changeOrderForm('stopLmt')\">Stop Limit</a>\r\n          <a class=\"dropdown-item\"\r\n             [ngClass]=\"{'active': profitLmtSelect}\"\r\n             [routerLink]=\"\"\r\n             (click)=\"changeOrderForm('profitLmt')\">Take Profit Limit</a>\r\n          <a class=\"dropdown-item\"\r\n             [ngClass]=\"{'active': trailStopSelect}\"\r\n             [routerLink]=\"\"\r\n             (click)=\"changeOrderForm('trailStop')\">Trailing Stop</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"mktOrderSelect\">\r\n  <div class=\"col-xs-12 col-md-3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"mktQuantity\">Quantity</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"mktQuantity\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnBuyMkt\" class=\"btn btn-primary mr-2\">Buy Market</button>\r\n      <button type=\"submit\" id=\"btnSellMkt\" class=\"btn btn-primary\">Sell Market</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"lmtOrderSelect\">\r\n  <div class=\"col-xs-12 col-md-3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"lmtQuantity\">Quantity</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"limQuantity\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lmtPrice\">Limit Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"limPrice\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnLmtBuy\" class=\"btn btn-primary mr-2\">Buy / Long</button>\r\n      <button type=\"submit\" id=\"btnLmtSell\" class=\"btn btn-primary\">Sell / Short</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"stopMktSelect\">\r\n  <div class=\"col-xs-12 col-md-3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"mktStopQty\">Quantity</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"mktStopQty\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"mktStopPrice\">Stop Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"mktStopPrice\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnBuyStop\" class=\"btn btn-primary mr-2\">Set Buy Stop</button>\r\n      <button type=\"submit\" id=\"btnSellStop\" class=\"btn btn-primary\">Set Sell Stop</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"stopLmtSelect\">\r\n  <div class=\"col-xs-12 col-md-3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"mktStopQty\">Stop Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"mktStopQty\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lmtStopPrice\">Limit Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lmtStopPrice\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lmtTriggerStop\">Stop Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lmtTriggerStop\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnBuyLmtStop\" class=\"btn btn-primary mr-2\">Set Buy Stop</button>\r\n      <button type=\"submit\" id=\"btnSellLmtStop\" class=\"btn btn-primary\">Set Sell Stop</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"profitLmtSelect\">\r\n  <div class=\"col-xs-12 col-md-5\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"profitLmtQty\">Quantity</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"profitLmtQty\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"profitLmtPrice\">Limit Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"profitLmtPrice\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"profitTrigger\">Trigger Price</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"profitTrigger\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnLmtProfitBuy\" class=\"btn btn-primary mr-2\">Take Profit Buy</button>\r\n      <button type=\"submit\" id=\"btnLmtProfitSell\" class=\"btn btn-primary\">Take Profit Sell</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"trailStopSelect\">\r\n  <div class=\"col-xs-12 col-md-3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"trailQty\">Quantity</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"trailQty\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"trailValue\">Trail Value</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"trailValue\" />\r\n      </div>\r\n      <button type=\"submit\" id=\"btnTrail\" class=\"btn btn-primary mr-2\">Set Buy Stop</button>\r\n      <button type=\"submit\" id=\"btnTrail\" class=\"btn btn-primary\">Set Sell Stop</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/bitmex/bitmex.component.ts":
/*!********************************************!*\
  !*** ./src/app/bitmex/bitmex.component.ts ***!
  \********************************************/
/*! exports provided: BitmexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmexComponent", function() { return BitmexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bitmex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitmex.service */ "./src/app/bitmex/bitmex.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BitmexComponent = /** @class */ (function () {
    function BitmexComponent(bitmexService, route, router) {
        this.bitmexService = bitmexService;
        this.route = route;
        this.router = router;
        this.mktOrderSelect = true;
        this.lmtOrderSelect = false;
        this.stopMktSelect = false;
        this.stopLmtSelect = false;
        this.profitLmtSelect = false;
        this.trailStopSelect = false;
    }
    BitmexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bitmexService.orderList.subscribe(function (items) {
            _this.orderList = items;
        });
        this.bitmexService.loadOrders();
    };
    BitmexComponent.prototype.changeOrderForm = function (formView) {
        switch (formView) {
            case "market":
                this.mktOrderSelect = true;
                this.lmtOrderSelect = false;
                this.stopMktSelect = false;
                this.stopLmtSelect = false;
                this.profitLmtSelect = false;
                this.trailStopSelect = false;
                break;
            case "limit":
                this.mktOrderSelect = false;
                this.lmtOrderSelect = true;
                this.stopMktSelect = false;
                this.stopLmtSelect = false;
                this.profitLmtSelect = false;
                this.trailStopSelect = false;
                break;
            case "stop":
                this.mktOrderSelect = false;
                this.lmtOrderSelect = false;
                this.stopMktSelect = true;
                this.stopLmtSelect = false;
                this.profitLmtSelect = false;
                this.trailStopSelect = false;
                break;
            case "stopLmt":
                this.mktOrderSelect = false;
                this.lmtOrderSelect = false;
                this.stopMktSelect = false;
                this.stopLmtSelect = true;
                this.profitLmtSelect = false;
                this.trailStopSelect = false;
                break;
            case "profitLmt":
                this.mktOrderSelect = false;
                this.lmtOrderSelect = false;
                this.stopMktSelect = false;
                this.stopLmtSelect = false;
                this.profitLmtSelect = true;
                this.trailStopSelect = false;
                break;
            case "trailStop":
                this.mktOrderSelect = false;
                this.lmtOrderSelect = false;
                this.stopMktSelect = false;
                this.stopLmtSelect = false;
                this.profitLmtSelect = false;
                this.trailStopSelect = true;
                break;
        }
    };
    BitmexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bitmex',
            template: __webpack_require__(/*! ./bitmex.component.html */ "./src/app/bitmex/bitmex.component.html"),
            styles: [__webpack_require__(/*! ./bitmex.component.css */ "./src/app/bitmex/bitmex.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bitmex_service__WEBPACK_IMPORTED_MODULE_2__["BitmexService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BitmexComponent);
    return BitmexComponent;
}());



/***/ }),

/***/ "./src/app/bitmex/bitmex.service.ts":
/*!******************************************!*\
  !*** ./src/app/bitmex/bitmex.service.ts ***!
  \******************************************/
/*! exports provided: BitmexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmexService", function() { return BitmexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BitmexService = /** @class */ (function () {
    function BitmexService(httpClient) {
        this.httpClient = httpClient;
        this.dataStore = [];
        this._orderList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.loadOrders();
    }
    Object.defineProperty(BitmexService.prototype, "orderList", {
        get: function () {
            return this._orderList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    BitmexService.prototype.loadOrders = function () {
        var _this = this;
        this.httpClient.get('/api/orders', {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (data) {
            _this.dataStore = data;
        });
    };
    BitmexService.prototype.ngOnDestroy = function () {
    };
    BitmexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BitmexService);
    return BitmexService;
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

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-dark\">\r\n  <span class=\"navbar-brand mb-0 h1\">Indicator Alerts</span>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  \r\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           routerLink=\"assetpairs\"\r\n           [queryParams]=\"{view: '0'}\"\r\n           routerLinkActive=\"active\">Select Assets</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           routerLink=\"assetpairs\"\r\n           [queryParams]=\"{view: '1'}\"\r\n           routerLinkActive=\"active\">View Assets</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           routerLink=\"bitmex\"\r\n           routerLinkActive=\"active\">Trade</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-success\"\r\n                (click)=\"onSave()\"\r\n                [ngStyle]=\"{'visibility': saveVisible ? 'visible' : 'hidden'}\"\r\n                type=\"button\">Save</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  \r\n\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n"

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
    HeaderComponent.prototype.onSave = function () {
        this.assetPairsService.saveItems()
            .subscribe(function (response) {
            console.log(response);
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

module.exports = __webpack_require__(/*! C:\Users\lfang\source\repos\CryptoIndicatorAlerts\CryptoIndicatorAlerts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map