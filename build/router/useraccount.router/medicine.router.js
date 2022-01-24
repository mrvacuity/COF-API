"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _alluser_collapse = _interopRequireDefault(require("../../config/controller/alluser_collapse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // app.get('/all/:id', medicine.findAllUser);
// app.get('/my-medicine/:id', medicine.findAllvete_id);
// app.get('/search/:id', medicine.findAll);

app.post('/register', _alluser_collapse["default"].create);
app.post('/login', _alluser_collapse["default"].Login);
app.post('/forget', _alluser_collapse["default"].create); // app.post('/apple', alluser_collapse.createApple);

app.post('/facebook', _alluser_collapse["default"].createFacebook); // app.put('/update/:id', medicine.update);
// app.delete('/delete/:id', medicine.Delete);

var _default = app;
exports["default"] = _default;