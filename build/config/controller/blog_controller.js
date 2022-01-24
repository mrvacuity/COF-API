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
var blog_model = _db["default"].blog_model;
var Op = _db["default"].Sequelize.Op;

var createblog = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tutorial, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Create a userInfo
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context.next = 5;
            return blog_model.create(tutorial);

          case 5:
            data = _context.sent;
            // console.log(data.dataValues.id);
            // return data;
            res.status(200).json({
              blog: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred.'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createblog(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getblog = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return blog_model.findAll();

          case 3:
            data = _context2.sent;
            res.status(200).json({
              blog: data
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: _context2.t0.message || 'Some error occurred.'
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getblog(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  createblog: createblog,
  getblog: getblog
};
exports["default"] = _default;