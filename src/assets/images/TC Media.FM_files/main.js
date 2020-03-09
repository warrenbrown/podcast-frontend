(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hompage/hompage.component */ "./src/app/hompage/hompage.component.ts");
/* harmony import */ var _podcast_podcast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./podcast/podcast.component */ "./src/app/podcast/podcast.component.ts");
/* harmony import */ var _podcast_show_podcast_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./podcast-show/podcast-show.component */ "./src/app/podcast-show/podcast-show.component.ts");
/* harmony import */ var _episode_detail_episode_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episode-detail/episode-detail.component */ "./src/app/episode-detail/episode-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _podcast_new_podcast_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./podcast-new/podcast-new.component */ "./src/app/podcast-new/podcast-new.component.ts");












const routes = [
    { path: 'home', component: _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_2__["HompageComponent"] },
    { path: 'podcast', component: _podcast_podcast_component__WEBPACK_IMPORTED_MODULE_3__["PodcastComponent"] },
    { path: 'podcast/show', component: _podcast_show_podcast_show_component__WEBPACK_IMPORTED_MODULE_4__["PodcastShowComponent"] },
    { path: 'episode/detail', component: _episode_detail_episode_detail_component__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'podcast/new', component: _podcast_new_podcast_new_component__WEBPACK_IMPORTED_MODULE_9__["PodcastNewComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'podcast-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hompage/hompage.component */ "./src/app/hompage/hompage.component.ts");
/* harmony import */ var _podcast_podcast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./podcast/podcast.component */ "./src/app/podcast/podcast.component.ts");
/* harmony import */ var _podcast_show_podcast_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./podcast-show/podcast-show.component */ "./src/app/podcast-show/podcast-show.component.ts");
/* harmony import */ var _episode_detail_episode_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./episode-detail/episode-detail.component */ "./src/app/episode-detail/episode-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _podcast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./podcast.service */ "./src/app/podcast.service.ts");
/* harmony import */ var _podcast_new_podcast_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./podcast-new/podcast-new.component */ "./src/app/podcast-new/podcast-new.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _podcast_service__WEBPACK_IMPORTED_MODULE_13__["PodcastService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_6__["HompageComponent"],
        _podcast_podcast_component__WEBPACK_IMPORTED_MODULE_7__["PodcastComponent"],
        _podcast_show_podcast_show_component__WEBPACK_IMPORTED_MODULE_8__["PodcastShowComponent"],
        _episode_detail_episode_detail_component__WEBPACK_IMPORTED_MODULE_9__["EpisodeDetailComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
        _podcast_new_podcast_new_component__WEBPACK_IMPORTED_MODULE_14__["PodcastNewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _hompage_hompage_component__WEBPACK_IMPORTED_MODULE_6__["HompageComponent"],
                    _podcast_podcast_component__WEBPACK_IMPORTED_MODULE_7__["PodcastComponent"],
                    _podcast_show_podcast_show_component__WEBPACK_IMPORTED_MODULE_8__["PodcastShowComponent"],
                    _episode_detail_episode_detail_component__WEBPACK_IMPORTED_MODULE_9__["EpisodeDetailComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                    _podcast_new_podcast_new_component__WEBPACK_IMPORTED_MODULE_14__["PodcastNewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [
                    _podcast_service__WEBPACK_IMPORTED_MODULE_13__["PodcastService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 108, vars: 0, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], ["id", "podcast_show"], ["id", "show_banner"], ["id", "links"], [1, "wrapper_skinny"], [1, "current"], ["href", ""], ["id", "episodes"], [1, "cf"], [1, "episode_thumbnail"], ["src", "https://picsum.photos/150/150", "alt", ""], [1, "episode_overview"], ["routerLink", "/episode/detail"], [1, "description"], [1, "authorized_links"], [1, "pagination"], [1, "previous_page", "disabled"], ["href", "#", 1, "next_page"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cards Corner Podcast Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Current Episoded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "New Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxvQkFBQTtBQ0hKO0FESUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDRlI7QURHUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSwyQ0FBQTtFQUNBLHNCQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNBaEI7QURFWTtFQUNJLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMUJiO0FDMkJQO0FEQ2dCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNDcEI7QURHZ0I7RUFDSSxZQUFBO0FDRHBCO0FESW9CO0VBQ0ksY0F6Q1o7QUN1Q1o7QURXSTtFQUNJLG1CQWxERDtFQW1EQyxrQkFBQTtFQUNBLGVBQUE7QUNSUjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMURKO0VBMkRJLG9CQUFBO0FDUFo7QURTUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ1BaO0FEU1E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBeEVKO0VBeUVJLGVBQUE7RUFDQSxtQkF6RUE7RUEwRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNQWjtBRFFZO0VBQ0ksbUJBQUE7QUNOaEI7QURVSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEU1E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNQWjtBRFNRO0VBQ0ksZ0JBQUE7QUNQWjtBRFVJO0VBQ0ksZUFBQTtBQ1JSO0FEU1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNQWjtBRFFZO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDTmhCO0FET2dCO0VBQ0ksbUJBQUE7QUNMcEI7QURPZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0xwQjtBRE1vQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNKeEI7QURPZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTHBCO0FET3dCO0VBQ0ksY0EzSHJCO0VBNEhxQixxQkFBQTtBQ0w1QjtBRFFvQjtFQUNJLGNBQUE7QUNOeEI7QURRb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDTnhCO0FET3dCO0VBQ0ksY0F2SWhCO0VBd0lnQixrQkFBQTtBQ0w1QjtBRFlJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNWUjtBRFdRO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1RaO0FEV1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDVFo7QURXUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNUWjtBRFlJO0VBQ0ksZUFBQTtBQ1ZSO0FEV1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1RaO0FEVVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JoQjtBRFNnQjtFQUNJLGNBakxiO0VBa0xhLHFCQUFBO0FDUHBCO0FEUW9CO0VBQ0ksY0FyTFo7QUMrS1o7QURVWTtFQUNJLGNBMUxKO0FDa0xaIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZmZmZjtcbiRoaWdobGlnaHQ6ICNkMjY3NGU7XG4kZGFyazogIzIyMjkyZTtcblxuI3BvZGNhc3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMjMlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMSUgMnJlbSAxJTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW0gLjM1cmVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDcuNSU7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX2NvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMCAuMjVyZW0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3BvZGNhc3Rfc2hvdyB7XG4gICAgI3Nob3dfYmFubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMFxuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMjAlKVxuICAgICAgICB9XG4gICAgICAgIC5zdWJzY3JpYmVfbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRoaWdobGlnaHQsIDcuNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNicmVhZF9jcnVtYiB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgNDUlKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjZXBpc29kZXMge1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV90aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV9vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMTUlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXV0aG9yaXplZF9saW5rcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAjZXBpc29kZV9jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHJlbSAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgLmN1cnJlbnRfZXBpc29kZV90aHVtYm5haWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDI1JSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2xpbmtzIHtcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiI3BvZGNhc3RzIHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG4jcG9kY2FzdHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiNwb2RjYXN0cyB1bCBsaSB7XG4gIHdpZHRoOiAyMyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMSUgMnJlbSAxJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3RzIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICBwYWRkaW5nOiAxcmVtIDcuNSU7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI5MmU7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcgLmVwaXNvZGVfY291bnQge1xuICBjb2xvcjogIzlhYWFiNTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMC41cmVtIDAgMC4yNXJlbSAwO1xufVxuI3BvZGNhc3RzIHVsIGxpOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNwb2RjYXN0cyB1bCBsaTpob3ZlciAucG9kY2FzdC1vdmVydmlldyBoMiB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufVxuXG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciB7XG4gIGJhY2tncm91bmQ6ICMyMjI5MmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgY29sb3I6ICM0ZDVkNjk7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuc3Vic2NyaWJlX2xpbmsge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBiYWNrZ3JvdW5kOiAjZDI2NzRlO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLnN1YnNjcmliZV9saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M3NGYzMztcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIHtcbiAgcGFkZGluZzogMXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIGEge1xuICBjb2xvcjogIzhjOWRhYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIgc3BhbiB7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX3RodW1ibmFpbCB7XG4gIHdpZHRoOiAyMiU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcge1xuICB3aWR0aDogNzYuNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMS41JTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IGgyIGEge1xuICBjb2xvcjogIzIyMjkyZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM0MzUwNWE7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuYXV0aG9yaXplZF9saW5rcyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmF1dGhvcml6ZWRfbGlua3MgYSB7XG4gIGNvbG9yOiAjZDI2NzRlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQge1xuICBwYWRkaW5nOiA0cmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IC5jdXJyZW50X2VwaXNvZGVfdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNTg2YTc3O1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3Mge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSBhIHtcbiAgY29sb3I6ICMyMjI5MmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2QyNjc0ZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIC5jdXJyZW50IHtcbiAgY29sb3I6ICNkMjY3NGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/episode-detail/episode-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/episode-detail/episode-detail.component.ts ***!
  \************************************************************/
/*! exports provided: EpisodeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailComponent", function() { return EpisodeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class EpisodeDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EpisodeDetailComponent.ɵfac = function EpisodeDetailComponent_Factory(t) { return new (t || EpisodeDetailComponent)(); };
EpisodeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EpisodeDetailComponent, selectors: [["app-episode-detail"]], decls: 93, vars: 0, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], ["id", "podcast_show"], ["id", "show_banner"], [1, "wrapper_skinny"], [1, "description"], ["href", "", 1, "subscribe_link"], ["id", "bread_crumb"], ["id", "episode_content"], ["src", "https://picsum.photos/150/150", "alt", "", 1, "current_episode_thumbnail"], ["id", "episodes"], [1, "cf"], [1, "episode_thumbnail"], ["href", ""], ["src", "https://picsum.photos/150/150", "alt", ""], [1, "episode_overview"], ["routerLink", "/episode/detail"], [1, "pagination"], [1, "previous_page", "disabled"], [1, "current"], ["href", "#", 1, "next_page"]], template: function EpisodeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The Cards Corner Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork belly taiyaki occupy cornhole sriracha vinyl post-ironic roof party. Street art chartreuse next level hammock farm-to-table twee af. Jean shorts cloud bread subway tile, four loko hammock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "iTunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stitcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Podbay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cards Corner Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "em", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VwaXNvZGUtZGV0YWlsL2VwaXNvZGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQUE7QUNISjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FER1E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtBQ0FoQjtBRENnQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTFCYjtBQzJCUDtBRENnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDQ3BCO0FER2dCO0VBQ0ksWUFBQTtBQ0RwQjtBRElvQjtFQUNJLGNBekNaO0FDdUNaO0FEV0k7RUFDSSxtQkFsREQ7RUFtREMsa0JBQUE7RUFDQSxlQUFBO0FDUlI7QURTUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTFESjtFQTJESSxvQkFBQTtBQ1BaO0FEU1E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNQWjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXhFSjtFQXlFSSxlQUFBO0VBQ0EsbUJBekVBO0VBMEVBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUFo7QURRWTtFQUNJLG1CQUFBO0FDTmhCO0FEVUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSUjtBRFNRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDUFo7QURTUTtFQUNJLGdCQUFBO0FDUFo7QURVSTtFQUNJLGVBQUE7QUNSUjtBRFNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDUFo7QURRWTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRE9nQjtFQUNJLG1CQUFBO0FDTHBCO0FET2dCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNMcEI7QURNb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSnhCO0FET2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0xwQjtBRE93QjtFQUNJLGNBM0hyQjtFQTRIcUIscUJBQUE7QUNMNUI7QURRb0I7RUFDSSxjQUFBO0FDTnhCO0FEUW9CO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ054QjtBRE93QjtFQUNJLGNBdkloQjtFQXdJZ0Isa0JBQUE7QUNMNUI7QURZSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVlI7QURXUTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNUWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ1RaO0FEV1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVFo7QURZSTtFQUNJLGVBQUE7QUNWUjtBRFdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNUWjtBRFVZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7QURTZ0I7RUFDSSxjQWpMYjtFQWtMYSxxQkFBQTtBQ1BwQjtBRFFvQjtFQUNJLGNBckxaO0FDK0taO0FEVVk7RUFDSSxjQTFMSjtBQ2tMWiIsImZpbGUiOiJzcmMvYXBwL2VwaXNvZGUtZGV0YWlsL2VwaXNvZGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmZmZmO1xuJGhpZ2hsaWdodDogI2QyNjc0ZTtcbiRkYXJrOiAjMjIyOTJlO1xuXG4jcG9kY2FzdHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxJSAycmVtIDElO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbSAuMzVyZW0gMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gNy41JTtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfY291bnQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwIC4yNXJlbSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9kY2FzdC1vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4jcG9kY2FzdF9zaG93IHtcbiAgICAjc2hvd19iYW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwXG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAyMCUpXG4gICAgICAgIH1cbiAgICAgICAgLnN1YnNjcmliZV9saW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGhpZ2hsaWdodCwgNy41JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2JyZWFkX2NydW1iIHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCA0NSUpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgICNlcGlzb2RlcyB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX3RodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX292ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2LjUlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNSU7XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAxNSUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hdXRob3JpemVkX2xpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNlcGlzb2RlX2NvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAuY3VycmVudF9lcGlzb2RlX3RodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMjUlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjbGlua3Mge1xuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIjcG9kY2FzdHMge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbiNwb2RjYXN0cyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAwO1xufVxuI3BvZGNhc3RzIHVsIGxpIHtcbiAgd2lkdGg6IDIzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxJSAycmVtIDElO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdHMgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbSAwLjM1cmVtIDAgMDtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyB7XG4gIHBhZGRpbmc6IDFyZW0gNy41JTtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzIyMjkyZTtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyAuZXBpc29kZV9jb3VudCB7XG4gIGNvbG9yOiAjOWFhYWI1O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjI1cmVtIDA7XG59XG4jcG9kY2FzdHMgdWwgbGk6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC44O1xufVxuI3BvZGNhc3RzIHVsIGxpOmhvdmVyIC5wb2RjYXN0LW92ZXJ2aWV3IGgyIHtcbiAgY29sb3I6ICNkMjY3NGU7XG59XG5cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIHtcbiAgYmFja2dyb3VuZDogIzIyMjkyZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNzUlO1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICBjb2xvcjogIzRkNWQ2OTtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5zdWJzY3JpYmVfbGluayB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJhY2tncm91bmQ6ICNkMjY3NGU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBtYXJnaW46IDAgMC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuc3Vic2NyaWJlX2xpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzc0ZjMzO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIge1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIgYSB7XG4gIGNvbG9yOiAjOGM5ZGFhO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiBzcGFuIHtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHtcbiAgcGFkZGluZzogM3JlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDIyJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV90aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyB7XG4gIHdpZHRoOiA3Ni41JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgaDIgYSB7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzQzNTA1YTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5hdXRob3JpemVkX2xpbmtzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuYXV0aG9yaXplZF9saW5rcyBhIHtcbiAgY29sb3I6ICNkMjY3NGU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCB7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgLmN1cnJlbnRfZXBpc29kZV90aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICB3aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM1ODZhNzc7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIGEge1xuICBjb2xvcjogIzIyMjkyZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgLmN1cnJlbnQge1xuICBjb2xvcjogI2QyNjc0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-episode-detail',
                templateUrl: './episode-detail.component.html',
                styleUrls: ['./episode-detail.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/hompage/hompage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hompage/hompage.component.ts ***!
  \**********************************************/
/*! exports provided: HompageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HompageComponent", function() { return HompageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HompageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HompageComponent.ɵfac = function HompageComponent_Factory(t) { return new (t || HompageComponent)(); };
HompageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HompageComponent, selectors: [["app-hompage"]], decls: 25, vars: 0, consts: [["id", "background"], [1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], [1, "wrapper_skinny"], ["href", "#", 1, "button", "button_highlight"], ["routerLink", "/podcast", "href", "#", 1, "button", "button_white"]], template: function HompageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Discover your new favorite podcast,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " or create your own.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#background[_ngcontent-%COMP%] {\n  background-image: url('home-bg.jpg');\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  float: left;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #ffffff;\n  text-decoration: none;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 2.5rem;\n}\n#background[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n}\n#background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 3.5rem;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: 7rem 0 2rem 0;\n}\n#background[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 1.5rem 2.5% 0 2.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9ob21wYWdlL2hvbXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbXBhZ2UvaG9tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNHLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0hIO0FES0c7RUFDSSxlQUFBO0FDSFA7QURJTztFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FqQkg7RUFrQkcscUJBQUE7QUNGWDtBRElPO0VBQ0ksWUFBQTtBQ0ZYO0FER1c7RUFDSSxnQkFBQTtFQUNBLFNBQUE7QUNEZjtBREVlO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQW5CO0FEQ21CO0VBQ0ksY0E3QmY7RUE4QmUscUJBQUE7QUNDdkI7QURLRztFQUNJLGNBckNDO0VBc0NELGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDSFA7QURLRztFQUNJLDBCQUFBO0FDSFAiLCJmaWxlIjoic3JjL2FwcC9ob21wYWdlL2hvbXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmZmZmY7XG4kaGlnaGxpZ2h0OiAjZDI2NzRlO1xuJGRhcms6ICMyMjI5MmU7XG5cbiNiYWNrZ3JvdW5kIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtYmcuanBnKTtcbiAgIGhlaWdodDogMTAwdmg7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICBoZWFkZXIge1xuICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAjbG9nbyB7XG4gICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgfVxuICAgICAgIG5hdiB7XG4gICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgIH1cbiAgIGgxIHtcbiAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICBtYXJnaW46IDdyZW0gMCAycmVtIDA7XG4gICB9XG4gICAuYnV0dG9uIHtcbiAgICAgICBtYXJnaW46IDEuNXJlbSAyLjUlIDAgMi41JVxuICAgfVxufSIsIiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5qcGcpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNiYWNrZ3JvdW5kIGhlYWRlciB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbn1cbiNiYWNrZ3JvdW5kIGhlYWRlciAjbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2JhY2tncm91bmQgaGVhZGVyIG5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiNiYWNrZ3JvdW5kIGhlYWRlciBuYXYgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4jYmFja2dyb3VuZCBoZWFkZXIgbmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuI2JhY2tncm91bmQgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNiYWNrZ3JvdW5kIGgxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDdyZW0gMCAycmVtIDA7XG59XG4jYmFja2dyb3VuZCAuYnV0dG9uIHtcbiAgbWFyZ2luOiAxLjVyZW0gMi41JSAwIDIuNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HompageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hompage',
                templateUrl: './hompage.component.html',
                styleUrls: ['./hompage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/podcast-new/podcast-new.component.ts":
/*!******************************************************!*\
  !*** ./src/app/podcast-new/podcast-new.component.ts ***!
  \******************************************************/
/*! exports provided: PodcastNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastNewComponent", function() { return PodcastNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _podcast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../podcast.service */ "./src/app/podcast.service.ts");





class PodcastNewComponent {
    constructor(podcastService, formBuilder) {
        this.podcastService = podcastService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.podcastForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
        });
    }
    get formControls() { return this.podcastForm.controls; }
    createPodcast() {
        console.log(this.podcastForm.value);
        this.podcastService.newPodcast(this.podcastForm.value).subscribe(podcast => {
            this.podcast = podcast;
        });
    }
}
PodcastNewComponent.ɵfac = function PodcastNewComponent_Factory(t) { return new (t || PodcastNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_podcast_service__WEBPACK_IMPORTED_MODULE_2__["PodcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PodcastNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastNewComponent, selectors: [["app-podcast-new"]], decls: 7, vars: 1, consts: [[1, "wrapper_skinny"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Title", "formControlName", "title"], ["type", "text", "placeholder", "Description", "formControlName", "description"], ["type", "submit", "value", "Create Podcast", 1, "button", "button_highlight"]], template: function PodcastNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PodcastNewComponent_Template_form_ngSubmit_3_listener() { return ctx.createPodcast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.podcastForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvZGNhc3QtbmV3L3BvZGNhc3QtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQUE7QUNISjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FER1E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtBQ0FoQjtBRENnQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTFCYjtBQzJCUDtBRENnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDQ3BCO0FER2dCO0VBQ0ksWUFBQTtBQ0RwQjtBRElvQjtFQUNJLGNBekNaO0FDdUNaO0FEV0k7RUFDSSxtQkFsREQ7RUFtREMsa0JBQUE7RUFDQSxlQUFBO0FDUlI7QURTUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTFESjtFQTJESSxvQkFBQTtBQ1BaO0FEU1E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNQWjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXhFSjtFQXlFSSxlQUFBO0VBQ0EsbUJBekVBO0VBMEVBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUFo7QURRWTtFQUNJLG1CQUFBO0FDTmhCO0FEVUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSUjtBRFNRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDUFo7QURTUTtFQUNJLGdCQUFBO0FDUFo7QURVSTtFQUNJLGVBQUE7QUNSUjtBRFNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDUFo7QURRWTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRE9nQjtFQUNJLG1CQUFBO0FDTHBCO0FET2dCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNMcEI7QURNb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSnhCO0FET2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0xwQjtBRE93QjtFQUNJLGNBM0hyQjtFQTRIcUIscUJBQUE7QUNMNUI7QURRb0I7RUFDSSxjQUFBO0FDTnhCO0FEUW9CO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ054QjtBRE93QjtFQUNJLGNBdkloQjtFQXdJZ0Isa0JBQUE7QUNMNUI7QURZSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVlI7QURXUTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNUWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ1RaO0FEV1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVFo7QURZSTtFQUNJLGVBQUE7QUNWUjtBRFdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNUWjtBRFVZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7QURTZ0I7RUFDSSxjQWpMYjtFQWtMYSxxQkFBQTtBQ1BwQjtBRFFvQjtFQUNJLGNBckxaO0FDK0taO0FEVVk7RUFDSSxjQTFMSjtBQ2tMWiIsImZpbGUiOiJzcmMvYXBwL3BvZGNhc3QtbmV3L3BvZGNhc3QtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmZmZmO1xuJGhpZ2hsaWdodDogI2QyNjc0ZTtcbiRkYXJrOiAjMjIyOTJlO1xuXG4jcG9kY2FzdHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxJSAycmVtIDElO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbSAuMzVyZW0gMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gNy41JTtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfY291bnQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwIC4yNXJlbSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9kY2FzdC1vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4jcG9kY2FzdF9zaG93IHtcbiAgICAjc2hvd19iYW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAuNXJlbSAwXG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAyMCUpXG4gICAgICAgIH1cbiAgICAgICAgLnN1YnNjcmliZV9saW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGhpZ2hsaWdodCwgNy41JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2JyZWFkX2NydW1iIHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCA0NSUpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgICNlcGlzb2RlcyB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX3RodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX292ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2LjUlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNSU7XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAxNSUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hdXRob3JpemVkX2xpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNlcGlzb2RlX2NvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAuY3VycmVudF9lcGlzb2RlX3RodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMjUlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjbGlua3Mge1xuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIjcG9kY2FzdHMge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbiNwb2RjYXN0cyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAwO1xufVxuI3BvZGNhc3RzIHVsIGxpIHtcbiAgd2lkdGg6IDIzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxJSAycmVtIDElO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdHMgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbSAwLjM1cmVtIDAgMDtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyB7XG4gIHBhZGRpbmc6IDFyZW0gNy41JTtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzIyMjkyZTtcbn1cbiNwb2RjYXN0cyB1bCBsaSAucG9kY2FzdC1vdmVydmlldyAuZXBpc29kZV9jb3VudCB7XG4gIGNvbG9yOiAjOWFhYWI1O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjI1cmVtIDA7XG59XG4jcG9kY2FzdHMgdWwgbGk6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC44O1xufVxuI3BvZGNhc3RzIHVsIGxpOmhvdmVyIC5wb2RjYXN0LW92ZXJ2aWV3IGgyIHtcbiAgY29sb3I6ICNkMjY3NGU7XG59XG5cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIHtcbiAgYmFja2dyb3VuZDogIzIyMjkyZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNzUlO1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICBjb2xvcjogIzRkNWQ2OTtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5zdWJzY3JpYmVfbGluayB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJhY2tncm91bmQ6ICNkMjY3NGU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBtYXJnaW46IDAgMC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuc3Vic2NyaWJlX2xpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzc0ZjMzO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIge1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIgYSB7XG4gIGNvbG9yOiAjOGM5ZGFhO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiBzcGFuIHtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHtcbiAgcGFkZGluZzogM3JlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDIyJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV90aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyB7XG4gIHdpZHRoOiA3Ni41JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgaDIgYSB7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzQzNTA1YTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5hdXRob3JpemVkX2xpbmtzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuYXV0aG9yaXplZF9saW5rcyBhIHtcbiAgY29sb3I6ICNkMjY3NGU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCB7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgLmN1cnJlbnRfZXBpc29kZV90aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICB3aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM1ODZhNzc7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIGEge1xuICBjb2xvcjogIzIyMjkyZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgLmN1cnJlbnQge1xuICBjb2xvcjogI2QyNjc0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-new',
                templateUrl: './podcast-new.component.html',
                styleUrls: ['./podcast-new.component.scss']
            }]
    }], function () { return [{ type: _podcast_service__WEBPACK_IMPORTED_MODULE_2__["PodcastService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/podcast-show/podcast-show.component.ts":
/*!********************************************************!*\
  !*** ./src/app/podcast-show/podcast-show.component.ts ***!
  \********************************************************/
/*! exports provided: PodcastShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastShowComponent", function() { return PodcastShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PodcastShowComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PodcastShowComponent.ɵfac = function PodcastShowComponent_Factory(t) { return new (t || PodcastShowComponent)(); };
PodcastShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastShowComponent, selectors: [["app-podcast-show"]], decls: 86, vars: 0, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], ["id", "podcast_show"], ["id", "show_banner"], [1, "wrapper_skinny"], [1, "description"], ["href", "", 1, "subscribe_link"], ["id", "bread_crumb"], ["id", "episodes"], [1, "cf"], [1, "episode_thumbnail"], ["href", ""], ["src", "https://picsum.photos/150/150", "alt", ""], [1, "episode_overview"], ["routerLink", "/episode/detail"], [1, "pagination"], [1, "previous_page", "disabled"], [1, "current"], ["href", "#", 1, "next_page"]], template: function PodcastShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The Cards Corner Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork belly taiyaki occupy cornhole sriracha vinyl post-ironic roof party. Street art chartreuse next level hammock farm-to-table twee af. Jean shorts cloud bread subway tile, four loko hammock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "iTunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stitcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Podbay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cards Corner Podcast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Episode Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " I'm baby lo-fi flexitarian cloud bread franzen, la croix slow-carb YOLO swag tofu marfa. Try-hard fanny pack 90's crucifix, wayfarers poutine pork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "em", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvZGNhc3Qtc2hvdy9wb2RjYXN0LXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxvQkFBQTtBQ0hKO0FESUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDRlI7QURHUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSwyQ0FBQTtFQUNBLHNCQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNBaEI7QURFWTtFQUNJLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMUJiO0FDMkJQO0FEQ2dCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNDcEI7QURHZ0I7RUFDSSxZQUFBO0FDRHBCO0FESW9CO0VBQ0ksY0F6Q1o7QUN1Q1o7QURXSTtFQUNJLG1CQWxERDtFQW1EQyxrQkFBQTtFQUNBLGVBQUE7QUNSUjtBRFNRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMURKO0VBMkRJLG9CQUFBO0FDUFo7QURTUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ1BaO0FEU1E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBeEVKO0VBeUVJLGVBQUE7RUFDQSxtQkF6RUE7RUEwRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNQWjtBRFFZO0VBQ0ksbUJBQUE7QUNOaEI7QURVSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEU1E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNQWjtBRFNRO0VBQ0ksZ0JBQUE7QUNQWjtBRFVJO0VBQ0ksZUFBQTtBQ1JSO0FEU1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNQWjtBRFFZO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDTmhCO0FET2dCO0VBQ0ksbUJBQUE7QUNMcEI7QURPZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0xwQjtBRE1vQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNKeEI7QURPZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTHBCO0FET3dCO0VBQ0ksY0EzSHJCO0VBNEhxQixxQkFBQTtBQ0w1QjtBRFFvQjtFQUNJLGNBQUE7QUNOeEI7QURRb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDTnhCO0FET3dCO0VBQ0ksY0F2SWhCO0VBd0lnQixrQkFBQTtBQ0w1QjtBRFlJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNWUjtBRFdRO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1RaO0FEV1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDVFo7QURXUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNUWjtBRFlJO0VBQ0ksZUFBQTtBQ1ZSO0FEV1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1RaO0FEVVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JoQjtBRFNnQjtFQUNJLGNBakxiO0VBa0xhLHFCQUFBO0FDUHBCO0FEUW9CO0VBQ0ksY0FyTFo7QUMrS1o7QURVWTtFQUNJLGNBMUxKO0FDa0xaIiwiZmlsZSI6InNyYy9hcHAvcG9kY2FzdC1zaG93L3BvZGNhc3Qtc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZmZmZjtcbiRoaWdobGlnaHQ6ICNkMjY3NGU7XG4kZGFyazogIzIyMjkyZTtcblxuI3BvZGNhc3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMjMlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMSUgMnJlbSAxJTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW0gLjM1cmVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDcuNSU7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lcGlzb2RlX2NvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMCAuMjVyZW0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3BvZGNhc3Rfc2hvdyB7XG4gICAgI3Nob3dfYmFubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgLjVyZW0gMFxuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMjAlKVxuICAgICAgICB9XG4gICAgICAgIC5zdWJzY3JpYmVfbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRoaWdobGlnaHQsIDcuNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNicmVhZF9jcnVtYiB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgNDUlKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjZXBpc29kZXMge1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV90aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV9vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZGFyaywgMTUlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXV0aG9yaXplZF9saW5rcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAjZXBpc29kZV9jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHJlbSAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgLmN1cnJlbnRfZXBpc29kZV90aHVtYm5haWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDI1JSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2xpbmtzIHtcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiI3BvZGNhc3RzIHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG4jcG9kY2FzdHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiNwb2RjYXN0cyB1bCBsaSB7XG4gIHdpZHRoOiAyMyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMSUgMnJlbSAxJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3RzIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcge1xuICBwYWRkaW5nOiAxcmVtIDcuNSU7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI5MmU7XG59XG4jcG9kY2FzdHMgdWwgbGkgLnBvZGNhc3Qtb3ZlcnZpZXcgLmVwaXNvZGVfY291bnQge1xuICBjb2xvcjogIzlhYWFiNTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMC41cmVtIDAgMC4yNXJlbSAwO1xufVxuI3BvZGNhc3RzIHVsIGxpOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNwb2RjYXN0cyB1bCBsaTpob3ZlciAucG9kY2FzdC1vdmVydmlldyBoMiB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufVxuXG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciB7XG4gIGJhY2tncm91bmQ6ICMyMjI5MmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgY29sb3I6ICM0ZDVkNjk7XG59XG4jcG9kY2FzdF9zaG93ICNzaG93X2Jhbm5lciAuc3Vic2NyaWJlX2xpbmsge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBiYWNrZ3JvdW5kOiAjZDI2NzRlO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLnN1YnNjcmliZV9saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M3NGYzMztcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIHtcbiAgcGFkZGluZzogMXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIGEge1xuICBjb2xvcjogIzhjOWRhYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjYnJlYWRfY3J1bWIgc3BhbiB7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX3RodW1ibmFpbCB7XG4gIHdpZHRoOiAyMiU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcge1xuICB3aWR0aDogNzYuNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMS41JTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IGgyIGEge1xuICBjb2xvcjogIzIyMjkyZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM0MzUwNWE7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyAuYXV0aG9yaXplZF9saW5rcyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmF1dGhvcml6ZWRfbGlua3MgYSB7XG4gIGNvbG9yOiAjZDI2NzRlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQge1xuICBwYWRkaW5nOiA0cmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IC5jdXJyZW50X2VwaXNvZGVfdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bztcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlX2NvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNTg2YTc3O1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3Mge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSBhIHtcbiAgY29sb3I6ICMyMjI5MmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2QyNjc0ZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHVsIC5jdXJyZW50IHtcbiAgY29sb3I6ICNkMjY3NGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast-show',
                templateUrl: './podcast-show.component.html',
                styleUrls: ['./podcast-show.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/podcast.service.ts":
/*!************************************!*\
  !*** ./src/app/podcast.service.ts ***!
  \************************************/
/*! exports provided: PodcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastService", function() { return PodcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PodcastService {
    constructor(http) {
        this.http = http;
        this.podcastUrl = 'http://localhost:3000/podcasts/';
    }
    getPodcasts() {
        return this.http.get(this.podcastUrl);
    }
    newPodcast(podcast) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        console.log(podcast);
        return this.http.post(this.podcastUrl, JSON.stringify(podcast), { headers: headers });
    }
}
PodcastService.ɵfac = function PodcastService_Factory(t) { return new (t || PodcastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PodcastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PodcastService, factory: PodcastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/podcast/podcast.component.ts":
/*!**********************************************!*\
  !*** ./src/app/podcast/podcast.component.ts ***!
  \**********************************************/
/*! exports provided: PodcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastComponent", function() { return PodcastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _podcast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../podcast.service */ "./src/app/podcast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PodcastComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "narwals podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "narwals podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "narwals podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "narwals podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "narwals podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "1 Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const podcast_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, podcast_r31.title));
} }
class PodcastComponent {
    constructor(podcastService) {
        this.podcastService = podcastService;
    }
    ngOnInit() {
        this.podcastService.getPodcasts().subscribe(podcasts => {
            console.log(podcasts);
            this.podcasts = podcasts;
        });
    }
}
PodcastComponent.ɵfac = function PodcastComponent_Factory(t) { return new (t || PodcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_podcast_service__WEBPACK_IMPORTED_MODULE_1__["PodcastService"])); };
PodcastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastComponent, selectors: [["app-podcast"]], decls: 30, vars: 1, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], ["id", "banner", 1, "podcast_banner"], ["id", "podcasts", 1, "cf"], [1, "wrapper"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "previous_page", "disabled"], [1, "current"], ["href", "#", 1, "next_page"], ["routerLink", "/podcast/show"], ["src", "../../assets/images/podcast_redburd_logo.jpg", "alt", "Cards Corner"], [1, "podcast-overview"], [1, "episode_count"], ["src", "../../assets/images/podcast3.jpg", "alt", "Cards Corner"], ["src", "../../assets/images/podcast.jpg", "alt", "Cards Corner"], ["src", "../../assets/images/podcast_lover.jpg", "alt", "Cards Corner"]], template: function PodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Discover your new Favorite Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PodcastComponent_ul_20_Template, 50, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.podcasts);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvZGNhc3QvcG9kY2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9CQUFBO0FDSEo7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNGUjtBREdRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLDJDQUFBO0VBQ0Esc0JBQUE7QUNEWjtBREVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQ0FoQjtBREVZO0VBQ0ksa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExQmI7QUMyQlA7QURDZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NwQjtBREdnQjtFQUNJLFlBQUE7QUNEcEI7QURJb0I7RUFDSSxjQXpDWjtBQ3VDWjtBRFdJO0VBQ0ksbUJBbEREO0VBbURDLGtCQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEU1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExREo7RUEyREksb0JBQUE7QUNQWjtBRFNRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDUFo7QURTUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4RUo7RUF5RUksZUFBQTtFQUNBLG1CQXpFQTtFQTBFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEUVk7RUFDSSxtQkFBQTtBQ05oQjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUlI7QURTUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEU1E7RUFDSSxnQkFBQTtBQ1BaO0FEVUk7RUFDSSxlQUFBO0FDUlI7QURTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1BaO0FEUVk7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNOaEI7QURPZ0I7RUFDSSxtQkFBQTtBQ0xwQjtBRE9nQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDTHBCO0FETW9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0p4QjtBRE9nQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMcEI7QURPd0I7RUFDSSxjQTNIckI7RUE0SHFCLHFCQUFBO0FDTDVCO0FEUW9CO0VBQ0ksY0FBQTtBQ054QjtBRFFvQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNOeEI7QURPd0I7RUFDSSxjQXZJaEI7RUF3SWdCLGtCQUFBO0FDTDVCO0FEWUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1ZSO0FEV1E7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVFo7QURXUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNUWjtBRFdRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1RaO0FEWUk7RUFDSSxlQUFBO0FDVlI7QURXUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVFo7QURVWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEU2dCO0VBQ0ksY0FqTGI7RUFrTGEscUJBQUE7QUNQcEI7QURRb0I7RUFDSSxjQXJMWjtBQytLWjtBRFVZO0VBQ0ksY0ExTEo7QUNrTFoiLCJmaWxlIjoic3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmZmZmY7XG4kaGlnaGxpZ2h0OiAjZDI2NzRlO1xuJGRhcms6ICMyMjI5MmU7XG5cbiNwb2RjYXN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDElIDJyZW0gMSU7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtIC4zNXJlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9kY2FzdC1vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSA3LjUlO1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV9jb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCA1MCUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDAgLjI1cmVtIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNwb2RjYXN0X3Nob3cge1xuICAgICNzaG93X2Jhbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIC41cmVtIDBcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDIwJSlcbiAgICAgICAgfVxuICAgICAgICAuc3Vic2NyaWJlX2xpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkaGlnaGxpZ2h0LCA3LjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAjYnJlYWRfY3J1bWIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDQ1JSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2VwaXNvZGVzIHtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfdGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzYuNSU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41JTtcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDE1JSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmF1dGhvcml6ZWRfbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2VwaXNvZGVfY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgIC5jdXJyZW50X2VwaXNvZGVfdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAyNSUpO1xuICAgICAgICB9XG4gICAgfVxuICAgICNsaW5rcyB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIiNwb2RjYXN0cyB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuI3BvZGNhc3RzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46IDA7XG59XG4jcG9kY2FzdHMgdWwgbGkge1xuICB3aWR0aDogMjMlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDElIDJyZW0gMSU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0cyB1bCBsaSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtIDAuMzVyZW0gMCAwO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgcGFkZGluZzogMXJlbSA3LjUlO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjIyOTJlO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IC5lcGlzb2RlX2NvdW50IHtcbiAgY29sb3I6ICM5YWFhYjU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwIDAuMjVyZW0gMDtcbn1cbiNwb2RjYXN0cyB1bCBsaTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjg7XG59XG4jcG9kY2FzdHMgdWwgbGk6aG92ZXIgLnBvZGNhc3Qtb3ZlcnZpZXcgaDIge1xuICBjb2xvcjogI2QyNjc0ZTtcbn1cblxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjMjIyOTJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gIGNvbG9yOiAjNGQ1ZDY5O1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLnN1YnNjcmliZV9saW5rIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYmFja2dyb3VuZDogI2QyNjc0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5zdWJzY3JpYmVfbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjNzRmMzM7XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiBhIHtcbiAgY29sb3I6ICM4YzlkYWE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIHNwYW4ge1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMge1xuICBwYWRkaW5nOiAzcmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV90aHVtYm5haWwge1xuICB3aWR0aDogMjIlO1xuICBmbG9hdDogbGVmdDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX3RodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IHtcbiAgd2lkdGg6IDc2LjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyBoMiBhIHtcbiAgY29sb3I6ICMyMjI5MmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjNDM1MDVhO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmF1dGhvcml6ZWRfbGlua3Mge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5hdXRob3JpemVkX2xpbmtzIGEge1xuICBjb2xvcjogI2QyNjc0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IHtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCAuY3VycmVudF9lcGlzb2RlX3RodW1ibmFpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCAuZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzU4NmE3Nztcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNkMjY3NGU7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCAuY3VycmVudCB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-podcast',
                templateUrl: './podcast.component.html',
                styleUrls: ['./podcast.component.scss']
            }]
    }], function () { return [{ type: _podcast_service__WEBPACK_IMPORTED_MODULE_1__["PodcastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SignInComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 46, vars: 0, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["routerLink", "/signup"], ["href", "#"], ["id", "banner", 1, "signin_banner"], ["id", "form"], [1, "wrapper_skinny"], [1, "field"], ["for", ""], ["type", "email"], ["type", "password"], ["type", "text"], [1, "actions"], ["type", "submit", 1, "button", "button_highlight", "button_block"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Welcome Back Nice to see you!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Text Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#podcasts[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 23%;\n  float: left;\n  margin: 0 1% 2rem 1%;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 0.35rem;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border-radius: 0.35rem 0.35rem 0 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%] {\n  padding: 1rem 7.5%;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #22292e;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .podcast-overview[_ngcontent-%COMP%]   .episode_count[_ngcontent-%COMP%] {\n  color: #9aaab5;\n  font-size: 0.9rem;\n  margin: 0.5rem 0 0.25rem 0;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#podcasts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .podcast-overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%] {\n  background: #22292e;\n  text-align: center;\n  padding: 5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #ffffff;\n  margin: 0 0 0.5rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 75%;\n  line-height: 1.75;\n  margin: 0 auto 2rem auto;\n  color: #4d5d69;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #ffffff;\n  display: inline;\n  background: #d2674e;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  margin: 0 0.5rem;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #show_banner[_ngcontent-%COMP%]   .subscribe_link[_ngcontent-%COMP%]:hover {\n  background: #c74f33;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  border-bottom: 1px solid #e4e8eb;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c9daa;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #bread_crumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e4e8eb;\n  margin-bottom: 2rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n  float: left;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%] {\n  width: 76.5%;\n  float: left;\n  margin-left: 1.5%;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #43505a;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episodes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .episode_overview[_ngcontent-%COMP%]   .authorized_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d2674e;\n  margin-right: 1rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .current_episode_thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 2rem auto;\n  width: 10rem;\n  max-width: 100%;\n  border-radius: 0.35rem;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n#podcast_show[_ngcontent-%COMP%]   #episode_content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: #586a77;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  padding: 1rem 0;\n  margin-bottom: 4rem;\n  border-bottom: 1px solid #e4e8eb;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 1rem;\n  font-weight: 700;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22292e;\n  text-decoration: none;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d2674e;\n}\n#podcast_show[_ngcontent-%COMP%]   #links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #d2674e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YXJyZW5icm93bi93b3JrL3RjbWVkaWEvUHJvamVjdHMvUG9kY2FzdCBOZXR3b3JrL3BvZGNhc3QtZnJvbnRlbmQvc3JjL2FwcC9wb2RjYXN0L3BvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9CQUFBO0FDSEo7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNGUjtBREdRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLDJDQUFBO0VBQ0Esc0JBQUE7QUNEWjtBREVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQ0FoQjtBREVZO0VBQ0ksa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExQmI7QUMyQlA7QURDZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NwQjtBREdnQjtFQUNJLFlBQUE7QUNEcEI7QURJb0I7RUFDSSxjQXpDWjtBQ3VDWjtBRFdJO0VBQ0ksbUJBbEREO0VBbURDLGtCQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEU1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExREo7RUEyREksb0JBQUE7QUNQWjtBRFNRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDUFo7QURTUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F4RUo7RUF5RUksZUFBQTtFQUNBLG1CQXpFQTtFQTBFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEUVk7RUFDSSxtQkFBQTtBQ05oQjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUlI7QURTUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEU1E7RUFDSSxnQkFBQTtBQ1BaO0FEVUk7RUFDSSxlQUFBO0FDUlI7QURTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1BaO0FEUVk7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNOaEI7QURPZ0I7RUFDSSxtQkFBQTtBQ0xwQjtBRE9nQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDTHBCO0FETW9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0p4QjtBRE9nQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMcEI7QURPd0I7RUFDSSxjQTNIckI7RUE0SHFCLHFCQUFBO0FDTDVCO0FEUW9CO0VBQ0ksY0FBQTtBQ054QjtBRFFvQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNOeEI7QURPd0I7RUFDSSxjQXZJaEI7RUF3SWdCLGtCQUFBO0FDTDVCO0FEWUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1ZSO0FEV1E7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVFo7QURXUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNUWjtBRFdRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1RaO0FEWUk7RUFDSSxlQUFBO0FDVlI7QURXUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVFo7QURVWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEU2dCO0VBQ0ksY0FqTGI7RUFrTGEscUJBQUE7QUNQcEI7QURRb0I7RUFDSSxjQXJMWjtBQytLWjtBRFVZO0VBQ0ksY0ExTEo7QUNrTFoiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmZmZmY7XG4kaGlnaGxpZ2h0OiAjZDI2NzRlO1xuJGRhcms6ICMyMjI5MmU7XG5cbiNwb2RjYXN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDElIDJyZW0gMSU7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtIC4zNXJlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9kY2FzdC1vdmVydmlldyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSA3LjUlO1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXBpc29kZV9jb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCA1MCUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDAgLjI1cmVtIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNwb2RjYXN0X3Nob3cge1xuICAgICNzaG93X2Jhbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIC41cmVtIDBcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDIwJSlcbiAgICAgICAgfVxuICAgICAgICAuc3Vic2NyaWJlX2xpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkaGlnaGxpZ2h0LCA3LjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAjYnJlYWRfY3J1bWIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDQ1JSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2VwaXNvZGVzIHtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRkYXJrLCA3NSUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfdGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVwaXNvZGVfb3ZlcnZpZXcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzYuNSU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41JTtcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDE1JSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmF1dGhvcml6ZWRfbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2VwaXNvZGVfY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGRhcmssIDc1JSk7XG4gICAgICAgIC5jdXJyZW50X2VwaXNvZGVfdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMnJlbSBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM1cmVtO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRkYXJrLCAyNSUpO1xuICAgICAgICB9XG4gICAgfVxuICAgICNsaW5rcyB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkZGFyaywgNzUlKTtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIiNwb2RjYXN0cyB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuI3BvZGNhc3RzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46IDA7XG59XG4jcG9kY2FzdHMgdWwgbGkge1xuICB3aWR0aDogMjMlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDElIDJyZW0gMSU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0cyB1bCBsaSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtIDAuMzVyZW0gMCAwO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IHtcbiAgcGFkZGluZzogMXJlbSA3LjUlO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjIyOTJlO1xufVxuI3BvZGNhc3RzIHVsIGxpIC5wb2RjYXN0LW92ZXJ2aWV3IC5lcGlzb2RlX2NvdW50IHtcbiAgY29sb3I6ICM5YWFhYjU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwIDAuMjVyZW0gMDtcbn1cbiNwb2RjYXN0cyB1bCBsaTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjg7XG59XG4jcG9kY2FzdHMgdWwgbGk6aG92ZXIgLnBvZGNhc3Qtb3ZlcnZpZXcgaDIge1xuICBjb2xvcjogI2QyNjc0ZTtcbn1cblxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjMjIyOTJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gIGNvbG9yOiAjNGQ1ZDY5O1xufVxuI3BvZGNhc3Rfc2hvdyAjc2hvd19iYW5uZXIgLnN1YnNjcmliZV9saW5rIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYmFja2dyb3VuZDogI2QyNjc0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI3Nob3dfYmFubmVyIC5zdWJzY3JpYmVfbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjNzRmMzM7XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4jcG9kY2FzdF9zaG93ICNicmVhZF9jcnVtYiBhIHtcbiAgY29sb3I6ICM4YzlkYWE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2JyZWFkX2NydW1iIHNwYW4ge1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMge1xuICBwYWRkaW5nOiAzcmVtIDA7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOGViO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV90aHVtYm5haWwge1xuICB3aWR0aDogMjIlO1xuICBmbG9hdDogbGVmdDtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX3RodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IHtcbiAgd2lkdGg6IDc2LjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XG59XG4jcG9kY2FzdF9zaG93ICNlcGlzb2RlcyB1bCBsaSAuZXBpc29kZV9vdmVydmlldyBoMiBhIHtcbiAgY29sb3I6ICMyMjI5MmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjNDM1MDVhO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZXMgdWwgbGkgLmVwaXNvZGVfb3ZlcnZpZXcgLmF1dGhvcml6ZWRfbGlua3Mge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVzIHVsIGxpIC5lcGlzb2RlX292ZXJ2aWV3IC5hdXRob3JpemVkX2xpbmtzIGEge1xuICBjb2xvcjogI2QyNjc0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IHtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZThlYjtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCAuY3VycmVudF9lcGlzb2RlX3RodW1ibmFpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuI3BvZGNhc3Rfc2hvdyAjZXBpc29kZV9jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwb2RjYXN0X3Nob3cgI2VwaXNvZGVfY29udGVudCAuZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzU4NmE3Nztcbn1cbiNwb2RjYXN0X3Nob3cgI2xpbmtzIHtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU4ZWI7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI3BvZGNhc3Rfc2hvdyAjbGlua3MgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNkMjY3NGU7XG59XG4jcG9kY2FzdF9zaG93ICNsaW5rcyB1bCAuY3VycmVudCB7XG4gIGNvbG9yOiAjZDI2NzRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SignupComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 18, vars: 0, consts: [["id", "main_header", 1, "cf"], [1, "wrapper_wide"], ["href", "", "id", "logo"], ["routerLink", "/podcast"], ["routerLink", "/signin"], ["href", "#"], ["id", "banner", 1, "signin_banner"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podcast.FM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create a Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create A Podcast It's 100% Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/warrenbrown/work/tcmedia/Projects/Podcast Network/podcast-frontend/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/warrenbrown/work/tcmedia/Projects/Podcast Network/podcast-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map