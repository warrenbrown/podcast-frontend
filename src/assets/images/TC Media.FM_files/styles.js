(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\nbody {\n  font-family: \"Open Sans\";\n}\n\n.wrapper_wide {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.wrapper_skinny {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.cf::before, .cf::after {\n  content: \" \";\n  display: table;\n}\n\n.cf::after {\n  clear: both;\n}\n\n.button {\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 1rem;\n  padding: 1rem 2rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  display: inline-block;\n  min-width: 8.5rem;\n}\n\n.button_highlight {\n  background: #d2674e;\n  -webkit-transition: background 0.4s ease-in-out;\n  transition: background 0.4s ease-in-out;\n}\n\n.button_highlight:hover {\n  background: #c74f33;\n}\n\n.button_white {\n  background: #ffffff;\n  color: #22292e;\n  -webkit-transition: background 0.4s ease-in-out;\n  transition: background 0.4s ease-in-out;\n}\n\n.button_white:hover {\n  background: #c74f33;\n}\n\n.button_block {\n  display: block;\n  margin: 0 auto;\n}\n\n#main_header {\n  color: dark;\n  background: #ffffff;\n  padding: 2.5rem 0;\n}\n\n#main_header #logo {\n  float: left;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #22292e;\n  text-decoration: none;\n}\n\n#main_header nav {\n  float: right;\n}\n\n#main_header nav ul {\n  list-style: none;\n  margin: 0;\n}\n\n#main_header nav ul li {\n  display: inline;\n  margin-left: 2.5rem;\n}\n\n#main_header nav ul li a {\n  color: #22292e;\n  text-decoration: none;\n}\n\n#banner {\n  background-size: cover;\n  background-position: center center;\n  margin-bottom: 4rem;\n}\n\n#banner h1 {\n  text-align: center;\n  color: #ffffff;\n  font-size: 3rem;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: 0;\n  padding: 8rem 0;\n}\n\n.podcast_banner {\n  background-image: url('banner.jpg');\n}\n\n.signin_banner {\n  background-image: url('banner.jpg');\n}\n\n.signup_banner {\n  background-image: url('banner.jpg');\n}\n\n.pagination::before, .pagination:after {\n  content: \" \";\n  display: table;\n}\n\n.pagination:after {\n  clear: both;\n}\n\n.pagination {\n  text-align: center;\n  margin: 1rem 0 5rem 0;\n}\n\n.pagination a, .pagination .previous_page, .pagination .current, .pagination .next_page {\n  padding: 0.75rem 1rem;\n  margin: 0 0.25rem;\n  border-radius: 0.15rem;\n  line-height: 1.25;\n  text-decoration: none;\n  background-color: #edeff5;\n  font-weight: 700;\n  font-size: 0.7rem;\n  color: dark;\n}\n\n.pagination a:hover, .pagination .previous_page:hover, .pagination .current:hover, .pagination .next_page:hover {\n  background: #d2674e;\n  color: #ffffff;\n}\n\n.pagination .current {\n  background: #d2674e;\n  color: #ffffff;\n}\n\n.pagination .disabled {\n  color: #c0c0c0;\n}\n\n.pagination .disabled:hover {\n  color: #c0c0c0;\n  background-color: #edeff5;\n}\n\n.field {\n  margin: 0.5rem 0 1.5rem 0;\n}\n\ninput[type=email], input[type=password], input[type=text], textarea {\n  width: 100%;\n  height: 2.5rem;\n  padding: 0.25rem 1rem;\n  background: #edeff5;\n  border: 1px solid #dde0ec;\n  border-radius: 0.35rem;\n  margin-top: 0.5rem;\n}\n\ntextarea {\n  min-height: 8rem;\n  margin-top: 0.5rem !important;\n}\n\n#form {\n  padding: 0 0 5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCIvVXNlcnMvd2FycmVuYnJvd24vd29yay90Y21lZGlhL1Byb2plY3RzL1BvZGNhc3QgTmV0d29yay9wb2RjYXN0LWZyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFF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OztBRENRO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FDQ1o7O0FEQVk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNFaEI7O0FERGdCO0VBQ0ksY0FuRmI7RUFvRmEscUJBQUE7QUNHcEI7O0FESUM7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNETDs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsY0FuR0E7RUFvR0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRElDO0VBQ0csbUNBQUE7QUNESjs7QURHQztFQUNHLG1DQUFBO0FDQUo7O0FERUM7RUFDRyxtQ0FBQTtBQ0NKOztBRENDO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNFTDs7QURDQztFQUNJLFdBQUE7QUNFTDs7QURDQztFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNFTDs7QURESztFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDR1Q7O0FERlM7RUFDSSxtQkEzSUQ7RUE0SUMsY0E3SUw7QUNpSlI7O0FEREs7RUFDSSxtQkFoSkc7RUFpSkgsY0FsSkQ7QUNxSlI7O0FEREs7RUFDSSxjQUFBO0FDR1Q7O0FERlM7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNJYjs7QURBQztFQUNJLHlCQUFBO0FDR0w7O0FEQUM7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBaktHO0VBa0tILHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0dMOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQ0lSOztBRERJO0VBQ0ksbUJBQUE7QUNJUiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiJHdoaXRlOiAjZmZmZmZmO1xuJGhpZ2hsaWdodDogI2QyNjc0ZTtcbiRkYXJrOiAjMjIyOTJlO1xuJGxpZ2h0OiAjZWRlZmY1O1xuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIDtcbn1cbi53cmFwcGVyX3dpZGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi53cmFwcGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ud3JhcHBlcl9za2lubnkge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jZjo6YmVmb3JlLCAuY2Y6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNmOjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b24ge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiA4LjVyZW07XG59XG5cbi5idXR0b25faGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGhpZ2hsaWdodCwgNy41JSk7XG4gICAgfVxufVxuXG4uYnV0dG9uX3doaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgY29sb3I6ICRkYXJrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGhpZ2hsaWdodCwgNy41JSk7XG4gICAgfVxufVxuXG4uYnV0dG9uX2Jsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbiAjbWFpbl9oZWFkZXIge1xuICAgICBjb2xvcjogZGFyaztcbiAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICBwYWRkaW5nOiAyLjVyZW0gMDtcbiAgICAgI2xvZ28ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIG5hdiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIH1cblxuICNiYW5uZXIge1xuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogOHJlbSAwO1xuICAgIH1cbiB9XG5cbiAucG9kY2FzdF9iYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnKTtcbiB9XG4gLnNpZ25pbl9iYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnKTtcbiB9XG4gLnNpZ251cF9iYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnKTtcbiB9XG4gLnBhZ2luYXRpb246OmJlZm9yZSwgLnBhZ2luYXRpb246YWZ0ZXIge1xuICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgZGlzcGxheTogdGFibGU7XG4gfVxuXG4gLnBhZ2luYXRpb246YWZ0ZXIge1xuICAgICBjbGVhcjogYm90aDtcbiB9XG5cbiAucGFnaW5hdGlvbiB7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgbWFyZ2luOiAxcmVtIDAgNXJlbSAwO1xuICAgICBhLCAucHJldmlvdXNfcGFnZSwgLmN1cnJlbnQsIC5uZXh0X3BhZ2Uge1xuICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICAgbWFyZ2luOiAwIC4yNXJlbTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4xNXJlbTtcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWZmNTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgY29sb3I6IGRhcms7XG4gICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVcbiAgICAgICAgIH1cbiAgICAgfVxuICAgICAuY3VycmVudCB7XG4gICAgICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgfVxuICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgY29sb3I6ICNjMGMwYzA7XG4gICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICBjb2xvcjogI2MwYzBjMDtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmY1O1xuICAgICAgICAgfVxuICAgICB9XG4gfVxuIC5maWVsZCB7XG4gICAgIG1hcmdpbjogLjVyZW0gMCAxLjVyZW0gMDtcbiB9XG5cbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogMi41cmVtO1xuICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGxpZ2h0LCA1JSk7XG4gICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcbiAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgbWluLWhlaWdodDogOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA1cmVtIDA7XG4gICAgfVxuXG5AaW1wb3J0ICd+bm9ybWFsaXplLmNzcyc7XG4iLCJAaW1wb3J0ICd+bm9ybWFsaXplLmNzcyc7XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG5cbi53cmFwcGVyX3dpZGUge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLndyYXBwZXJfc2tpbm55IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jZjo6YmVmb3JlLCAuY2Y6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2Y6OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogOC41cmVtO1xufVxuXG4uYnV0dG9uX2hpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6ICNkMjY3NGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBlYXNlLWluLW91dDtcbn1cbi5idXR0b25faGlnaGxpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M3NGYzMztcbn1cblxuLmJ1dHRvbl93aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uYnV0dG9uX3doaXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M3NGYzMztcbn1cblxuLmJ1dHRvbl9ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI21haW5faGVhZGVyIHtcbiAgY29sb3I6IGRhcms7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xufVxuI21haW5faGVhZGVyICNsb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjIyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbWFpbl9oZWFkZXIgbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI21haW5faGVhZGVyIG5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbiNtYWluX2hlYWRlciBuYXYgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4jbWFpbl9oZWFkZXIgbmF2IHVsIGxpIGEge1xuICBjb2xvcjogIzIyMjkyZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jYmFubmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbiNiYW5uZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHJlbSAwO1xufVxuXG4ucG9kY2FzdF9iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZyk7XG59XG5cbi5zaWduaW5fYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGcpO1xufVxuXG4uc2lnbnVwX2Jhbm5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnKTtcbn1cblxuLnBhZ2luYXRpb246OmJlZm9yZSwgLnBhZ2luYXRpb246YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5wYWdpbmF0aW9uOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMCA1cmVtIDA7XG59XG4ucGFnaW5hdGlvbiBhLCAucGFnaW5hdGlvbiAucHJldmlvdXNfcGFnZSwgLnBhZ2luYXRpb24gLmN1cnJlbnQsIC5wYWdpbmF0aW9uIC5uZXh0X3BhZ2Uge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIG1hcmdpbjogMCAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmY1O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IGRhcms7XG59XG4ucGFnaW5hdGlvbiBhOmhvdmVyLCAucGFnaW5hdGlvbiAucHJldmlvdXNfcGFnZTpob3ZlciwgLnBhZ2luYXRpb24gLmN1cnJlbnQ6aG92ZXIsIC5wYWdpbmF0aW9uIC5uZXh0X3BhZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZDI2NzRlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogI2QyNjc0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucGFnaW5hdGlvbiAuZGlzYWJsZWQge1xuICBjb2xvcjogI2MwYzBjMDtcbn1cbi5wYWdpbmF0aW9uIC5kaXNhYmxlZDpob3ZlciB7XG4gIGNvbG9yOiAjYzBjMGMwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmY1O1xufVxuXG4uZmllbGQge1xuICBtYXJnaW46IDAuNXJlbSAwIDEuNXJlbSAwO1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9dGV4dF0sIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICNlZGVmZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGUwZWM7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA4cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuI2Zvcm0ge1xuICBwYWRkaW5nOiAwIDAgNXJlbSAwO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/warrenbrown/work/tcmedia/Projects/Podcast Network/podcast-frontend/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map