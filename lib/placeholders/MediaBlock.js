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
var TextBlock_1 = require("./TextBlock");
var RoundShape_1 = require("./RoundShape");
var utils_1 = require("../utils");
var defaultStyles = {
    display: 'flex'
};
var MediaBlock = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color, rows = _a.rows;
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('media-block', className), style: __assign(__assign({}, defaultStyles), style) },
        React.createElement(RoundShape_1.default, { color: color, style: { minHeight: 55, width: 55, minWidth: 55, marginRight: 10 } }),
        React.createElement(TextBlock_1.default, { color: color, rows: rows })));
};
exports.default = MediaBlock;
