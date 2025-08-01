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
var TextRow_1 = require("./TextRow");
var utils_1 = require("../utils");
var defaultStyles = {
    width: '100%'
};
var defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];
var TextBlock = function (_a) {
    var rows = _a.rows, lineSpacing = _a.lineSpacing, color = _a.color, style = _a.style, className = _a.className, _b = _a.widths, widths = _b === void 0 ? defaultWidths : _b;
    var getRowStyle = function (i) {
        return {
            maxHeight: "".concat(100 / (rows * 2 - 1), "%"),
            width: "".concat(widths[(i + widths.length) % widths.length], "%")
        };
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('text-block', className), style: __assign(__assign({}, defaultStyles), style) }, Array.apply(null, Array(rows)).map(function (_, i) { return (React.createElement(TextRow_1.default, { color: color, style: getRowStyle(i), lineSpacing: i !== 0 ? lineSpacing : 0, key: i })); })));
};
exports.default = TextBlock;
