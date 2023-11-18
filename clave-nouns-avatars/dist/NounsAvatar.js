"use strict";
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
exports.NounsAvatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("./utils");
const react_1 = require("react");
const NounsAvatar = (_a) => {
    var { size, address } = _a, rest = __rest(_a, ["size", "address"]);
    const [svg, setSvg] = (0, react_1.useState)(null);
    const seed = (0, react_1.useMemo)(() => {
        const parsedAddress = address.startsWith("0x") ? address.slice(2) : address;
        return (0, utils_1.getSeedForNounPart)(parsedAddress);
    }, [address]);
    (0, react_1.useEffect)(() => {
        if (seed == null) {
            return;
        }
        utils_1.nounsContract.generateSVGImage(seed).then((res) => {
            const svgString = atob(res);
            setSvg(svgString);
        });
    }, [seed]);
    (0, react_1.useEffect)(() => {
        const styleEl = document.createElement("style");
        styleEl.append(`#clave-nouns-avatars svg { width: inherit; height: inherit; border-radius: inherit }`);
        document.body.prepend(styleEl);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ id: "clave-nouns-avatars", style: { width: (0, utils_1.formatPx)(size), height: (0, utils_1.formatPx)(size) }, dangerouslySetInnerHTML: { __html: svg } }, rest)));
};
exports.NounsAvatar = NounsAvatar;
//# sourceMappingURL=NounsAvatar.js.map