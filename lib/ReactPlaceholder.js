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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var placeholders = require("./placeholders");
var utils_1 = require("./utils");
var ReactPlaceholder = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, _d = _a.color, color = _d === void 0 ? '#CDCDCD' : _d, _e = _a.rows, rows = _e === void 0 ? 3 : _e, readyProp = _a.ready, firstLaunchOnly = _a.firstLaunchOnly, children = _a.children, className = _a.className, showLoadingAnimation = _a.showLoadingAnimation, customPlaceholder = _a.customPlaceholder, rest = __rest(_a, ["delay", "type", "color", "rows", "ready", "firstLaunchOnly", "children", "className", "showLoadingAnimation", "customPlaceholder"]);
    var _f = React.useState(readyProp), ready = _f[0], setReady = _f[1];
    var timeout = React.useRef(null);
    var getFiller = function () {
        var classes = showLoadingAnimation
            ? (0, utils_1.joinClassNames)('show-loading-animation', className)
            : className;
        if (customPlaceholder && React.isValidElement(customPlaceholder)) {
            var mergedCustomClasses = (0, utils_1.joinClassNames)(customPlaceholder.props.className, classes);
            return React.cloneElement(customPlaceholder, {
                className: mergedCustomClasses
            });
        }
        else if (customPlaceholder) {
            return customPlaceholder;
        }
        var Placeholder = placeholders[type];
        return (React.createElement(Placeholder, __assign({}, rest, { color: color, rows: rows, className: classes })));
    };
    React.useEffect(function () {
        if (!firstLaunchOnly && ready && !readyProp) {
            if (delay && delay > 0) {
                timeout.current = window.setTimeout(function () {
                    setReady(false);
                }, delay);
            }
            else {
                setReady(false);
            }
        }
        else if (readyProp) {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
            if (!ready) {
                setReady(true);
            }
        }
    }, [firstLaunchOnly, ready, readyProp, delay]);
    // clear the timeout when the component unmounts
    React.useEffect(function () { return function () {
        if (timeout.current) {
            window.clearTimeout(timeout.current);
        }
    }; }, []);
    // Casting - workaround for DefinitelyTyped/react issue with
    // FunctionComponents returning ReactElement, where they should be able to
    // return ReactNode. Casting also doesn't introduce another layer in the
    // component tree like another `<>children</>` workaround does.
    //
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
    // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return ready ? children : getFiller();
};
exports.default = ReactPlaceholder;
