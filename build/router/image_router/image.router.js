"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _image_controller = _interopRequireDefault(require("../../config/controller/image_controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/get/:id', _image_controller["default"].getImage);
app.post('/create', _image_controller["default"].create);
app["delete"]('/delete/:id', _image_controller["default"].Delete);
app.get('/getbib/:imageurl/:number', _image_controller["default"].image);
var _default = app;
exports["default"] = _default;