"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0a46cca8f070\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/M2U3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBhNDZjY2E4ZjA3MFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/sidebar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/sidebar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CircleUserRound,LayoutDashboard,Settings,WalletCards!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js\");\n/* harmony import */ var _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CircleUserRound,LayoutDashboard,Settings,WalletCards!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/wallet-cards.js\");\n/* harmony import */ var _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CircleUserRound,LayoutDashboard,Settings,WalletCards!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-user-round.js\");\n/* harmony import */ var _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CircleUserRound,LayoutDashboard,Settings,WalletCards!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./src/components/sidebar/item.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst items = [\n    {\n        name: \"Dashboard\",\n        path: \"/\",\n        icon: _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        name: \"Github\",\n        path: \"/transaction\",\n        icon: GitBranch\n    },\n    {\n        name: \"BinaryDiff\",\n        path: \"/payment\",\n        icon: _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        name: \"Accounts\",\n        path: \"/accounts\",\n        icon: _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Settings\",\n        path: \"/settings\",\n        icon: _barrel_optimize_names_CircleUserRound_LayoutDashboard_Settings_WalletCards_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        items: [\n            {\n                name: \"General\",\n                path: \"/settings\"\n            },\n            {\n                name: \"Security\",\n                path: \"/settings/security\"\n            },\n            {\n                name: \"Notifications\",\n                path: \"/settings/notifications\"\n            }\n        ]\n    }\n];\nconst Sidebar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-10 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logo-expanded.png\",\n                    alt: \"Logo\",\n                    style: {\n                        height: \"80px\",\n                        width: \"auto\",\n                        margin: \"0 auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/srinjoydutta/Desktop/Fall2025/407/HorizonStuff/Horizon3-pipeline/sprint2frontend/src/components/sidebar/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-2\",\n                    children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/srinjoydutta/Desktop/Fall2025/407/HorizonStuff/Horizon3-pipeline/sprint2frontend/src/components/sidebar/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/srinjoydutta/Desktop/Fall2025/407/HorizonStuff/Horizon3-pipeline/sprint2frontend/src/components/sidebar/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/srinjoydutta/Desktop/Fall2025/407/HorizonStuff/Horizon3-pipeline/sprint2frontend/src/components/sidebar/index.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/srinjoydutta/Desktop/Fall2025/407/HorizonStuff/Horizon3-pipeline/sprint2frontend/src/components/sidebar/index.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBU3NCO0FBQ1c7QUFjakMsTUFBTUssUUFBd0I7SUFDNUI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1SLGdJQUFlQTtJQUN2QjtJQUNBO1FBQ0VNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNQztJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1MLGdJQUFXQTtJQUNuQjtJQUNBO1FBQ0VHLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNUCxnSUFBZUE7SUFDdkI7SUFDQTtRQUNFSyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTU4sZ0lBQVFBO1FBQ2RHLE9BQU87WUFDTDtnQkFDRUMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBO2dCQUNFRCxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7U0FDRDtJQUNIO0NBQ0Q7QUFFRCxNQUFNRyxVQUFVO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBb0JDLEtBQUk7b0JBQU9DLE9BQU87d0JBQUVDLFFBQVE7d0JBQVFDLE9BQU87d0JBQVFDLFFBQVE7b0JBQVM7Ozs7Ozs4QkFDL0YsOERBQUNSO29CQUFJQyxXQUFVOzhCQUNaUCxNQUFNZSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDbEIsNkNBQVdBOzRCQUFhaUIsTUFBTUE7MkJBQWJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUI7S0FiTVo7QUFlTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LnRzeD9kOGIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHtcbiAgR2l0Q29tbWl0VmVydGljYWwsXG4gIEx1Y2lkZUljb24sXG4gIExheW91dERhc2hib2FyZCxcbiAgQmFkZ2VEb2xsYXJTaWduLFxuICBDaXJjbGVVc2VyUm91bmQsXG4gIFNldHRpbmdzLFxuICBXYWxsZXRDYXJkcyxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuaW50ZXJmYWNlIElTaWRlYmFySXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBpY29uOiBMdWNpZGVJY29uO1xuICBpdGVtcz86IElTdWJJdGVtW107XG59XG5cbmludGVyZmFjZSBJU3ViSXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5jb25zdCBpdGVtczogSVNpZGViYXJJdGVtW10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkRhc2hib2FyZFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGljb246IExheW91dERhc2hib2FyZCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2l0aHViXCIsXG4gICAgcGF0aDogXCIvdHJhbnNhY3Rpb25cIixcbiAgICBpY29uOiBHaXRCcmFuY2gsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJpbmFyeURpZmZcIixcbiAgICBwYXRoOiBcIi9wYXltZW50XCIsXG4gICAgaWNvbjogV2FsbGV0Q2FyZHMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFjY291bnRzXCIsXG4gICAgcGF0aDogXCIvYWNjb3VudHNcIixcbiAgICBpY29uOiBDaXJjbGVVc2VyUm91bmQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNldHRpbmdzXCIsXG4gICAgcGF0aDogXCIvc2V0dGluZ3NcIixcbiAgICBpY29uOiBTZXR0aW5ncyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkdlbmVyYWxcIixcbiAgICAgICAgcGF0aDogXCIvc2V0dGluZ3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU2VjdXJpdHlcIixcbiAgICAgICAgcGF0aDogXCIvc2V0dGluZ3Mvc2VjdXJpdHlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICBwYXRoOiBcIi9zZXR0aW5ncy9ub3RpZmljYXRpb25zXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctNjQgYmctd2hpdGUgc2hhZG93LWxnIHotMTAgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xMCB3LWZ1bGxcIj5cbiAgICAgIDxpbWcgc3JjPVwiL2xvZ28tZXhwYW5kZWQucG5nXCJhbHQ9XCJMb2dvXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnYXV0bycsIG1hcmdpbjogJzAgYXV0bycgfX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTaWRlYmFySXRlbSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJMYXlvdXREYXNoYm9hcmQiLCJDaXJjbGVVc2VyUm91bmQiLCJTZXR0aW5ncyIsIldhbGxldENhcmRzIiwiU2lkZWJhckl0ZW0iLCJpdGVtcyIsIm5hbWUiLCJwYXRoIiwiaWNvbiIsIkdpdEJyYW5jaCIsIlNpZGViYXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar/index.tsx\n"));

/***/ })

});