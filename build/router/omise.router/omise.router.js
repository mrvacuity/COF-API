"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userInfo = _interopRequireDefault(require("../../config/controller/userInfo.js"));

var _jwt = require("../../config/jwt/jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.post('/webhook', _userInfo["default"].omise_Hook);
var _default = app;
exports["default"] = _default;