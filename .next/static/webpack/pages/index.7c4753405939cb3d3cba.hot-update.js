webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/home/sidm/Documents/meet-nextjs/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar MEETUPS = [{\n  id: 'm1',\n  title: 'Our First meet!',\n  image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',\n  address: 'Our FAV spot!',\n  description: 'When I fell for her!'\n}, {\n  id: 'm2',\n  title: 'When I saw her face!',\n  image: 'https://images.unsplash.com/photo-1496433998859-da21e208bd42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',\n  address: 'Hills',\n  description: 'When I fell for her!'\n}, {\n  id: 'm3',\n  title: 'When universe collides!',\n  image: 'https://images.unsplash.com/photo-1542311222-5632cf0e6c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',\n  address: 'Beach',\n  description: 'When I fell for her!'\n}, {\n  id: 'm4',\n  title: 'We grew old together!',\n  image: 'https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',\n  address: 'Cafe',\n  description: 'When I fell for her!'\n}];\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      meetups = _useState[0],\n      setMeetups = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setMeetups();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: MEETUPS\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(HomePage, \"u0Xp+L4X3Modqy/8gJIQFYKfdYQ=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIm1lZXR1cHMiLCJzZXRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ1o7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGlCQUZYO0FBR0lDLE9BQUssRUFBRSxnS0FIWDtBQUlJQyxTQUFPLEVBQUUsZUFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEWSxFQVFaO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxzQkFGWDtBQUdJQyxPQUFLLEVBQUUsZ0tBSFg7QUFJSUMsU0FBTyxFQUFFLE9BSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUlksRUFlWjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUseUJBRlg7QUFHSUMsT0FBSyxFQUFFLDRKQUhYO0FBSUlDLFNBQU8sRUFBRSxPQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZZLEVBcUJUO0FBQ0NKLElBQUUsRUFBRSxJQURMO0FBRUNDLE9BQUssRUFBRSx1QkFGUjtBQUdDQyxPQUFLLEVBQUUsK0pBSFI7QUFJQ0MsU0FBTyxFQUFFLE1BSlY7QUFLQ0MsYUFBVyxFQUFFO0FBTGQsQ0FyQlMsQ0FBaEI7O0FBOEJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDWkMsT0FEWTtBQUFBLE1BQ0hDLFVBREc7O0FBR25CQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsY0FBVTtBQUNiLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSSxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBR0gsQ0FWRDs7R0FBTU0sUTs7S0FBQUEsUTtBQVlTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xuXG5jb25zdCBNRUVUVVBTID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdtMScsXG4gICAgICAgIHRpdGxlOiAnT3VyIEZpcnN0IG1lZXQhJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzI3OTkyMjU1MC0yNTBjMjEyOWIxM2E/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MCcsXG4gICAgICAgIGFkZHJlc3M6ICdPdXIgRkFWIHNwb3QhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIEkgZmVsbCBmb3IgaGVyISdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMicsXG4gICAgICAgIHRpdGxlOiAnV2hlbiBJIHNhdyBoZXIgZmFjZSEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk2NDMzOTk4ODU5LWRhMjFlMjA4YmQ0Mj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ0hpbGxzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIEkgZmVsbCBmb3IgaGVyISdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMycsXG4gICAgICAgIHRpdGxlOiAnV2hlbiB1bml2ZXJzZSBjb2xsaWRlcyEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyMzExMjIyLTU2MzJjZjBlNmM1MT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9ODAnLFxuICAgICAgICBhZGRyZXNzOiAnQmVhY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZW4gSSBmZWxsIGZvciBoZXIhJ1xuICAgIH0sIHtcbiAgICAgICAgaWQ6ICdtNCcsXG4gICAgICAgIHRpdGxlOiAnV2UgZ3JldyBvbGQgdG9nZXRoZXIhJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNjM2MjI1ODU5NS0yOGEyNWVjZTA1ZjQ/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ0NhZmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doZW4gSSBmZWxsIGZvciBoZXIhJ1xuICAgIH0sXG5dO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVldHVwcywgc2V0TWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRNZWV0dXBzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17TUVFVFVQU30gLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})