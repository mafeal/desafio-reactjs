(function() {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Repositories */ "./src/components/Repositories.js");
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Navbar */ "./src/components/Navbar.js");

var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\pages\\profile.js";



const ProfileContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  justify-content: center;

  @media (max-width: 568px) {
    flex-direction: column;
  }
`;
function profile() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Repositories__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\src\\components\\Navbar.js";



const ProfileNavbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__ProfileNavbar",
  componentId: "q4ylwj-0"
})(["display:flex;flex-direction:column;width:450px;background-color:#3b4252;color:#eceff4;img{width:298px;height:298px;margin-top:60px;margin-bottom:40px;align-self:center;}@media (max-width:768px){width:350px;img{width:298px;height:298px;}}@media (max-width:568px){width:100%;img{margin-top:30px;}p{margin:10px 0;}}"]);
const ProfileData = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__ProfileData",
  componentId: "q4ylwj-1"
})(["margin:0 25px;@media (max-width:768px){margin:0 15px;}@media (max-width:568px){margin:0 10px;}"]);
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "Navbar__UserName",
  componentId: "q4ylwj-2"
})(["margin:0;font-family:Lato;font-size:40px;font-style:italic;line-height:50px;@media (max-width:568px){margin:0;font-size:30px;line-height:20px;}"]);
const UserLogin = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "Navbar__UserLogin",
  componentId: "q4ylwj-3"
})(["margin:0;text-decoration:none;color:#eceff4;font-size:28px;font-style:italic;line-height:34px;@media (max-width:568px){margin:0;font-size:25px;}"]);
const UserBio = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "Navbar__UserBio",
  componentId: "q4ylwj-4"
})(["color:#8190a5;font-size:18px;font-style:unset;font-weight:bold;line-height:28px;@media (max-width:568px){margin:10px 0;}"]);
const UserRanks = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__UserRanks",
  componentId: "q4ylwj-5"
})(["display:flex;flex-direction:row;font-size:20px;font-style:italic;justify-content:space-between;"]);
const UserRankItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__UserRankItem",
  componentId: "q4ylwj-6"
})(["display:flex;align-items:center;i{padding-right:8px;}@media (max-width:768px){flex-direction:column;}"]);
const UserInformation = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__UserInformation",
  componentId: "q4ylwj-7"
})(["display:flex;flex-direction:column;margin:40px 0;font-size:28px;@media (max-width:768px){font-size:20px;}@media (max-width:568px){margin:40px 0;}"]);
const UserInformationItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__UserInformationItem",
  componentId: "q4ylwj-8"
})(["padding-bottom:15px;i{padding-right:20px;}a{padding-right:20px;text-decoration:none;color:#eceff4;}@media (max-width:768px){font-size:20px;i{padding-right:20px;}}"]);
const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "Navbar__BackButton",
  componentId: "q4ylwj-9"
})(["display:flex;flex-direction:column;justify-content:center;align-self:center;margin-bottom:35px;text-decoration:none;background-color:#eceff4;border-radius:5px;border-width:0;width:192px;height:50px;align-items:center;color:#3b4252;font-family:Lato;font-size:18px;font-style:italic;width:192px;text-align:center;cursor:pointer;"]);
function NavBar() {
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: amountStar,
    1: setAmountStar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: "id",
    login: "@username",
    avatar: "/image-profile.png",
    bio: "Biografia do Usuário",
    name: "Nome do usuário",
    company: "Empresa",
    blog: "Blog",
    location: "Localização",
    email: "email@usuario.com",
    followers: "Seguidores",
    following: "Seguindo",
    twitter: "Usuário do Twitter",
    stars: "0"
  });

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery(); // console.log(userName + "-> Este é o usuário procurado!");

    return query.get("userName");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setUserName(getQuery);

    if (!userName) {// console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");
      fetch(`https://api.github.com/users/${userName}/starred`).then(res => res.json()).then(data => {
        const star = data.length;
        setAmountStar(star);
      });
      fetch(`https://api.github.com/users/${userName}`).then(res => res.json()).then(data => {
        // console.log(data);
        setUser({
          id: data.id,
          login: data.login,
          avatar: data.avatar_url,
          bio: data.bio,
          name: data.name,
          company: data.company,
          blog: data.blog,
          location: data.location,
          email: data.email,
          followers: data.followers,
          following: data.following,
          twitter: data.twitter_username,
          repos: data.public_repos,
          stars: "0",
          html_url: data.html_url
        });
      });
    }
  }, [userName]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileNavbar, {
    as: "section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: user.avatar,
      alt: "User"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileData, {
      as: "section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserName, {
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLogin, {
        target: "_blank",
        href: user.html_url,
        children: ["@", user.login]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserBio, {
        children: user.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserRanks, {
        as: "section",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserRankItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fas fa-users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, this), user.followers, " followers"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserRankItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-heart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this), user.following, " following"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserRankItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-star"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, this), amountStar, " stars"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformation, {
        as: "section",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformationItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-building"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, this), user.company]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformationItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fas fa-map-marker-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, this), user.location]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformationItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-envelope"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, this), user.email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformationItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fas fa-link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: `http://${user.blog}`,
            children: user.blog
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserInformationItem, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fab fa-twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: `https://www.twitter.com/${user.twitter}`,
            children: ["@", user.twitter]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackButton, {
        children: "Voltar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Repositories.js":
/*!****************************************!*\
  !*** ./src/components/Repositories.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\web-coding\\Meus-Projetos\\Projetos da Net\\desafio-reactjs\\search-devs\\src\\components\\Repositories.js";


const ProfileCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "Repositories__ProfileCard",
  componentId: "sc-1cj2t73-0"
})(["flex-grow:2;margin:10px 60px;@media (max-width:768px){margin:10px 10px;width:367px;}"]);
const UlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "Repositories__UlContainer",
  componentId: "sc-1cj2t73-1"
})(["@media (max-width:768px){padding-left:20px;width:330px;}@media (max-width:568px){padding-inline-start:unset;margin:0 10px;width:100%;}"]);
const RepositoryCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
  displayName: "Repositories__RepositoryCard",
  componentId: "sc-1cj2t73-2"
})(["display:flex;flex-direction:column;color:#3b4252;padding-bottom:30px;"]);
const RepositoryName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "Repositories__RepositoryName",
  componentId: "sc-1cj2t73-3"
})(["font-size:24px;text-decoration:none;color:#3b4252;"]);
const RepositoryDescription = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "Repositories__RepositoryDescription",
  componentId: "sc-1cj2t73-4"
})(["margin:0;font-size:18px;line-height:28px;max-width:680px;@media (max-width:568px){margin:10px 0;}"]);
const RepositoryStatus = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "Repositories__RepositoryStatus",
  componentId: "sc-1cj2t73-5"
})(["margin:0;display:flex;align-items:center;padding-top:5px;color:#8190a5;font-family:Lato;font-size:20px;.fa-circle{font-size:8px;padding-left:10px;}@media (max-width:568px){margin:10px 0;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().i.withConfig({
  displayName: "Repositories__Icon",
  componentId: "sc-1cj2t73-6"
})(["padding-right:20px;"]);
function Profile() {
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: repo,
    1: setRepo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: arrRepo,
    1: setArrRepo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery(); // console.log(userName + "-> Este é o usuário procurado!");

    return query.get("userName");
  };

  const starOrdenation = (fristPosition, secondPosition) => {
    if (fristPosition.stargazers_count < secondPosition.stargazers_count) return -1;
    if (fristPosition.stargazers_count > secondPosition.stargazers_count) return 1;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setUserName(getQuery);

    if (!userName) {// console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");
      fetch(`https://api.github.com/users/${userName}/repos`).then(res => res.json()).then(data => {
        data.forEach(repos => {
          setRepo(repo.push({
            id: repos.id,
            html_url: repos.html_url,
            description: repos.description,
            name: repos.name,
            updated_at: repos.updated_at,
            stargazers_count: repos.stargazers_count
          }));
        });
      }).then(() => setArrRepo(Array.from(repo).sort(starOrdenation).reverse()));
    }

    return;
  }, [userName]);

  const lastUpdated = updatedAt => {
    const today = new Date();
    const updatedDate = new Date(updatedAt);

    const countDays = date => date.getFullYear() * 365 + (date.getMonth() + 1) * 30 + date.getDate();

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
      }, this) : arrRepo.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryName, {
          target: "_blank",
          href: item.html_url,
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryDescription, {
          children: item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RepositoryStatus, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
            className: "far fa-star"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, this), " ", item.stargazers_count, " ", "stars", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
            className: "fas fa-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 17
          }, this), " Updated", " ", `${lastUpdated(item.updated_at)} `, "days ago"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }, this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }, this))
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

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/profile.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9SZXBvc2l0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2lnbm9yZWR8QzpcXHdlYi1jb2RpbmdcXE1ldXMtUHJvamV0b3NcXFByb2pldG9zIGRhIE5ldFxcZGVzYWZpby1yZWFjdGpzXFxzZWFyY2gtZGV2c1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlByb2ZpbGVDb250YWluZXIiLCJzdHlsZWQiLCJwcm9maWxlIiwiUHJvZmlsZU5hdmJhciIsIlByb2ZpbGVEYXRhIiwiVXNlck5hbWUiLCJVc2VyTG9naW4iLCJVc2VyQmlvIiwiVXNlclJhbmtzIiwiVXNlclJhbmtJdGVtIiwiVXNlckluZm9ybWF0aW9uIiwiVXNlckluZm9ybWF0aW9uSXRlbSIsIkJhY2tCdXR0b24iLCJOYXZCYXIiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJhbW91bnRTdGFyIiwic2V0QW1vdW50U3RhciIsInVzZXIiLCJzZXRVc2VyIiwiaWQiLCJsb2dpbiIsImF2YXRhciIsImJpbyIsIm5hbWUiLCJjb21wYW55IiwiYmxvZyIsImxvY2F0aW9uIiwiZW1haWwiLCJmb2xsb3dlcnMiLCJmb2xsb3dpbmciLCJ0d2l0dGVyIiwic3RhcnMiLCJ1c2VRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImRvY3VtZW50Iiwic2VhcmNoIiwiZ2V0UXVlcnkiLCJxdWVyeSIsImdldCIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3RhciIsImxlbmd0aCIsImF2YXRhcl91cmwiLCJ0d2l0dGVyX3VzZXJuYW1lIiwicmVwb3MiLCJwdWJsaWNfcmVwb3MiLCJodG1sX3VybCIsIlByb2ZpbGVDYXJkIiwiVWxDb250YWluZXIiLCJSZXBvc2l0b3J5Q2FyZCIsIlJlcG9zaXRvcnlOYW1lIiwiUmVwb3NpdG9yeURlc2NyaXB0aW9uIiwiUmVwb3NpdG9yeVN0YXR1cyIsIkljb24iLCJQcm9maWxlIiwicmVwbyIsInNldFJlcG8iLCJhcnJSZXBvIiwic2V0QXJyUmVwbyIsInN0YXJPcmRlbmF0aW9uIiwiZnJpc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwic3RhcmdhemVyc19jb3VudCIsImZvckVhY2giLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVkX2F0IiwiQXJyYXkiLCJmcm9tIiwic29ydCIsInJldmVyc2UiLCJsYXN0VXBkYXRlZCIsInVwZGF0ZWRBdCIsInRvZGF5IiwiRGF0ZSIsInVwZGF0ZWREYXRlIiwiY291bnREYXlzIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyw4REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0FBU2UsU0FBU0MsT0FBVCxHQUFtQjtBQUNoQyxzQkFDRSw4REFBQyxnQkFBRDtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBO0FBRUEsTUFBTUMsYUFBYSxHQUFHRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxnVUFBbkI7QUFzQ0EsTUFBTUcsV0FBVyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzR0FBakI7QUFZQSxNQUFNSSxRQUFRLEdBQUdKLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVKQUFkO0FBY0EsTUFBTUssU0FBUyxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3SkFBZjtBQWNBLE1BQU1NLE9BQU8sR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0lBQWI7QUFZQSxNQUFNTyxTQUFTLEdBQUdQLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVHQUFmO0FBUUEsTUFBTVEsWUFBWSxHQUFHUix1RUFBSDtBQUFBO0FBQUE7QUFBQSw2R0FBbEI7QUFhQSxNQUFNUyxlQUFlLEdBQUdULHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlKQUFyQjtBQWVBLE1BQU1VLG1CQUFtQixHQUFHVix1RUFBSDtBQUFBO0FBQUE7QUFBQSwwS0FBekI7QUF1QkEsTUFBTVcsVUFBVSxHQUFHWCwwRUFBSDtBQUFBO0FBQUE7QUFBQSw4VUFBaEI7QUF3QmUsU0FBU1ksTUFBVCxHQUFrQjtBQUMvQixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSiwrQ0FBUSxDQUFDO0FBQy9CSyxNQUFFLEVBQUUsSUFEMkI7QUFFL0JDLFNBQUssRUFBRSxXQUZ3QjtBQUcvQkMsVUFBTSxFQUFFLG9CQUh1QjtBQUkvQkMsT0FBRyxFQUFFLHNCQUowQjtBQUsvQkMsUUFBSSxFQUFFLGlCQUx5QjtBQU0vQkMsV0FBTyxFQUFFLFNBTnNCO0FBTy9CQyxRQUFJLEVBQUUsTUFQeUI7QUFRL0JDLFlBQVEsRUFBRSxhQVJxQjtBQVMvQkMsU0FBSyxFQUFFLG1CQVR3QjtBQVUvQkMsYUFBUyxFQUFFLFlBVm9CO0FBVy9CQyxhQUFTLEVBQUUsVUFYb0I7QUFZL0JDLFdBQU8sRUFBRSxvQkFac0I7QUFhL0JDLFNBQUssRUFBRTtBQWJ3QixHQUFELENBQWhDOztBQWdCQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixXQUFPLElBQUlDLGVBQUosQ0FBb0JDLFFBQVEsQ0FBQ1IsUUFBVCxDQUFrQlMsTUFBdEMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBSUMsS0FBSyxHQUFHTCxRQUFRLEVBQXBCLENBRHFCLENBRXJCOztBQUNBLFdBQU9LLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQVYsQ0FBUDtBQUNELEdBSkQ7O0FBTUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkMUIsZUFBVyxDQUFDdUIsUUFBRCxDQUFYOztBQUVBLFFBQUksQ0FBQ3hCLFFBQUwsRUFBZSxDQUNiO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFFQTRCLFdBQUssQ0FBRSxnQ0FBK0I1QixRQUFTLFVBQTFDLENBQUwsQ0FDRzZCLElBREgsQ0FDU0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFEakIsRUFFR0YsSUFGSCxDQUVTRyxJQUFELElBQVU7QUFDZCxjQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsTUFBbEI7QUFDQTlCLHFCQUFhLENBQUM2QixJQUFELENBQWI7QUFDRCxPQUxIO0FBT0FMLFdBQUssQ0FBRSxnQ0FBK0I1QixRQUFTLEVBQTFDLENBQUwsQ0FDRzZCLElBREgsQ0FDU0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFEakIsRUFFR0YsSUFGSCxDQUVTRyxJQUFELElBQVU7QUFDZDtBQUNBMUIsZUFBTyxDQUFDO0FBQ05DLFlBQUUsRUFBRXlCLElBQUksQ0FBQ3pCLEVBREg7QUFFTkMsZUFBSyxFQUFFd0IsSUFBSSxDQUFDeEIsS0FGTjtBQUdOQyxnQkFBTSxFQUFFdUIsSUFBSSxDQUFDRyxVQUhQO0FBSU56QixhQUFHLEVBQUVzQixJQUFJLENBQUN0QixHQUpKO0FBS05DLGNBQUksRUFBRXFCLElBQUksQ0FBQ3JCLElBTEw7QUFNTkMsaUJBQU8sRUFBRW9CLElBQUksQ0FBQ3BCLE9BTlI7QUFPTkMsY0FBSSxFQUFFbUIsSUFBSSxDQUFDbkIsSUFQTDtBQVFOQyxrQkFBUSxFQUFFa0IsSUFBSSxDQUFDbEIsUUFSVDtBQVNOQyxlQUFLLEVBQUVpQixJQUFJLENBQUNqQixLQVROO0FBVU5DLG1CQUFTLEVBQUVnQixJQUFJLENBQUNoQixTQVZWO0FBV05DLG1CQUFTLEVBQUVlLElBQUksQ0FBQ2YsU0FYVjtBQVlOQyxpQkFBTyxFQUFFYyxJQUFJLENBQUNJLGdCQVpSO0FBYU5DLGVBQUssRUFBRUwsSUFBSSxDQUFDTSxZQWJOO0FBY05uQixlQUFLLEVBQUUsR0FkRDtBQWVOb0Isa0JBQVEsRUFBRVAsSUFBSSxDQUFDTztBQWZULFNBQUQsQ0FBUDtBQWlCRCxPQXJCSDtBQXNCRDtBQUNGLEdBdENRLEVBc0NOLENBQUN2QyxRQUFELENBdENNLENBQVQ7QUF3Q0Esc0JBQ0UsOERBQUMsYUFBRDtBQUFlLE1BQUUsRUFBQyxTQUFsQjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFSyxJQUFJLENBQUNJLE1BQWY7QUFBdUIsU0FBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLFdBQUQ7QUFBYSxRQUFFLEVBQUMsU0FBaEI7QUFBQSw4QkFDRSw4REFBQyxRQUFEO0FBQUEsa0JBQVdKLElBQUksQ0FBQ007QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsU0FBRDtBQUFXLGNBQU0sRUFBQyxRQUFsQjtBQUEyQixZQUFJLEVBQUVOLElBQUksQ0FBQ2tDLFFBQXRDO0FBQUEsd0JBQ0lsQyxJQUFJLENBQUNHLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRSw4REFBQyxPQUFEO0FBQUEsa0JBQVVILElBQUksQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSw4REFBQyxTQUFEO0FBQVcsVUFBRSxFQUFDLFNBQWQ7QUFBQSxnQ0FDRSw4REFBQyxZQUFEO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHTCxJQUFJLENBQUNXLFNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UsOERBQUMsWUFBRDtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR1gsSUFBSSxDQUFDWSxTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdkLFVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBb0JFLDhEQUFDLGVBQUQ7QUFBaUIsVUFBRSxFQUFDLFNBQXBCO0FBQUEsZ0NBQ0UsOERBQUMsbUJBQUQ7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdFLElBQUksQ0FBQ08sT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSw4REFBQyxtQkFBRDtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR1AsSUFBSSxDQUFDUyxRQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLG1CQUFEO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHVCxJQUFJLENBQUNVLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBYUUsOERBQUMsbUJBQUQ7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxrQkFBTSxFQUFDLFFBQVY7QUFBbUIsZ0JBQUksRUFBRyxVQUFTVixJQUFJLENBQUNRLElBQUssRUFBN0M7QUFBQSxzQkFDR1IsSUFBSSxDQUFDUTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLGVBbUJFLDhEQUFDLG1CQUFEO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcsa0JBQU0sRUFBQyxRQUFWO0FBQW1CLGdCQUFJLEVBQUcsMkJBQTBCUixJQUFJLENBQUNhLE9BQVEsRUFBakU7QUFBQSw0QkFDSWIsSUFBSSxDQUFDYSxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWlERSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U0Q7QUFDQTtBQUVBLE1BQU1zQixXQUFXLEdBQUdyRCwyRUFBSDtBQUFBO0FBQUE7QUFBQSw0RkFBakI7QUFVQSxNQUFNc0QsV0FBVyxHQUFHdEQsc0VBQUg7QUFBQTtBQUFBO0FBQUEsOElBQWpCO0FBYUEsTUFBTXVELGNBQWMsR0FBR3ZELHNFQUFIO0FBQUE7QUFBQTtBQUFBLDZFQUFwQjtBQU9BLE1BQU13RCxjQUFjLEdBQUd4RCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwwREFBcEI7QUFNQSxNQUFNeUQscUJBQXFCLEdBQUd6RCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5R0FBM0I7QUFXQSxNQUFNMEQsZ0JBQWdCLEdBQUcxRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtTUFBdEI7QUFtQkEsTUFBTTJELElBQUksR0FBRzNELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJCQUFWO0FBSWUsU0FBUzRELE9BQVQsR0FBbUI7QUFDaEMsUUFBTTtBQUFBLE9BQUMvQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUM4QyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQi9DLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDZ0QsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JqRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7O0FBRUEsUUFBTWtCLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFdBQU8sSUFBSUMsZUFBSixDQUFvQkMsUUFBUSxDQUFDUixRQUFULENBQWtCUyxNQUF0QyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFJQyxLQUFLLEdBQUdMLFFBQVEsRUFBcEIsQ0FEcUIsQ0FFckI7O0FBQ0EsV0FBT0ssS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBVixDQUFQO0FBQ0QsR0FKRDs7QUFNQSxRQUFNMEIsY0FBYyxHQUFHLENBQUNDLGFBQUQsRUFBZ0JDLGNBQWhCLEtBQW1DO0FBQ3hELFFBQUlELGFBQWEsQ0FBQ0UsZ0JBQWQsR0FBaUNELGNBQWMsQ0FBQ0MsZ0JBQXBELEVBQ0UsT0FBTyxDQUFDLENBQVI7QUFFRixRQUFJRixhQUFhLENBQUNFLGdCQUFkLEdBQWlDRCxjQUFjLENBQUNDLGdCQUFwRCxFQUNFLE9BQU8sQ0FBUDtBQUNILEdBTkQ7O0FBUUE1QixrREFBUyxDQUFDLE1BQU07QUFDZDFCLGVBQVcsQ0FBQ3VCLFFBQUQsQ0FBWDs7QUFFQSxRQUFJLENBQUN4QixRQUFMLEVBQWUsQ0FDYjtBQUNELEtBRkQsTUFFTztBQUNMO0FBRUE0QixXQUFLLENBQUUsZ0NBQStCNUIsUUFBUyxRQUExQyxDQUFMLENBQ0c2QixJQURILENBQ1NDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBRGpCLEVBRUdGLElBRkgsQ0FFU0csSUFBRCxJQUFVO0FBQ2RBLFlBQUksQ0FBQ3dCLE9BQUwsQ0FBY25CLEtBQUQsSUFBVztBQUN0QlksaUJBQU8sQ0FDTEQsSUFBSSxDQUFDUyxJQUFMLENBQVU7QUFDUmxELGNBQUUsRUFBRThCLEtBQUssQ0FBQzlCLEVBREY7QUFFUmdDLG9CQUFRLEVBQUVGLEtBQUssQ0FBQ0UsUUFGUjtBQUdSbUIsdUJBQVcsRUFBRXJCLEtBQUssQ0FBQ3FCLFdBSFg7QUFJUi9DLGdCQUFJLEVBQUUwQixLQUFLLENBQUMxQixJQUpKO0FBS1JnRCxzQkFBVSxFQUFFdEIsS0FBSyxDQUFDc0IsVUFMVjtBQU1SSiw0QkFBZ0IsRUFBRWxCLEtBQUssQ0FBQ2tCO0FBTmhCLFdBQVYsQ0FESyxDQUFQO0FBVUQsU0FYRDtBQVlELE9BZkgsRUFnQkcxQixJQWhCSCxDQWdCUSxNQUNKc0IsVUFBVSxDQUFDUyxLQUFLLENBQUNDLElBQU4sQ0FBV2IsSUFBWCxFQUFpQmMsSUFBakIsQ0FBc0JWLGNBQXRCLEVBQXNDVyxPQUF0QyxFQUFELENBakJkO0FBbUJEOztBQUVEO0FBQ0QsR0E5QlEsRUE4Qk4sQ0FBQy9ELFFBQUQsQ0E5Qk0sQ0FBVDs7QUFnQ0EsUUFBTWdFLFdBQVcsR0FBSUMsU0FBRCxJQUFlO0FBQ2pDLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxVQUFNQyxXQUFXLEdBQUcsSUFBSUQsSUFBSixDQUFTRixTQUFULENBQXBCOztBQUNBLFVBQU1JLFNBQVMsR0FBSUMsSUFBRCxJQUFXQSxJQUFJLENBQUNDLFdBQUwsS0FBcUIsR0FBdEIsR0FBOEIsQ0FBQ0QsSUFBSSxDQUFDRSxRQUFMLEtBQWdCLENBQWpCLElBQXNCLEVBQXBELEdBQTJERixJQUFJLENBQUNHLE9BQUwsRUFBdkY7O0FBRUEsV0FBT0osU0FBUyxDQUFDSCxLQUFELENBQVQsR0FBbUJHLFNBQVMsQ0FBQ0QsV0FBRCxDQUFuQztBQUNILEdBTkM7O0FBUUEsc0JBQ0UsOERBQUMsV0FBRDtBQUFBLDJCQUNFLDhEQUFDLFdBQUQ7QUFBQSxnQkFDR2xCLE9BQU8sQ0FBQ2hCLE1BQVIsS0FBbUIsQ0FBbkIsZ0JBQ0MsOERBQUMsY0FBRDtBQUFBLGdDQUNFLDhEQUFDLGNBQUQ7QUFBZ0IsY0FBSSxFQUFDLEdBQXJCO0FBQUEscUJBQ0csR0FESCx1Q0FFaUMsR0FGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UsOERBQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsR0FZQ2dCLE9BQU8sQ0FBQ3dCLEdBQVIsQ0FBYUMsSUFBRCxpQkFDViw4REFBQyxjQUFEO0FBQUEsZ0NBQ0UsOERBQUMsY0FBRDtBQUFnQixnQkFBTSxFQUFDLFFBQXZCO0FBQWdDLGNBQUksRUFBRUEsSUFBSSxDQUFDcEMsUUFBM0M7QUFBQSxvQkFDR29DLElBQUksQ0FBQ2hFO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLDhEQUFDLHFCQUFEO0FBQUEsb0JBQXdCZ0UsSUFBSSxDQUFDakI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFLDhEQUFDLGdCQUFEO0FBQUEsa0NBQ0UsOERBQUMsSUFBRDtBQUFNLHFCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixPQUN5Q2lCLElBQUksQ0FBQ3BCLGdCQUQ5QyxFQUNnRSxHQURoRSx3QkFHRSw4REFBQyxJQUFEO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGNBR2tELEdBSGxELEVBSUksR0FBRVMsV0FBVyxDQUFDVyxJQUFJLENBQUNoQixVQUFOLENBQWtCLEdBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBLFNBQXFCZ0IsSUFBSSxDQUFDcEUsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRCxDOzs7Ozs7Ozs7OztBQzFLRCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBSZXBvc2l0b3JpZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcmllc1wiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9OYXZiYXJcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9maWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUNvbnRhaW5lcj5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8UmVwb3NpdG9yaWVzIC8+XHJcbiAgICA8L1Byb2ZpbGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBQcm9maWxlTmF2YmFyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjQyNTI7XHJcbiAgY29sb3I6ICNlY2VmZjQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjk4cHg7XHJcbiAgICBoZWlnaHQ6IDI5OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjk4cHg7XHJcbiAgICAgIGhlaWdodDogMjk4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZURhdGEgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyTmFtZSA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJMb2dpbiA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNlY2VmZjQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckJpbyA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAjODE5MGE1O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXN0eWxlOiB1bnNldDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyUmFua3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmNvbnN0IFVzZXJSYW5rSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VySW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VySW5mb3JtYXRpb25JdGVtID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNlY2VmZjQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5gO1xyXG5cclxuY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiAxOTJweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB3aWR0aDogMTkycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbW91bnRTdGFyLCBzZXRBbW91bnRTdGFyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBcImlkXCIsXHJcbiAgICBsb2dpbjogXCJAdXNlcm5hbWVcIixcclxuICAgIGF2YXRhcjogXCIvaW1hZ2UtcHJvZmlsZS5wbmdcIixcclxuICAgIGJpbzogXCJCaW9ncmFmaWEgZG8gVXN1w6FyaW9cIixcclxuICAgIG5hbWU6IFwiTm9tZSBkbyB1c3XDoXJpb1wiLFxyXG4gICAgY29tcGFueTogXCJFbXByZXNhXCIsXHJcbiAgICBibG9nOiBcIkJsb2dcIixcclxuICAgIGxvY2F0aW9uOiBcIkxvY2FsaXphw6fDo29cIixcclxuICAgIGVtYWlsOiBcImVtYWlsQHVzdWFyaW8uY29tXCIsXHJcbiAgICBmb2xsb3dlcnM6IFwiU2VndWlkb3Jlc1wiLFxyXG4gICAgZm9sbG93aW5nOiBcIlNlZ3VpbmRvXCIsXHJcbiAgICB0d2l0dGVyOiBcIlVzdcOhcmlvIGRvIFR3aXR0ZXJcIixcclxuICAgIHN0YXJzOiBcIjBcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXNlUXVlcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5ID0gdXNlUXVlcnkoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJOYW1lICsgXCItPiBFc3RlIMOpIG8gdXN1w6FyaW8gcHJvY3VyYWRvIVwiKTtcclxuICAgIHJldHVybiBxdWVyeS5nZXQoXCJ1c2VyTmFtZVwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZ2V0UXVlcnkpO1xyXG5cclxuICAgIGlmICghdXNlck5hbWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjYXJyZWdhbmRvLi4uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlck5hbWUgKyBcIiBDYXJyZWdvdSFcIik7XHJcblxyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJOYW1lfS9zdGFycmVkYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdGFyID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICBzZXRBbW91bnRTdGFyKHN0YXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyTmFtZX1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICBsb2dpbjogZGF0YS5sb2dpbixcclxuICAgICAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhcl91cmwsXHJcbiAgICAgICAgICAgIGJpbzogZGF0YS5iaW8sXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgY29tcGFueTogZGF0YS5jb21wYW55LFxyXG4gICAgICAgICAgICBibG9nOiBkYXRhLmJsb2csXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgZm9sbG93ZXJzOiBkYXRhLmZvbGxvd2VycyxcclxuICAgICAgICAgICAgZm9sbG93aW5nOiBkYXRhLmZvbGxvd2luZyxcclxuICAgICAgICAgICAgdHdpdHRlcjogZGF0YS50d2l0dGVyX3VzZXJuYW1lLFxyXG4gICAgICAgICAgICByZXBvczogZGF0YS5wdWJsaWNfcmVwb3MsXHJcbiAgICAgICAgICAgIHN0YXJzOiBcIjBcIixcclxuICAgICAgICAgICAgaHRtbF91cmw6IGRhdGEuaHRtbF91cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdXNlck5hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9maWxlTmF2YmFyIGFzPVwic2VjdGlvblwiPlxyXG4gICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGFsdD1cIlVzZXJcIiAvPlxyXG4gICAgICA8UHJvZmlsZURhdGEgYXM9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgPFVzZXJOYW1lPnt1c2VyLm5hbWV9PC9Vc2VyTmFtZT5cclxuICAgICAgICA8VXNlckxvZ2luIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3VzZXIuaHRtbF91cmx9PlxyXG4gICAgICAgICAgQHt1c2VyLmxvZ2lufVxyXG4gICAgICAgIDwvVXNlckxvZ2luPlxyXG4gICAgICAgIDxVc2VyQmlvPnt1c2VyLmJpb308L1VzZXJCaW8+XHJcbiAgICAgICAgPFVzZXJSYW5rcyBhcz1cInNlY3Rpb25cIj5cclxuICAgICAgICAgIDxVc2VyUmFua0l0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiPjwvaT5cclxuICAgICAgICAgICAge3VzZXIuZm9sbG93ZXJzfSBmb2xsb3dlcnNcclxuICAgICAgICAgIDwvVXNlclJhbmtJdGVtPlxyXG4gICAgICAgICAgPFVzZXJSYW5rSXRlbT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICB7dXNlci5mb2xsb3dpbmd9IGZvbGxvd2luZ1xyXG4gICAgICAgICAgPC9Vc2VyUmFua0l0ZW0+XHJcbiAgICAgICAgICA8VXNlclJhbmtJdGVtPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAge2Ftb3VudFN0YXJ9IHN0YXJzXHJcbiAgICAgICAgICA8L1VzZXJSYW5rSXRlbT5cclxuICAgICAgICA8L1VzZXJSYW5rcz5cclxuICAgICAgICA8VXNlckluZm9ybWF0aW9uIGFzPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1idWlsZGluZ1wiPjwvaT5cclxuICAgICAgICAgICAge3VzZXIuY29tcGFueX1cclxuICAgICAgICAgIDwvVXNlckluZm9ybWF0aW9uSXRlbT5cclxuICAgICAgICAgIDxVc2VySW5mb3JtYXRpb25JdGVtPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIHt1c2VyLmxvY2F0aW9ufVxyXG4gICAgICAgICAgPC9Vc2VySW5mb3JtYXRpb25JdGVtPlxyXG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAge3VzZXIuZW1haWx9XHJcbiAgICAgICAgICA8L1VzZXJJbmZvcm1hdGlvbkl0ZW0+XHJcbiAgICAgICAgICA8VXNlckluZm9ybWF0aW9uSXRlbT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwOi8vJHt1c2VyLmJsb2d9YH0+XHJcbiAgICAgICAgICAgICAge3VzZXIuYmxvZ31cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9Vc2VySW5mb3JtYXRpb25JdGVtPlxyXG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vJHt1c2VyLnR3aXR0ZXJ9YH0+XHJcbiAgICAgICAgICAgICAgQHt1c2VyLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvVXNlckluZm9ybWF0aW9uSXRlbT5cclxuICAgICAgICA8L1VzZXJJbmZvcm1hdGlvbj5cclxuICAgICAgPC9Qcm9maWxlRGF0YT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8QmFja0J1dHRvbj5Wb2x0YXI8L0JhY2tCdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvUHJvZmlsZU5hdmJhcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBQcm9maWxlQ2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW46IDEwcHggNjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAzNjdweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5Q2FyZCA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TmFtZSA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzYjQyNTI7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1heC13aWR0aDogNjgwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVwb3NpdG9yeVN0YXR1cyA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBjb2xvcjogIzgxOTBhNTtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIC5mYS1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb24gPSBzdHlsZWQuaWBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXBvLCBzZXRSZXBvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXJyUmVwbywgc2V0QXJyUmVwb10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHVzZVF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRRdWVyeSA9ICgpID0+IHtcclxuICAgIGxldCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyTmFtZSArIFwiLT4gRXN0ZSDDqSBvIHVzdcOhcmlvIHByb2N1cmFkbyFcIik7XHJcbiAgICByZXR1cm4gcXVlcnkuZ2V0KFwidXNlck5hbWVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3Rhck9yZGVuYXRpb24gPSAoZnJpc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pID0+IHtcclxuICAgIGlmIChmcmlzdFBvc2l0aW9uLnN0YXJnYXplcnNfY291bnQgPCBzZWNvbmRQb3NpdGlvbi5zdGFyZ2F6ZXJzX2NvdW50KVxyXG4gICAgICByZXR1cm4gLTE7XHJcblxyXG4gICAgaWYgKGZyaXN0UG9zaXRpb24uc3RhcmdhemVyc19jb3VudCA+IHNlY29uZFBvc2l0aW9uLnN0YXJnYXplcnNfY291bnQpXHJcbiAgICAgIHJldHVybiAxO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShnZXRRdWVyeSk7XHJcblxyXG4gICAgaWYgKCF1c2VyTmFtZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNhcnJlZ2FuZG8uLi5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyTmFtZSArIFwiIENhcnJlZ291IVwiKTtcclxuXHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlck5hbWV9L3JlcG9zYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLmZvckVhY2goKHJlcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlcG8oXHJcbiAgICAgICAgICAgICAgcmVwby5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiByZXBvcy5pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfdXJsOiByZXBvcy5odG1sX3VybCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXBvcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG5hbWU6IHJlcG9zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiByZXBvcy51cGRhdGVkX2F0LFxyXG4gICAgICAgICAgICAgICAgc3RhcmdhemVyc19jb3VudDogcmVwb3Muc3RhcmdhemVyc19jb3VudCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgc2V0QXJyUmVwbyhBcnJheS5mcm9tKHJlcG8pLnNvcnQoc3Rhck9yZGVuYXRpb24pLnJldmVyc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9LCBbdXNlck5hbWVdKTtcclxuXHJcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSAodXBkYXRlZEF0KSA9PiB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gbmV3IERhdGUodXBkYXRlZEF0KTtcclxuICAgIGNvbnN0IGNvdW50RGF5cyA9IChkYXRlKSA9PiAoZGF0ZS5nZXRGdWxsWWVhcigpICogMzY1KSArICgoZGF0ZS5nZXRNb250aCgpKzEpICogMzApICsgKGRhdGUuZ2V0RGF0ZSgpKVxyXG5cclxuICAgIHJldHVybiBjb3VudERheXModG9kYXkpIC0gY291bnREYXlzKHVwZGF0ZWREYXRlKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUNhcmQ+XHJcbiAgICAgIDxVbENvbnRhaW5lcj5cclxuICAgICAgICB7YXJyUmVwby5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8UmVwb3NpdG9yeUNhcmQ+XHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TmFtZSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBOZW5odW0gcmVwb3NpdMOzcmlvIGVuY29udHJhZG8ue1wiIFwifVxyXG4gICAgICAgICAgICA8L1JlcG9zaXRvcnlOYW1lPlxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIFByb3ZhdmVsbWVudGUgbyB1c3XDoXJpbyBuw6NvIHBvc3N1aSByZXBvc2l0w7NyaW9zIHDDumJsaWNvcyBvdSB2b2PDqlxyXG4gICAgICAgICAgICAgIHBlc3F1aXNvdSBwZWxvIHVzdcOhcmlvIGVycmFkby5cclxuICAgICAgICAgICAgPC9SZXBvc2l0b3J5RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1JlcG9zaXRvcnlDYXJkPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBhcnJSZXBvLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeUNhcmQga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8UmVwb3NpdG9yeU5hbWUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aXRlbS5odG1sX3VybH0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvUmVwb3NpdG9yeU5hbWU+XHJcbiAgICAgICAgICAgICAgPFJlcG9zaXRvcnlEZXNjcmlwdGlvbj57aXRlbS5kZXNjcmlwdGlvbn08L1JlcG9zaXRvcnlEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8UmVwb3NpdG9yeVN0YXR1cz5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9JY29uPiB7aXRlbS5zdGFyZ2F6ZXJzX2NvdW50fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHN0YXJzXHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlXCI+PC9JY29uPiBVcGRhdGVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2Ake2xhc3RVcGRhdGVkKGl0ZW0udXBkYXRlZF9hdCl9IGB9XHJcbiAgICAgICAgICAgICAgICBkYXlzIGFnb1xyXG4gICAgICAgICAgICAgIDwvUmVwb3NpdG9yeVN0YXR1cz5cclxuICAgICAgICAgICAgPC9SZXBvc2l0b3J5Q2FyZD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9VbENvbnRhaW5lcj5cclxuICAgIDwvUHJvZmlsZUNhcmQ+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==