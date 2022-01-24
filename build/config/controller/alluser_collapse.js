"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Tutorial = _db["default"].user_accounts;
var Op = _db["default"].Sequelize.Op;

function generateAccessToken(_x) {
  return _generateAccessToken.apply(this, arguments);
} // Create and Save a new Tutorial


function _generateAccessToken() {
  _generateAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(username) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _jsonwebtoken["default"].sign(username.dataValues, process.env.TOKEN_SECRET, {
              expiresIn: '1800s'
            });

          case 2:
            return _context11.abrupt("return", _context11.sent);

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _generateAccessToken.apply(this, arguments);
}

var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tutorial, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context.next = 5;
            return Tutorial.create(tutorial);

          case 5:
            data = _context.sent;
            // return data;
            res.status(200).json({
              data: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred while creating the Tutorial.'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function create(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var createFacebook = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var title, condition, research, token, tutorial, data, _token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            title = req.body.username;
            condition = title ? {
              username: title,
              Type: 'FACEBOOK'
            } : null;
            console.log('body >>>', req.body);
            _context2.next = 6;
            return Tutorial.findAll({
              where: condition
            });

          case 6:
            research = _context2.sent;

            if (!(research.length > 0)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return generateAccessToken(research[0]);

          case 10:
            token = _context2.sent;
            res.json(token);

          case 12:
            if (!(research.length == 0)) {
              _context2.next = 21;
              break;
            }

            tutorial = req.body;
            _context2.next = 16;
            return Tutorial.create(tutorial);

          case 16:
            data = _context2.sent;
            _context2.next = 19;
            return generateAccessToken(data);

          case 19:
            _token = _context2.sent;
            res.json(_token);

          case 21:
            _context2.next = 26;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: _context2.t0.message || 'Some error occurred while creating the Tutorial.'
            });

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 23]]);
  }));

  return function createFacebook(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var Login = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var title, password, condition, data, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            title = req.body.username;
            password = req.body.password;
            console.log('body >>>', req.body);
            condition = title ? {
              username: title,
              Type: 'EMAIL',
              password: password
            } : null;
            _context3.next = 7;
            return Tutorial.findAll({
              where: condition
            });

          case 7:
            data = _context3.sent;

            if (!(data.length > 0)) {
              _context3.next = 13;
              break;
            }

            _context3.next = 11;
            return generateAccessToken(data[0]);

          case 11:
            token = _context3.sent;
            // const findid = await Tutorial.findAll({ where: {username:title} })
            res.status(200).json(token);

          case 13:
            if (data.length == 0) {
              res.status(401).send('Username not Register.');
            } // res.status(500).send({
            //   message:
            //     err.message + process.env.TOKEN_SECRET ||
            //     'Some error occurred while retrieving tutorials.',
            // });


            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send(process.env.TOKEN_SECRET);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function Login(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}(); // Retrieve all Tutorials from the database.


var findAll = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            title = req.query.email;
            console.log('body >>>', req.body);
            condition = title ? {
              email: _defineProperty({}, Op.iLike, "%".concat(title, "%"))
            } : null; // var condition = title ? { email: title } : null;

            _context4.next = 6;
            return Tutorial.findAll({
              where: condition
            });

          case 6:
            data = _context4.sent;
            return _context4.abrupt("return", data);

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

  return function findAll(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

var findAllUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            // const title = req.query.email;
            // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;
            // var condition = title ? { email: title } : null;
            console.log('body >>>', req.body);
            _context5.next = 4;
            return Tutorial.findAll();

          case 4:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            res.status(500).send({
              message: _context5.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function findAllUser(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

var findOneEmail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              email: title
            } : null;
            _context6.next = 5;
            return Tutorial.findAll({
              where: condition
            });

          case 5:
            data = _context6.sent;

            if (!(data.length > 0)) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", data[0]);

          case 8:
            res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            res.status(500).send({
              message: _context6.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));

  return function findOneEmail(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

var findOneEmailAndSocket = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              email: title,
              socketID: req.query.socketID
            } : null;
            _context7.next = 5;
            return Tutorial.findAll({
              where: condition
            });

          case 5:
            data = _context7.sent;

            if (!(data.length > 0)) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", data[0]);

          case 8:
            res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            return _context7.abrupt("return", null);

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            res.status(500).send({
              message: _context7.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function findOneEmailAndSocket(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

var checkSocket = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              socketID: req.query.socketID
            } : null;
            _context8.next = 5;
            return Tutorial.findAll({
              where: condition
            });

          case 5:
            data = _context8.sent;

            if (!(data.length > 0)) {
              _context8.next = 8;
              break;
            }

            return _context8.abrupt("return", data);

          case 8:
            return _context8.abrupt("return", []);

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", []);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 11]]);
  }));

  return function checkSocket(_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}(); // Find a single Tutorial with an id


var findOne = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _id, data;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _id = req.params.id;
            _context9.next = 4;
            return Tutorial.findByPk(_id);

          case 4:
            data = _context9.sent;
            return _context9.abrupt("return", data);

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            res.status(500).send({
              message: 'Error retrieving Tutorial with id=' + id
            });

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 8]]);
  }));

  return function findOne(_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}(); // Update a Tutorial by the id in the request


var update = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var _id2, _update, response;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _id2 = req.params.id;
            _context10.next = 4;
            return Tutorial.update(req.body, {
              where: {
                id: _id2
              }
            });

          case 4:
            _update = _context10.sent;
            _context10.next = 7;
            return Tutorial.findByPk(_id2);

          case 7:
            response = _context10.sent;
            return _context10.abrupt("return", response);

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return");

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));

  return function update(_x20, _x21) {
    return _ref10.apply(this, arguments);
  };
}(); // Delete a Tutorial with the specified id in the request


var Delete = function Delete(req, res) {
  var id = req.params.id;
  Tutorial.destroy({
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: 'Tutorial was deleted successfully!'
      });
    } else {
      res.send({
        message: "Cannot delete Tutorial with id=".concat(id, ". Maybe Tutorial was not found!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: 'Could not delete Tutorial with id=' + id
    });
  });
}; // Delete all Tutorials from the database.


var deleteAll = function deleteAll(req, res) {
  Tutorial.destroy({
    where: {},
    truncate: false
  }).then(function (nums) {
    res.send({
      message: "".concat(nums, " Tutorials were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while removing all tutorials.'
    });
  });
}; // Find all published Tutorials


var findAllPublished = function findAllPublished(req, res) {
  Tutorial.findAll({
    where: {
      published: true
    }
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving tutorials.'
    });
  });
};

var _default = {
  create: create,
  findAll: findAll,
  findAllUser: findAllUser,
  findOneEmail: findOneEmail,
  findOneEmailAndSocket: findOneEmailAndSocket,
  findOne: findOne,
  Delete: Delete,
  deleteAll: deleteAll,
  findAllPublished: findAllPublished,
  update: update,
  checkSocket: checkSocket,
  Login: Login,
  createFacebook: createFacebook
};
exports["default"] = _default;