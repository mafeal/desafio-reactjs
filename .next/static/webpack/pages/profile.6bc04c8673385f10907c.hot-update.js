self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/components/Repositories.js":
/*!****************************************!*\
  !*** ./src/components/Repositories.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\src\\components\\Repositories.js",
    _s2 = $RefreshSig$();



var ProfileCard = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.section.withConfig({
  displayName: "Repositories__ProfileCard",
  componentId: "sc-1cj2t73-0"
})(["flex-grow:2;margin:10px 60px;@media (max-width:768px){margin:10px 10px;width:367px;}"]);
_c = ProfileCard;
var UlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.ul.withConfig({
  displayName: "Repositories__UlContainer",
  componentId: "sc-1cj2t73-1"
})(["@media (max-width:768px){padding-left:20px;width:330px;}@media (max-width:568px){padding-inline-start:unset;margin:0 10px;width:100%;}"]);
_c2 = UlContainer;
var RepositoryCard = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.li.withConfig({
  displayName: "Repositories__RepositoryCard",
  componentId: "sc-1cj2t73-2"
})(["display:flex;flex-direction:column;color:#3b4252;padding-bottom:30px;"]);
_c3 = RepositoryCard;
var RepositoryName = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.a.withConfig({
  displayName: "Repositories__RepositoryName",
  componentId: "sc-1cj2t73-3"
})(["font-size:24px;text-decoration:none;color:#3b4252;"]);
_c4 = RepositoryName;
var RepositoryDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p.withConfig({
  displayName: "Repositories__RepositoryDescription",
  componentId: "sc-1cj2t73-4"
})(["margin:0;font-size:18px;line-height:28px;max-width:680px;@media (max-width:568px){margin:10px 0;}"]);
_c5 = RepositoryDescription;
var RepositoryStatus = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p.withConfig({
  displayName: "Repositories__RepositoryStatus",
  componentId: "sc-1cj2t73-5"
})(["margin:0;display:flex;align-items:center;padding-top:5px;color:#8190a5;font-family:Lato;font-size:20px;.fa-circle{font-size:8px;padding-left:10px;}@media (max-width:568px){margin:10px 0;}"]);
_c6 = RepositoryStatus;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.i.withConfig({
  displayName: "Repositories__Icon",
  componentId: "sc-1cj2t73-6"
})(["padding-right:20px;"]);
_c7 = Icon;
function Profile() {
  _s2();

  var _s = $RefreshSig$(),
      _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      userName = _useState[0],
      setUserName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      repo = _useState2[0],
      setRepo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      arrRepo = _useState3[0],
      setArrRepo = _useState3[1];

  var useQuery = function useQuery() {
    return new URLSearchParams(document.location.search);
  };

  var getQuery = function getQuery() {
    _s();

    var query = useQuery(); // console.log(userName + "-> Este é o usuário procurado!");

    return query.get("userName");
  };

  _s(getQuery, "c7fxJWDO4uMGjIdKMJSj1aiS9wg=", false, function () {
    return [useQuery];
  });

  var starOrdenation = function starOrdenation(fristPosition, secondPosition) {
    if (fristPosition.stargazers_count < secondPosition.stargazers_count) return -1;
    if (fristPosition.stargazers_count > secondPosition.stargazers_count) return 1;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setUserName(getQuery);

    if (!userName) {// console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");
      fetch("https://api.github.com/users/".concat(userName, "/repos")).then(function (res) {
        return res.json();
      }).then(function (data) {
        data.forEach(function (repos) {
          setRepo(repo.push({
            id: repos.id,
            html_url: repos.html_url,
            description: repos.description,
            name: repos.name,
            updated_at: repos.updated_at,
            stargazers_count: repos.stargazers_count
          }));
        });
      }).then(function () {
        return setArrRepo(Array.from(repo).sort(starOrdenation).reverse());
      });
    }

    return;
  }, [userName]);

  var lastUpdated = function lastUpdated(updatedAt) {
    var today = new Date();
    var updatedDate = new Date(updatedAt);

    var countDays = function countDays(date) {
      return date.getFullYear() * 365 + (date.getMonth() + 1) * 30 + date.getDate();
    };

    return countDays(today) - countDays(updatedDate);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileCard, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UlContainer, {
      children: arrRepo.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryName, {
          href: "#",
          children: [" ", "Nenhum reposit\xF3rio encontrado.", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryDescription, {
          children: "Provavelmente o usu\xE1rio n\xE3o possui reposit\xF3rios p\xFAblicos ou voc\xEA pesquisou pelo usu\xE1rio errado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, this) : arrRepo.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryName, {
            target: "_blank",
            href: item.html_url,
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryDescription, {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryStatus, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, _this), " ", item.stargazers_count, " ", "stars", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
              className: "fas fa-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, _this), " Updated", " ", "".concat(lastUpdated(item.updated_at), " "), "days ago"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, _this)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }, this);
}

_s2(Profile, "2yBYS9YL+mCIUMWVzltlwp1poA8=");

_c8 = Profile;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "ProfileCard");
$RefreshReg$(_c2, "UlContainer");
$RefreshReg$(_c3, "RepositoryCard");
$RefreshReg$(_c4, "RepositoryName");
$RefreshReg$(_c5, "RepositoryDescription");
$RefreshReg$(_c6, "RepositoryStatus");
$RefreshReg$(_c7, "Icon");
$RefreshReg$(_c8, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yaWVzLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVDYXJkIiwic3R5bGVkIiwiVWxDb250YWluZXIiLCJSZXBvc2l0b3J5Q2FyZCIsIlJlcG9zaXRvcnlOYW1lIiwiUmVwb3NpdG9yeURlc2NyaXB0aW9uIiwiUmVwb3NpdG9yeVN0YXR1cyIsIkljb24iLCJQcm9maWxlIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicmVwbyIsInNldFJlcG8iLCJhcnJSZXBvIiwic2V0QXJyUmVwbyIsInVzZVF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldFF1ZXJ5IiwicXVlcnkiLCJnZXQiLCJzdGFyT3JkZW5hdGlvbiIsImZyaXN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInN0YXJnYXplcnNfY291bnQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZvckVhY2giLCJyZXBvcyIsInB1c2giLCJpZCIsImh0bWxfdXJsIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwidXBkYXRlZF9hdCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJyZXZlcnNlIiwibGFzdFVwZGF0ZWQiLCJ1cGRhdGVkQXQiLCJ0b2RheSIsIkRhdGUiLCJ1cGRhdGVkRGF0ZSIsImNvdW50RGF5cyIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFqQjtLQUFNRCxXO0FBVU4sSUFBTUUsV0FBVyxHQUFHRCxvRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFBakI7TUFBTUMsVztBQWFOLElB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QmtCLElBQUksQ0FBQ25CO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSw4REFBQyxnQkFBRDtBQUFBLG9DQUNFLDhEQUFDLElBQUQ7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsT0FDeUNtQixJQUFJLENBQUMvQixnQkFEOUMsRUFDZ0UsR0FEaEUsd0JBR0UsOERBQUMsSUFBRDtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixjQUdrRCxHQUhsRCxZQUlNbUIsV0FBVyxDQUFDWSxJQUFJLENBQUNqQixVQUFOLENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQXFCaUIsSUFBSSxDQUFDckIsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVo7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztJQWpHdUI3QixPOztNQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNmJjMDRjODY3MzM4NWYxMDkwN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBQcm9maWxlQ2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW46IDEwcHggNjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAzNjdweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5Q2FyZCA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TmFtZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1heC13aWR0aDogNjgwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVwb3NpdG9yeVN0YXR1cyA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBjb2xvcjogIzgxOTBhNTtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIC5mYS1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb24gPSBzdHlsZWQuaWBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXBvLCBzZXRSZXBvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXJyUmVwbywgc2V0QXJyUmVwb10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHVzZVF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRRdWVyeSA9ICgpID0+IHtcclxuICAgIGxldCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyTmFtZSArIFwiLT4gRXN0ZSDDqSBvIHVzdcOhcmlvIHByb2N1cmFkbyFcIik7XHJcbiAgICByZXR1cm4gcXVlcnkuZ2V0KFwidXNlck5hbWVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3Rhck9yZGVuYXRpb24gPSAoZnJpc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pID0+IHtcclxuICAgIGlmIChmcmlzdFBvc2l0aW9uLnN0YXJnYXplcnNfY291bnQgPCBzZWNvbmRQb3NpdGlvbi5zdGFyZ2F6ZXJzX2NvdW50KVxyXG4gICAgICByZXR1cm4gLTE7XHJcblxyXG4gICAgaWYgKGZyaXN0UG9zaXRpb24uc3RhcmdhemVyc19jb3VudCA+IHNlY29uZFBvc2l0aW9uLnN0YXJnYXplcnNfY291bnQpXHJcbiAgICAgIHJldHVybiAxO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShnZXRRdWVyeSk7XHJcblxyXG4gICAgaWYgKCF1c2VyTmFtZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNhcnJlZ2FuZG8uLi5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyTmFtZSArIFwiIENhcnJlZ291IVwiKTtcclxuXHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlck5hbWV9L3JlcG9zYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLmZvckVhY2goKHJlcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlcG8oXHJcbiAgICAgICAgICAgICAgcmVwby5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiByZXBvcy5pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfdXJsOiByZXBvcy5odG1sX3VybCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXBvcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG5hbWU6IHJlcG9zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiByZXBvcy51cGRhdGVkX2F0LFxyXG4gICAgICAgICAgICAgICAgc3RhcmdhemVyc19jb3VudDogcmVwb3Muc3RhcmdhemVyc19jb3VudCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgc2V0QXJyUmVwbyhBcnJheS5mcm9tKHJlcG8pLnNvcnQoc3Rhck9yZGVuYXRpb24pLnJldmVyc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9LCBbdXNlck5hbWVdKTtcclxuXHJcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSAodXBkYXRlZEF0KSA9PiB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gbmV3IERhdGUodXBkYXRlZEF0KTtcclxuICAgIGNvbnN0IGNvdW50RGF5cyA9IChkYXRlKSA9PiAoZGF0ZS5nZXRGdWxsWWVhcigpICogMzY1KSArICgoZGF0ZS5nZXRNb250aCgpKzEpICogMzApICsgKGRhdGUuZ2V0RGF0ZSgpKVxyXG5cclxuICAgIHJldHVybiBjb3VudERheXModG9kYXkpIC0gY291bnREYXlzKHVwZGF0ZWREYXRlKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUNhcmQ+XHJcbiAgICAgIDxVbENvbnRhaW5lcj5cclxuICAgICAgICB7YXJyUmVwby5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8UmVwb3NpdG9yeUNhcmQ+XHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TmFtZSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBOZW5odW0gcmVwb3NpdMOzcmlvIGVuY29udHJhZG8ue1wiIFwifVxyXG4gICAgICAgICAgICA8L1JlcG9zaXRvcnlOYW1lPlxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIFByb3ZhdmVsbWVudGUgbyB1c3XDoXJpbyBuw6NvIHBvc3N1aSByZXBvc2l0w7NyaW9zIHDDumJsaWNvcyBvdSB2b2PDqlxyXG4gICAgICAgICAgICAgIHBlc3F1aXNvdSBwZWxvIHVzdcOhcmlvIGVycmFkby5cclxuICAgICAgICAgICAgPC9SZXBvc2l0b3J5RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1JlcG9zaXRvcnlDYXJkPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBhcnJSZXBvLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeUNhcmQga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8UmVwb3NpdG9yeU5hbWUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aXRlbS5odG1sX3VybH0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvUmVwb3NpdG9yeU5hbWU+XHJcbiAgICAgICAgICAgICAgPFJlcG9zaXRvcnlEZXNjcmlwdGlvbj57aXRlbS5kZXNjcmlwdGlvbn08L1JlcG9zaXRvcnlEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8UmVwb3NpdG9yeVN0YXR1cz5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9JY29uPiB7aXRlbS5zdGFyZ2F6ZXJzX2NvdW50fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHN0YXJzXHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlXCI+PC9JY29uPiBVcGRhdGVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2Ake2xhc3RVcGRhdGVkKGl0ZW0udXBkYXRlZF9hdCl9IGB9XHJcbiAgICAgICAgICAgICAgICBkYXlzIGFnb1xyXG4gICAgICAgICAgICAgIDwvUmVwb3NpdG9yeVN0YXR1cz5cclxuICAgICAgICAgICAgPC9SZXBvc2l0b3J5Q2FyZD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9VbENvbnRhaW5lcj5cclxuICAgIDwvUHJvZmlsZUNhcmQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9