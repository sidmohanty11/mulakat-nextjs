webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/home/sidm/Documents/meet-nextjs/pages/index.js\",\n    _this = undefined;\n\n\n\nvar MEETUPS = [{\n  id: 'm1',\n  title: 'Our First meet!',\n  image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',\n  address: 'Our FAV spot!',\n  description: 'When I fell for her!'\n}, {\n  id: 'm2',\n  title: 'When I saw her face!',\n  image: 'https://images.unsplash.com/photo-1496433998859-da21e208bd42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',\n  address: 'Hills',\n  description: 'When I fell for her!'\n}, {\n  id: 'm3',\n  title: 'When universe collides!',\n  image: 'https://images.unsplash.com/photo-1542311222-5632cf0e6c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',\n  address: 'Beach',\n  description: 'When I fell for her!'\n}, {\n  id: 'm4',\n  title: 'We grew old together!',\n  image: 'https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',\n  address: 'Cafe',\n  description: 'When I fell for her!'\n}];\n\nvar HomePage = function HomePage(props) {\n  // const [meetups, setMeetups] = useState([]);\n  // useEffect(() => {\n  //     //fetch data\n  //     setMeetups();\n  // }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: MEETUPS\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxpQkFGWDtBQUdJQyxPQUFLLEVBQUUsZ0tBSFg7QUFJSUMsU0FBTyxFQUFFLGVBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBRFksRUFRWjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsc0JBRlg7QUFHSUMsT0FBSyxFQUFFLGdLQUhYO0FBSUlDLFNBQU8sRUFBRSxPQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJZLEVBZVo7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLHlCQUZYO0FBR0lDLE9BQUssRUFBRSw0SkFIWDtBQUlJQyxTQUFPLEVBQUUsT0FKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FmWSxFQXFCVDtBQUNDSixJQUFFLEVBQUUsSUFETDtBQUVDQyxPQUFLLEVBQUUsdUJBRlI7QUFHQ0MsT0FBSyxFQUFFLCtKQUhSO0FBSUNDLFNBQU8sRUFBRSxNQUpWO0FBS0NDLGFBQVcsRUFBRTtBQUxkLENBckJTLENBQWhCOztBQThCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDeEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHNCQUNJLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSCxDQVhEOztLQUFNTSxROztBQXNCU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcblxuY29uc3QgTUVFVFVQUyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnbTEnLFxuICAgICAgICB0aXRsZTogJ091ciBGaXJzdCBtZWV0IScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTMyNzk5MjI1NTAtMjUwYzIxMjliMTNhP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUwJnE9ODAnLFxuICAgICAgICBhZGRyZXNzOiAnT3VyIEZBViBzcG90IScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBJIGZlbGwgZm9yIGhlciEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTInLFxuICAgICAgICB0aXRsZTogJ1doZW4gSSBzYXcgaGVyIGZhY2UhJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NjQzMzk5ODg1OS1kYTIxZTIwOGJkNDI/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MCcsXG4gICAgICAgIGFkZHJlc3M6ICdIaWxscycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBJIGZlbGwgZm9yIGhlciEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTMnLFxuICAgICAgICB0aXRsZTogJ1doZW4gdW5pdmVyc2UgY29sbGlkZXMhJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MjMxMTIyMi01NjMyY2YwZTZjNTE/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ0JlYWNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIEkgZmVsbCBmb3IgaGVyISdcbiAgICB9LCB7XG4gICAgICAgIGlkOiAnbTQnLFxuICAgICAgICB0aXRsZTogJ1dlIGdyZXcgb2xkIHRvZ2V0aGVyIScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTYzNjIyNTg1OTUtMjhhMjVlY2UwNWY0P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MCcsXG4gICAgICAgIGFkZHJlc3M6ICdDYWZlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIEkgZmVsbCBmb3IgaGVyISdcbiAgICB9LFxuXTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICAvLyBjb25zdCBbbWVldHVwcywgc2V0TWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAvL2ZldGNoIGRhdGFcbiAgICAvLyAgICAgc2V0TWVldHVwcygpO1xuICAgIC8vIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e01FRVRVUFN9IC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgLy9mZXRjaCBkYXRhIGZyb20gZGF0YWJhc2VcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwczpNRUVUVVBTXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})