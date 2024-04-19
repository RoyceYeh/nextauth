'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("next-auth/react");
var navigation_1 = require("next/navigation");
function PostPage() {
    var _a = react_1.useSession({
        required: true,
        onUnauthenticated: function () {
            navigation_1.redirect('/api/auth/signin?callbackUrl=/client');
        }
    }), session = _a.data, status = _a.status;
    if (status === 'authenticated') {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "text-center pt-16 md:pt-32" },
                React.createElement("p", { className: "text-sm md:text-base text-green-500 font-bold" }, "04 AUGUST 2023"),
                React.createElement("h1", { className: "font-bold break-normal text-3xl md:text-5xl" }, "Welcome to Ghostwind CSS")),
            React.createElement("div", { className: "container w-full max-w-6xl mx-auto bg-white bg-cover bg-center mt-8 rounded bg-[url('https://source.unsplash.com/collection/1118905/')] pb-[32.5%]" }),
            React.createElement("div", { className: "max-w-3xl mx-auto" },
                React.createElement("div", { className: "mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal" },
                    React.createElement("div", { className: "bg-white relative top-0 -mt-32 p-5 sm:p-10" },
                        React.createElement("h1", { className: "text-gray-900 font-bold text-3xl mb-2" }, "Revenge of the Never Trumpers"),
                        React.createElement("p", { className: "text-base leading-8 my-5" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
                        React.createElement("h3", { className: "text-2xl font-bold my-5" }, "#1. What is Lorem Ipsum?"),
                        React.createElement("p", { className: "text-base leading-8 my-5" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
                        React.createElement("p", { className: "text-base leading-8 my-5" }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))));
    }
}
exports["default"] = PostPage;
