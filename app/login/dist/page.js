'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("next-auth/react");
var navigation_1 = require("next/navigation");
var LoginPage = function () {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(''), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var handleSignIn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_2.signIn('credentials', {
                        username: username,
                        password: password,
                        redirect: false
                    })];
                case 1:
                    result = _a.sent();
                    if (result && !result.error) {
                        // 登入成功，處理重定向
                        console.log('成功');
                        router.push('/'); // 這裡示範跳轉到首頁
                    }
                    else {
                        // 登入失敗，顯示錯誤訊息
                        console.error('Sign in error:', result ? result.error : 'Unknown error');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "w-full max-w-md m-auto mt-32 h-screen" },
        react_1["default"].createElement("form", { className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" },
            react_1["default"].createElement("div", { className: " mt-3 mb-3 p-5 rounded-md border-0 text-white bg-neutral-700 font-bold flex justify-center\titems-center cursor-pointer\t", onClick: function () { return react_2.signIn('github'); } }, "singn in the github"),
            react_1["default"].createElement("div", { className: "mb-4" },
                react_1["default"].createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "username" }, "Username"),
                react_1["default"].createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "username", type: "text", placeholder: "Username", value: username, onChange: function (e) { return setUsername(e.target.value); } })),
            react_1["default"].createElement("div", { className: "mb-6" },
                react_1["default"].createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "password" }, "Password"),
                react_1["default"].createElement("input", { className: "shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline", id: "password", type: "password", placeholder: "*******", value: password, onChange: function (e) { return setPassword(e.target.value); } })),
            react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                react_1["default"].createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "button", onClick: handleSignIn }, "Sign In"),
                react_1["default"].createElement("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "#" }, "Forgot Password?")))));
};
exports["default"] = LoginPage;
