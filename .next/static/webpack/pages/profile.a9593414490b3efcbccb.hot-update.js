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
})(["margin:0;font-size:18px;line-height:28px;@media (max-width:568px){margin:10px 0;}"]);
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
          lineNumber: 141,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryDescription, {
          children: "Provavelmente o usu\xE1rio n\xE3o possui reposit\xF3rios p\xFAblicos ou voc\xEA pesquisou pelo usu\xE1rio errado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, this) : arrRepo.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryName, {
            target: "_blank",
            href: item.html_url,
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryDescription, {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryStatus, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, _this), " ", item.stargazers_count, " ", "stars", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
              className: "fas fa-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, _this), " Updated", " ", "".concat(lastUpdated(item.updated_at), " "), "days ago"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yaWVzLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVDYXJkIiwic3R5bGVkIiwiVWxDb250YWluZXIiLCJSZXBvc2l0b3J5Q2FyZCIsIlJlcG9zaXRvcnlOYW1lIiwiUmVwb3NpdG9yeURlc2NyaXB0aW9uIiwiUmVwb3NpdG9yeVN0YXR1cyIsIkljb24iLCJQcm9maWxlIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicmVwbyIsInNldFJlcG8iLCJhcnJSZXBvIiwic2V0QXJyUmVwbyIsInVzZVF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldFF1ZXJ5IiwicXVlcnkiLCJnZXQiLCJzdGFyT3JkZW5hdGlvbiIsImZyaXN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInN0YXJnYXplcnNfY291bnQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImZvckVhY2giLCJyZXBvcyIsInB1c2giLCJpZCIsImh0bWxfdXJsIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwidXBkYXRlZF9hdCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJyZXZlcnNlIiwibGFzdFVwZGF0ZWQiLCJ1cGRhdGVkQXQiLCJ0b2RheSIsIkRhdGUiLCJ1cGRhdGVkRGF0ZSIsImNvdW50RGF5cyIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFqQjtLQUFNRCxXO0FBVU4sSUFBTUUsV0FBVyxHQUFHRCxvRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFBakI7TUFBTUMsVztBQWFOLElB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QmtCLElBQUksQ0FBQ25CO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSw4REFBQyxnQkFBRDtBQUFBLG9DQUNFLDhEQUFDLElBQUQ7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsT0FDeUNtQixJQUFJLENBQUMvQixnQkFEOUMsRUFDZ0UsR0FEaEUsd0JBR0UsOERBQUMsSUFBRDtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixjQUdrRCxHQUhsRCxZQUlNbUIsV0FBVyxDQUFDWSxJQUFJLENBQUNqQixVQUFOLENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQXFCaUIsSUFBSSxDQUFDckIsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVo7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztJQWpHdUI3QixPOztNQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYTk1OTM0MTQ0OTBiM2VmY2JjY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBQcm9maWxlQ2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW46IDEwcHggNjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAzNjdweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5Q2FyZCA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TmFtZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlcG9zaXRvcnlTdGF0dXMgPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgY29sb3I6ICM4MTkwYTU7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAuZmEtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uID0gc3R5bGVkLmlgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVwbywgc2V0UmVwb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FyclJlcG8sIHNldEFyclJlcG9dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB1c2VRdWVyeSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiB7XHJcbiAgICBsZXQgcXVlcnkgPSB1c2VRdWVyeSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlck5hbWUgKyBcIi0+IEVzdGUgw6kgbyB1c3XDoXJpbyBwcm9jdXJhZG8hXCIpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5LmdldChcInVzZXJOYW1lXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJPcmRlbmF0aW9uID0gKGZyaXN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSA9PiB7XHJcbiAgICBpZiAoZnJpc3RQb3NpdGlvbi5zdGFyZ2F6ZXJzX2NvdW50IDwgc2Vjb25kUG9zaXRpb24uc3RhcmdhemVyc19jb3VudClcclxuICAgICAgcmV0dXJuIC0xO1xyXG5cclxuICAgIGlmIChmcmlzdFBvc2l0aW9uLnN0YXJnYXplcnNfY291bnQgPiBzZWNvbmRQb3NpdGlvbi5zdGFyZ2F6ZXJzX2NvdW50KVxyXG4gICAgICByZXR1cm4gMTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZ2V0UXVlcnkpO1xyXG5cclxuICAgIGlmICghdXNlck5hbWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjYXJyZWdhbmRvLi4uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlck5hbWUgKyBcIiBDYXJyZWdvdSFcIik7XHJcblxyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJOYW1lfS9yZXBvc2ApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5mb3JFYWNoKChyZXBvcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXBvKFxyXG4gICAgICAgICAgICAgIHJlcG8ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogcmVwb3MuaWQsXHJcbiAgICAgICAgICAgICAgICBodG1sX3VybDogcmVwb3MuaHRtbF91cmwsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVwb3MuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiByZXBvcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZF9hdDogcmVwb3MudXBkYXRlZF9hdCxcclxuICAgICAgICAgICAgICAgIHN0YXJnYXplcnNfY291bnQ6IHJlcG9zLnN0YXJnYXplcnNfY291bnQsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgIHNldEFyclJlcG8oQXJyYXkuZnJvbShyZXBvKS5zb3J0KHN0YXJPcmRlbmF0aW9uKS5yZXZlcnNlKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm47XHJcbiAgfSwgW3VzZXJOYW1lXSk7XHJcblxyXG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gKHVwZGF0ZWRBdCkgPT4ge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCB1cGRhdGVkRGF0ZSA9IG5ldyBEYXRlKHVwZGF0ZWRBdCk7XHJcbiAgICBjb25zdCBjb3VudERheXMgPSAoZGF0ZSkgPT4gKGRhdGUuZ2V0RnVsbFllYXIoKSAqIDM2NSkgKyAoKGRhdGUuZ2V0TW9udGgoKSsxKSAqIDMwKSArIChkYXRlLmdldERhdGUoKSlcclxuXHJcbiAgICByZXR1cm4gY291bnREYXlzKHRvZGF5KSAtIGNvdW50RGF5cyh1cGRhdGVkRGF0ZSlcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVDYXJkPlxyXG4gICAgICA8VWxDb250YWluZXI+XHJcbiAgICAgICAge2FyclJlcG8ubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPFJlcG9zaXRvcnlDYXJkPlxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeU5hbWUgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgTmVuaHVtIHJlcG9zaXTDs3JpbyBlbmNvbnRyYWRvLntcIiBcIn1cclxuICAgICAgICAgICAgPC9SZXBvc2l0b3J5TmFtZT5cclxuICAgICAgICAgICAgPFJlcG9zaXRvcnlEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICBQcm92YXZlbG1lbnRlIG8gdXN1w6FyaW8gbsOjbyBwb3NzdWkgcmVwb3NpdMOzcmlvcyBww7pibGljb3Mgb3Ugdm9jw6pcclxuICAgICAgICAgICAgICBwZXNxdWlzb3UgcGVsbyB1c3XDoXJpbyBlcnJhZG8uXHJcbiAgICAgICAgICAgIDwvUmVwb3NpdG9yeURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9SZXBvc2l0b3J5Q2FyZD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgYXJyUmVwby5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFJlcG9zaXRvcnlDYXJkIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPFJlcG9zaXRvcnlOYW1lIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0uaHRtbF91cmx9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L1JlcG9zaXRvcnlOYW1lPlxyXG4gICAgICAgICAgICAgIDxSZXBvc2l0b3J5RGVzY3JpcHRpb24+e2l0ZW0uZGVzY3JpcHRpb259PC9SZXBvc2l0b3J5RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPFJlcG9zaXRvcnlTdGF0dXM+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvSWNvbj4ge2l0ZW0uc3RhcmdhemVyc19jb3VudH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBzdGFyc1xyXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZVwiPjwvSWNvbj4gVXBkYXRlZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtgJHtsYXN0VXBkYXRlZChpdGVtLnVwZGF0ZWRfYXQpfSBgfVxyXG4gICAgICAgICAgICAgICAgZGF5cyBhZ29cclxuICAgICAgICAgICAgICA8L1JlcG9zaXRvcnlTdGF0dXM+XHJcbiAgICAgICAgICAgIDwvUmVwb3NpdG9yeUNhcmQ+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvVWxDb250YWluZXI+XHJcbiAgICA8L1Byb2ZpbGVDYXJkPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==