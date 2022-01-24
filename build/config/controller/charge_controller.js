"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _omise = _interopRequireDefault(require("omise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Tutorial = _db["default"].user_accounts;
var Op = _db["default"].Sequelize.Op;
var Omise = (0, _omise["default"])({
  publicKey: process.env.PUBLICKEYTEST,
  secretKey: process.env.SECRETKEYTEST,
  omiseVersion: process.env.OMISEVERSION
});

var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var source, charge;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Omise.sources.create({
              type: 'promptpay',
              amount: '10000',
              currency: 'THB'
            });

          case 3:
            source = _context.sent;
            _context.next = 6;
            return Omise.charges.create({
              amount: '10000',
              // 1,000 Baht
              currency: 'THB',
              source: source.id
            });

          case 6:
            charge = _context.sent;
            // console.log(charge);
            res.json(charge);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred while creating the Tutorial.'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createCard = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var token, charge;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Omise.tokens.create({
              card: {
                expiration_month: 2,
                expiration_year: 2022,
                name: 'Somchai Prasert',
                number: '4242424242424242',
                security_code: '123',
                city: 'New York',
                state: 'NY'
              }
            });

          case 3:
            token = _context2.sent;
            console.log(token);
            _context2.next = 7;
            return Omise.charges.create({
              amount: 100000,
              //1,000 baht
              currency: 'thb',
              card: token.id,
              description: 'Test charge a card',
              return_uri: 'https://www.race365.co.th/'
            });

          case 7:
            charge = _context2.sent;
            req.session.charge_id = charge.id;
            console.log('chargeOmise ==> ', charge); // charge status: https://www.omise.co/charging-cards#charge-status-(with-3-d-secure-enabled)

            if (!(charge.authorized === true)) {
              _context2.next = 14;
              break;
            }

            res.redirect(req.orderReceivedUrl);
            _context2.next = 19;
            break;

          case 14:
            if (!(charge.authorize_uri !== null)) {
              _context2.next = 18;
              break;
            }

            res.redirect(charge.authorize_uri);
            _context2.next = 19;
            break;

          case 18:
            throw new Error('Error detects!');

          case 19:
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 21]]);
  }));

  return function createCard(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  createCard: createCard
};
exports["default"] = _default;