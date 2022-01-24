"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blog_controller = _interopRequireDefault(require("../../config/controller/blog_controller.js"));

var _jwt = require("../../config/jwt/jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // app.post('/request-friend', authenticateToken, blog_controller.request);
// app.put('/accept-friend', authenticateToken, blog_controller.accept)

app.post('/createblog', _jwt.authenticateToken, _blog_controller["default"].createblog);
app.get('/getblog', _jwt.authenticateToken, _blog_controller["default"].getblog);
var _default = app;
exports["default"] = _default;