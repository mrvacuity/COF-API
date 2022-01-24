"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _charge_controller = _interopRequireDefault(require("../../config/controller/charge_controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // app.get('/get/:id', image_controller.getImage);

app.post('/prompay', _charge_controller["default"].create);
app.post('/creditcard', _charge_controller["default"].createCard); // app.delete('/delete/:id', image_controller.Delete);

var _default = app;
exports["default"] = _default;