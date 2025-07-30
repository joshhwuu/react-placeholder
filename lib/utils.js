"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinClassNames = void 0;
var joinClassNames = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (c) { return c; }).join(' ');
};
exports.joinClassNames = joinClassNames;
