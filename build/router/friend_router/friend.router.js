"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _friend_collapse = _interopRequireDefault(require("../../config/controller/friend_collapse.js"));

var _jwt = require("../../config/jwt/jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.post('/request-friend', _jwt.authenticateToken, _friend_collapse["default"].request);
app.put('/accept-friend', _jwt.authenticateToken, _friend_collapse["default"].accept);
app["delete"]('/cancelled-friend', _jwt.authenticateToken, _friend_collapse["default"].cancelled);
app.get('/getMyfriend/:id', _jwt.authenticateToken, _friend_collapse["default"].getMyfriend);
var _default = app;
exports["default"] = _default;