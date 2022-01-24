"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userInfo = _db["default"].userInfo;
var user_accounts = _db["default"].user_accounts;
var Op = _db["default"].Sequelize.Op;

var regularFormat = function regularFormat(req) {
  return {
    Type: 'REGULAR',
    uid: req.user.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    lineID: req.body.lineID,
    fullAddress: req.body.fullAddress,
    province: req.body.province,
    district: req.body.district,
    subDistrict: req.body.subDistrict,
    postcode: req.body.postcode
  };
};

var deleteValue = function deleteValue(req) {
  delete req.user.password;
  delete req.user.createdAt;
  delete req.user.updatedAt;
  delete req.user.iat;
  delete req.user.exp;
}; // Create and Save a new userInfo


var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tutorial, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Validate request
            !req.body.title && res.status(400).send({
              message: 'Content can not be empty!'
            }); // Create a userInfo

            tutorial = req.body;
            _context.next = 5;
            return userInfo.create(tutorial);

          case 5:
            data = _context.sent;
            // return data;
            res.json({
              data: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: err.message || 'Some error occurred while creating the userInfo.'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Retrieve all userInfos from the database.


var findAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _title, pageNo, condition, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _title = req.params.id;
            pageNo = req.query.page;
            pageNo == undefined && res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            condition = _title ? {
              title: _defineProperty({}, Op.iLike, "%".concat(_title, "%"))
            } : null; // var condition = title ? { email: title } : null;

            _context2.next = 7;
            return userInfo.findAll({
              where: condition,
              offset: pageNo * 10,
              limit: 10
            });

          case 7:
            data = _context2.sent;
            res.json({
              data: data
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: _context2.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findAllvete_id = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _title3, pageNo, condition, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _title3 = req.params.id;
            pageNo = req.query.page;
            pageNo == undefined && res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            condition = _title3 ? {
              veterinarian_id: _title3
            } : null; // var condition = title ? { email: title } : null;

            _context3.next = 7;
            return userInfo.findAll({
              where: condition,
              offset: pageNo * 10,
              limit: 10
            });

          case 7:
            data = _context3.sent;
            res.json({
              data: data
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              message: _context3.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function findAllvete_id(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findAllUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var data, numLength;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return userInfo.findAll({
              offset: req.params.id * 10,
              limit: 10
            });

          case 3:
            data = _context4.sent;
            _context4.next = 6;
            return userInfo.findAll();

          case 6:
            numLength = _context4.sent;
            res.json({
              data: data,
              length: numLength.length
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              message: _context4.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function findAllUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var getUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _title4, condition, data;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            deleteValue(req);
            _title4 = req.user.id;
            condition = _title4 ? {
              uid: _title4
            } : null;
            _context5.next = 6;
            return userInfo.findAll({
              where: condition
            });

          case 6:
            data = _context5.sent;

            if (data.length > 0) {
              res.json(_objectSpread(_objectSpread({}, req.user), data[0]));
            }

            res.json(_objectSpread({}, req.user));
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(500).send({
              message: _context5.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function getUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Update a userInfo by the id in the request


var updateUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, condition, data, _update, update;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            deleteValue(req);
            id = req.user.id;
            condition = title ? {
              uid: id
            } : null;
            _context6.next = 6;
            return userInfo.findAll({
              where: condition
            });

          case 6:
            data = _context6.sent;

            if (!(data.length > 0)) {
              _context6.next = 12;
              break;
            }

            _context6.next = 10;
            return userInfo.update(req.body, {
              where: {
                id: data[0].id
              }
            });

          case 10:
            _update = _context6.sent;
            res.json(_update);

          case 12:
            _context6.next = 14;
            return create(regularFormat(req));

          case 14:
            update = _context6.sent;
            res.json(update);
            _context6.next = 21;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return");

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 18]]);
  }));

  return function updateUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var omise_Hook = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _title5, charge, charge_id;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _title5 = 'Order received';
            charge = null;
            _context7.prev = 3;
            charge_id = req.session.charge_id;

            if (!(charge_id != null)) {
              _context7.next = 9;
              break;
            }

            _context7.next = 8;
            return omise.charges.retrieve(charge_id);

          case 8:
            charge = _context7.sent;

          case 9:
            res.render('order-received', {
              title: _title5,
              charge: charge
            });
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](3);
            next(_context7.t0);

          case 15:
            _context7.next = 20;
            break;

          case 17:
            _context7.prev = 17;
            _context7.t1 = _context7["catch"](0);
            return _context7.abrupt("return");

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 17], [3, 12]]);
  }));

  return function omise_Hook(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  findAll: findAll,
  findAllUser: findAllUser,
  getUser: getUser,
  updateUser: updateUser,
  findAllvete_id: findAllvete_id,
  omise_Hook: omise_Hook
};
exports["default"] = _default;