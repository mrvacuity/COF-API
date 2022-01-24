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
var master_friend = _db["default"].master_friend;
var Op = _db["default"].Sequelize.Op;

var request = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tutorial, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Create a userInfo
            tutorial = req.body;
            _context.next = 4;
            return master_friend.create(tutorial);

          case 4:
            data = _context.sent;
            // console.log(data.dataValues.id);
            // return data;
            res.status(200).json({
              friend_request: data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred.'
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var accept = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, status, id, findupdatea, data, findupdate;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Create a userInfo
            _req$body = req.body, status = _req$body.status, id = _req$body.id;
            console.log('body >>>', req.body);
            _context2.next = 5;
            return master_friend.findByPk(id);

          case 5:
            findupdatea = _context2.sent;

            if (findupdatea == null) {
              res.status(400).json({
                message: 'unknow data'
              });
            }

            _context2.next = 9;
            return master_friend.update(req.body, {
              where: {
                id: id
              }
            });

          case 9:
            data = _context2.sent;
            _context2.next = 12;
            return master_friend.findByPk(id);

          case 12:
            findupdate = _context2.sent;
            // return data;
            res.status(200).json({
              friend_accept: findupdate
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: _context2.t0.message || 'Some error occurred.'
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function accept(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var cancelled = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, status, id, findupdate, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Create a userInfo
            _req$body2 = req.body, status = _req$body2.status, id = _req$body2.id;
            console.log('body >>>', req.body);
            _context3.next = 5;
            return master_friend.findByPk(id);

          case 5:
            findupdate = _context3.sent;
            console.log("<<<<<<<<<<< body >>>>>>>>>>>>>>", findupdate);

            if (findupdate == null) {
              res.status(400).json({
                message: 'unknow data'
              });
            }

            _context3.next = 10;
            return master_friend.destroy({
              where: {
                id: id
              }
            });

          case 10:
            data = _context3.sent;
            // return data;
            res.status(200).json({
              message: 'delete success'
            });
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              message: _context3.t0.message || 'Some error occurred.'
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function cancelled(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getMyfriend = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, findupdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // Create a userInfo
            id = req.params.id;
            console.log('body >>>', req.params);

            if (req.params.id == null) {
              res.status(400).json({
                message: 'unknow data'
              });
            }

            _context4.next = 6;
            return master_friend.findAll({
              where: {
                uid: id,
                status: "Accepted"
              }
            });

          case 6:
            findupdate = _context4.sent;
            // return data;
            res.status(200).json({
              data: findupdate
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              message: _context4.t0.message || 'Some error occurred.'
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function getMyfriend(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  request: request,
  accept: accept,
  cancelled: cancelled,
  getMyfriend: getMyfriend
};
exports["default"] = _default;