(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_SearchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/SearchCard */ "./src/components/SearchCard.js");

var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\pages\\index.js";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1wbo52z-0"
})(["display:flex;align-items:center;height:90vh;@media (max-width:568px){flex-direction:column;}"]);
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SearchCard__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SearchCard.js":
/*!**************************************!*\
  !*** ./src/components/SearchCard.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\src\\components\\SearchCard.js";



const Card = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SearchCard__Card",
  componentId: "xpgvrn-0"
})(["display:flex;flex-direction:column;flex-wrap:wrap-reverse;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "SearchCard__Title",
  componentId: "xpgvrn-1"
})(["margin:0;align-self:flex-end;padding-left:80px;color:#3B4252;font-family:Lato;font-size:40px;font-style:italic;font-weight:200;@media (max-width:568px){width:100%;padding:0;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SearchCard__Form",
  componentId: "xpgvrn-2"
})(["display:flex;align-items:center;@media (max-width:568px){flex-direction:column;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "SearchCard__Input",
  componentId: "xpgvrn-3"
})(["background-color:#FFFFFF;border:1px solid #3B4252;border-radius:5px;padding-left:20px;width:400px;height:50px;color:#8190A5;font-family:Lato;font-size:18px;font-style:italic;line-height:62px;width:290px;text-align:left;@media (max-width:568px){width:100%;}"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "SearchCard__Button",
  componentId: "xpgvrn-4"
})(["display:flex;justify-content:space-between;align-items:center;background-color:#47525E;border-radius:5px;padding:0 10px;width:118px;height:50px;color:#ECEFF4;font-family:Lato;font-size:22px;font-style:italic;cursor:pointer;@media (max-width:568px){margin-top:10px;}"]);
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SearchCard__ErrorMessage",
  componentId: "xpgvrn-5"
})(["margin-top:10px;padding:20px;background-color:rgb(230,153,125);border-radius:20px;text-align:center;font-size:1.3em;"]);
function SearchCard() {
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const getUserName = event => {
    event.preventDefault();
    const userInput = document.querySelector('#search-input').value;
    setUserName(userInput);
  };

  const submitHandle = event => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userName}`).then(res => res.json()).then(data => {
      if (data.message === "Not Found") {
        setErrorMessage(` Usuário "${userName}" não encontrado`);
      } else {
        router.push(`/profile?userName=${userName}`);
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: "Search Devs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
        id: "search-input",
        placeholder: "Type the username here...",
        onChange: getUserName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {
        onClick: submitHandle,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }, this), "Buscar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }, this), errorMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorMessage, {
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaENhcmQuanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIkhvbWUiLCJDYXJkIiwiVGl0bGUiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJFcnJvck1lc3NhZ2UiLCJTZWFyY2hDYXJkIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInVzZVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0VXNlck5hbWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzdWJtaXRIYW5kbGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQUg7QUFBQTtBQUFBO0FBQUEsb0dBQWY7QUFVZSxTQUFTQyxJQUFULEdBQWdCO0FBRTdCLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSwyQkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxJQUFJLEdBQUdGLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUFWO0FBTUEsTUFBTUcsS0FBSyxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxzTEFBWDtBQWdCQSxNQUFNSSxJQUFJLEdBQUdKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdGQUFWO0FBVUEsTUFBTUssS0FBSyxHQUFHTCx5RUFBSDtBQUFBO0FBQUE7QUFBQSx3UUFBWDtBQXFCQSxNQUFNTSxNQUFNLEdBQUdOLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGlSQUFaO0FBcUJBLE1BQU1PLFlBQVksR0FBR1AsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNEhBQWxCO0FBVWUsU0FBU1EsVUFBVCxHQUFzQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0YsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM3QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLEtBQTFEO0FBQ0FaLGVBQVcsQ0FBQ1MsU0FBRCxDQUFYO0FBQ0QsR0FKRDs7QUFNQSxRQUFNSSxZQUFZLEdBQUlOLEtBQUQsSUFBVztBQUM5QkEsU0FBSyxDQUFDQyxjQUFOO0FBRUFNLFNBQUssQ0FBRSxnQ0FBK0JmLFFBQVMsRUFBMUMsQ0FBTCxDQUNDZ0IsSUFERCxDQUNPQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURmLEVBRUNGLElBRkQsQ0FFT0csSUFBRCxJQUFVO0FBQ2IsVUFBSUEsSUFBSSxDQUFDQyxPQUFMLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDaEIsdUJBQWUsQ0FBRSxhQUFZSixRQUFTLGtCQUF2QixDQUFmO0FBQ0YsT0FGQSxNQUVNO0FBQ0xLLGNBQU0sQ0FBQ2dCLElBQVAsQ0FBYSxxQkFBb0JyQixRQUFTLEVBQTFDO0FBQ0Q7QUFDRixLQVJEO0FBU0QsR0FaRDs7QUFjQSxzQkFDSSw4REFBQyxJQUFEO0FBQUEsNEJBQ0UsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsSUFBRDtBQUFBLDhCQUNFLDhEQUFDLEtBQUQ7QUFDRSxVQUFFLEVBQUMsY0FETDtBQUVFLG1CQUFXLEVBQUMsMkJBRmQ7QUFHRSxnQkFBUSxFQUFFTztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLDhEQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUVPLFlBQWpCO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQWFHWCxZQUFZLGlCQUNYLDhEQUFDLFlBQUQ7QUFBQSxnQkFBZUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkQsQzs7Ozs7Ozs7Ozs7QUNwSUgseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNlYXJjaENhcmQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NlYXJjaENhcmRcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTB2aDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNlYXJjaENhcmQvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIGNvbG9yOiAjM0I0MjUyO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNCNDI1MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICBcclxuICAgIGNvbG9yOiAjODE5MEE1O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1MjVFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICNFQ0VGRjQ7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTUzLCAxMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQ2FyZCgpIHtcclxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgICBjb25zdCBnZXRVc2VyTmFtZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWVcclxuICAgICAgc2V0VXNlck5hbWUodXNlcklucHV0KSBcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJOYW1lfWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm90IEZvdW5kXCIpIHtcclxuICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoYCBVc3XDoXJpbyBcIiR7dXNlck5hbWV9XCIgbsOjbyBlbmNvbnRyYWRvYClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9maWxlP3VzZXJOYW1lPSR7dXNlck5hbWV9YClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPFRpdGxlPlNlYXJjaCBEZXZzPC9UaXRsZT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHRoZSB1c2VybmFtZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0VXNlck5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0SGFuZGxlfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgIEJ1c2NhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntlcnJvck1lc3NhZ2V9PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==