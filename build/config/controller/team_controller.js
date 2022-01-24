"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var team_model = _db["default"].team_model;
var master_team = _db["default"].master_team;
var user_accounts = _db["default"].user_accounts;
var Op = _db["default"].Sequelize.Op;

var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tutorial, username, countsub, finduser, countsubd, data, countminus, infoBody, upcount, finduserd;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Create a userInfo
            tutorial = req.body;
            username = req.body.username;
            countsub = req.body.countsub;
            console.log('body >>>', req.body);
            _context.next = 7;
            return user_accounts.findAll({
              where: {
                username: username
              }
            });

          case 7:
            finduser = _context.sent;
            console.log("data>>>>>>>>>>>>>>>>>", finduser[0].dataValues.subscribe);
            countsubd = finduser[0].dataValues.countsub;

            if (!(finduser[0].dataValues.subscribe == null)) {
              _context.next = 14;
              break;
            }

            res.status(400).json({
              message: "subscribe is not ready"
            });
            _context.next = 28;
            break;

          case 14:
            if (!(countsubd > 0 && [finduser[0].dataValues.subscribe == "silver" || finduser[0].dataValues.subscribe == "gold"])) {
              _context.next = 28;
              break;
            }

            _context.next = 17;
            return team_model.create(tutorial);

          case 17:
            data = _context.sent;
            countminus = countsubd - 1;
            infoBody = {
              countsub: countminus
            };
            console.log(countsub);
            _context.next = 23;
            return user_accounts.update(infoBody, {
              where: {
                username: username
              }
            });

          case 23:
            upcount = _context.sent;
            _context.next = 26;
            return user_accounts.findAll({
              where: {
                username: username
              }
            });

          case 26:
            finduserd = _context.sent;
            // return data;
            res.status(200).json({
              team_model: data,
              countsub: finduserd
            });

          case 28:
            res.status(400).json({
              message: "countsub or expiresub is not ready"
            });
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred.'
            });

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 31]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var update = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, members, find, mem, _update, ddd, infoBody, data, dataa;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.body.id;
            members = req.body.members;
            console.log('body >>>', req.body);
            _context2.next = 6;
            return team_model.findAll({
              where: {
                id: id
              }
            });

          case 6:
            find = _context2.sent;
            console.log(find[0].dataValues.members);
            mem = find[0].dataValues.members;
            console.log(mem.length);

            if (!(mem.length <= 4)) {
              _context2.next = 24;
              break;
            }

            _update = {
              user: members
            };
            ddd = mem.concat(_update);
            console.log(ddd);
            infoBody = {
              members: ddd
            };
            _context2.next = 17;
            return team_model.update(infoBody, {
              where: {
                id: id
              }
            });

          case 17:
            data = _context2.sent;
            _context2.next = 20;
            return team_model.findAll({
              where: {
                id: id
              }
            });

          case 20:
            dataa = _context2.sent;
            res.status(200).json({
              data: dataa
            });
            _context2.next = 25;
            break;

          case 24:
            res.status(400).json({
              team: "Some error occurred."
            });

          case 25:
            _context2.next = 30;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: _context2.t0.message || 'Some error occurred.'
            });

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 27]]);
  }));

  return function update(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var inviteteam = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var tutorial, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Create a userInfo
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context3.next = 5;
            return master_team.create(tutorial);

          case 5:
            data = _context3.sent;
            // console.log(data.dataValues.id);
            // return data;
            res.status(200).json({
              master_team: data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              message: _context3.t0.message || 'Some error occurred.'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function inviteteam(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var acceptteam = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, id, status, data, findmaster_team;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // Create a userInfo
            _req$body = req.body, id = _req$body.id, status = _req$body.status;
            console.log('body >>>', req.body);
            _context4.next = 5;
            return master_team.update(req.body, {
              where: {
                id: id
              }
            });

          case 5:
            data = _context4.sent;
            _context4.next = 8;
            return master_team.findAll({
              where: {
                id: id
              }
            });

          case 8:
            findmaster_team = _context4.sent;
            // return data;
            res.status(200).json({
              data: findmaster_team
            });
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              message: _context4.t0.message || 'Some error occurred.'
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function acceptteam(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var getMyteam = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _create, createed;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            console.log('body >>>', req.params.id);
            _context5.next = 5;
            return master_team.findAll({
              where: {
                leader_id: id
              }
            });

          case 5:
            _create = _context5.sent;
            console.log("data>>>>>>>", _create);

            if (_create.length == 0) {
              res.status(400).json({
                message: "data is not ready"
              });
            }

            _context5.next = 10;
            return master_team.findAll({
              where: {
                leader_id: id,
                status: "Accepted"
              }
            });

          case 10:
            createed = _context5.sent;
            res.status(200).json({
              data: createed
            });
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));

  return function getMyteam(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  update: update,
  inviteteam: inviteteam,
  acceptteam: acceptteam,
  getMyteam: getMyteam
};
exports["default"] = _default;