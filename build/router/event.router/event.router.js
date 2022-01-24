"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _event_controller = _interopRequireDefault(require("../../config/controller/event_controller.js"));

var _jwt = require("../../config/jwt/jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/all/:id', _event_controller["default"].findAllevent);
app.get('/recent/:id', _event_controller["default"].findAllevent);
app.post('/create', _jwt.authenticateToken, _event_controller["default"].create);
app.post('/addreward', _jwt.authenticateToken, _event_controller["default"].addReward);
app.put('/update-event/:id', _jwt.authenticateToken, _event_controller["default"].updateEvent);
app.put('/update-reward/:id', _jwt.authenticateToken, _event_controller["default"].updateReward);
app.post('/userjoinEvent', _jwt.authenticateToken, _event_controller["default"].postjoinEvent);
app.post('/createbibrunning', _jwt.authenticateToken, _event_controller["default"].createbibrunning);
app.put('/updatebibrunning', _jwt.authenticateToken, _event_controller["default"].updatebibrunning);
app.post('/create-resultsrunning', _jwt.authenticateToken, _event_controller["default"].resultsrunning);
app.get('/getmyEvent/:id', _jwt.authenticateToken, _event_controller["default"].getmyEvent);
app.put('/update-resultsrunning', _jwt.authenticateToken, _event_controller["default"].updateresultsrunning);
app.put('/update-userjoinEvent', _jwt.authenticateToken, _event_controller["default"].updateuserjoinEvent);
app.put('/update-bibuser', _jwt.authenticateToken, _event_controller["default"].updatebibuser);
var _default = app;
exports["default"] = _default;