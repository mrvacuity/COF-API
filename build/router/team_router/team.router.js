"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _team_controller = _interopRequireDefault(require("../../config/controller/team_controller.js"));

var _jwt = require("../../config/jwt/jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.post('/create', _jwt.authenticateToken, _team_controller["default"].create);
app.put('/updatemembersteam', _jwt.authenticateToken, _team_controller["default"].update);
app.post('/invite-team', _jwt.authenticateToken, _team_controller["default"].inviteteam);
app.put('/accept-team', _jwt.authenticateToken, _team_controller["default"].acceptteam);
app.get('/getMyteam/:id', _jwt.authenticateToken, _team_controller["default"].getMyteam);
var _default = app;
exports["default"] = _default;