"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var AuthLinks_1 = require("../AuthLinks/AuthLinks");
function Navbar() {
    return (React.createElement("header", { className: "lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md" },
        React.createElement("div", { className: "flex-1 flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", className: "text-xl" }, "My Site")),
        React.createElement("label", { htmlFor: "menu-toggle", className: "pointer-cursor md:hidden block" },
            React.createElement("svg", { className: "fill-current text-gray-900", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" },
                React.createElement("title", null, "menu"),
                React.createElement("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }))),
        React.createElement("input", { className: "hidden", type: "checkbox", id: "menu-toggle" }),
        React.createElement("div", { className: "hidden md:flex md:items-center md:w-auto w-full", id: "menu" },
            React.createElement("nav", null,
                React.createElement("ul", { className: "md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0" },
                    React.createElement("li", { className: "md:p-4 py-3 px-0 block" },
                        React.createElement(link_1["default"], { href: "/" }, "Home")),
                    React.createElement("li", { className: "md:p-4 py-3 px-0 block" },
                        React.createElement(link_1["default"], { href: "/profile" }, "Profile")),
                    React.createElement("li", { className: "md:p-4 py-3 px-0 block" },
                        React.createElement(link_1["default"], { href: "/post" }, "Post")),
                    React.createElement("li", { className: "md:p-4 py-3 px-0 block" },
                        React.createElement(link_1["default"], { href: "/news" }, "News")),
                    React.createElement("li", { className: "md:p-4 py-3 px-0 block" },
                        React.createElement(AuthLinks_1["default"], null)))))));
}
exports["default"] = Navbar;
