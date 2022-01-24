"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _medicine_controller = _interopRequireDefault(require("../../config/controller/medicine_controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/all/:id', _medicine_controller["default"].findAllUser);
app.get('/my-medicine/:id', _medicine_controller["default"].findAllvete_id);
app.get('/search/:id', _medicine_controller["default"].findAll);
app.post('/create', _medicine_controller["default"].create);
app.put('/update/:id', _medicine_controller["default"].update);
app["delete"]('/delete/:id', _medicine_controller["default"].Delete);
var _default = app;
exports["default"] = _default;