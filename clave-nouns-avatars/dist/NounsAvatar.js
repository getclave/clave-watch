"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsAvatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("./utils");
const react_1 = require("react");
const NounsAvatar = ({ size, address }) => {
    const [svg, setSvg] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        utils_1.nounsContract
            .generateSVGImage([1, 10, 3, 9, 1])
            .then((res) => {
            setSvg(atob(res));
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { style: { width: "120px", height: "120px" }, dangerouslySetInnerHTML: { __html: svg } }));
};
exports.NounsAvatar = NounsAvatar;
//# sourceMappingURL=NounsAvatar.js.map