"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../utils");
var TextRow = function (_a) {
    var className = _a.className, maxHeight = _a.maxHeight, color = _a.color, _b = _a.lineSpacing, lineSpacing = _b === void 0 ? '0.7em' : _b, style = _a.style;
    var defaultStyles = {
        maxHeight: maxHeight,
        width: '100%',
        height: '1em',
        backgroundColor: color,
        marginTop: lineSpacing
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('text-row', className), style: __assign(__assign({}, defaultStyles), style) }));
};
exports.default = TextRow;
