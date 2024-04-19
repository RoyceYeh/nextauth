"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer = function () {
    return (react_1["default"].createElement("div", { className: "pt-10 bg-[#f0f0f0]" },
        react_1["default"].createElement("div", { className: "container max-w-[1580px] mx-auto pr-4 pl-4 " },
            react_1["default"].createElement("div", { className: "content flex flex-col items-center justify-between lg:flex-row " },
                react_1["default"].createElement("a", { href: "#", className: "text-4xl font-bold mb-6" }, "My Site"),
                react_1["default"].createElement("ul", { className: "flex items-center gap-[5%]  justify-start max-w-[310px] w-[100%] flex-wrap lg:max-w-[100%] lg:w-[40%] lg:flex-nowrap lg:justify-end" },
                    react_1["default"].createElement("li", { className: "w-[45%] pl-5" },
                        react_1["default"].createElement("a", { href: "#", className: "text-lg flex text-[#333] font-bold  items-center\t gap-[6px] pb-1 " },
                            react_1["default"].createElement("span", { className: "text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent\t" }, "\u25CF"),
                            "NEWS")),
                    react_1["default"].createElement("li", { className: "w-[45%] pl-5" },
                        react_1["default"].createElement("a", { href: "#", className: "text-lg flex text-[#333] font-bold items-center\t gap-[6px] pb-1" },
                            react_1["default"].createElement("span", { className: "text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent\t" }, "\u25CF"),
                            "Works")),
                    react_1["default"].createElement("li", { className: "w-[45%] pl-5" },
                        react_1["default"].createElement("a", { href: "#", className: "text-lg flex text-[#333] font-bold items-center\t gap-[6px] pb-1" },
                            react_1["default"].createElement("span", { className: "text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent\t" }, "\u25CF"),
                            "About")),
                    react_1["default"].createElement("li", { className: "w-[45%] pl-5" },
                        react_1["default"].createElement("a", { href: "#", className: "text-lg flex text-[#333] font-bold  items-center gap-[6px] pb-1" },
                            react_1["default"].createElement("span", { className: "text-sm bg-gradient-to-br from-[#ef5d35] to-[#ffdd80] bg-clip-text text-transparent\t" }, "\u25CF"),
                            "Contact"))))),
        react_1["default"].createElement("div", { className: "copyright" },
            react_1["default"].createElement("div", { className: "container max-w-[1580px] mx-auto pr-4 pl-4 py-4 mt-5 " },
                react_1["default"].createElement("p", { className: "text-center\t text-sm color-[#333]" }, "Copyright \u00A9 2023 \u5091\u68EE\u5168\u7403\u6574\u5408\u884C\u92B7\u80A1\u4EFD\u6709\u9650\u516C\u53F8")))));
};
exports["default"] = Footer;
