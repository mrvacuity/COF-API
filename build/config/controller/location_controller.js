"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Location = _db["default"].location;
var Op = _db["default"].Sequelize.Op; // Create and Save a new Location

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
            }); // Create a Location

            tutorial = req.body;
            _context.next = 5;
            return Location.create(tutorial);

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
              message: err.message || 'Some error occurred while creating the Location.'
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
}(); // Retrieve all Locations from the database.


var findAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var title, pageNo, condition, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            title = req.params.id;
            pageNo = req.query.page;
            pageNo == undefined && res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            condition = title ? {
              title: _defineProperty({}, Op.iLike, "%".concat(title, "%"))
            } : null; // var condition = title ? { email: title } : null;

            _context2.next = 7;
            return Location.findAll({
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
    var title, pageNo, condition, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            title = req.params.id;
            pageNo = req.query.page;
            pageNo == undefined && res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            condition = title ? {
              veterinarian_id: title
            } : null; // var condition = title ? { email: title } : null;

            _context3.next = 7;
            return Location.findAll({
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
            return Location.findAll({
              offset: req.params.id * 10,
              limit: 10
            });

          case 3:
            data = _context4.sent;
            _context4.next = 6;
            return Location.findAll();

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

var findOneEmail = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              email: title
            } : null;
            _context5.next = 5;
            return Location.findAll({
              where: condition
            });

          case 5:
            data = _context5.sent;

            if (!(data.length > 0)) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", data[0]);

          case 8:
            res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
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

  return function findOneEmail(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var findOneEmailAndSocket = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              email: title,
              socketID: req.query.socketID
            } : null;
            _context6.next = 5;
            return Location.findAll({
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
            return _context6.abrupt("return", null);

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            res.status(500).send({
              message: _context6.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function findOneEmailAndSocket(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var checkSocket = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

            condition = title ? {
              socketID: req.query.socketID
            } : null;
            _context7.next = 5;
            return Location.findAll({
              where: condition
            });

          case 5:
            data = _context7.sent;

            if (!(data.length > 0)) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", data);

          case 8:
            return _context7.abrupt("return", []);

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", []);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function checkSocket(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); // Find a single Location with an id


var findOne = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _id, data;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _id = req.params.id;
            _context8.next = 4;
            return Location.findByPk(_id);

          case 4:
            data = _context8.sent;
            return _context8.abrupt("return", data);

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            res.status(500).send({
              message: 'Error retrieving Location with id=' + id
            });

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));

  return function findOne(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); // Update a Location by the id in the request


var update = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _id2, _update, response;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _id2 = req.params.id;
            _context9.next = 4;
            return Location.update(req.body, {
              where: {
                id: _id2
              }
            });

          case 4:
            _update = _context9.sent;
            _context9.next = 7;
            return Location.findByPk(_id2);

          case 7:
            response = _context9.sent;
            res.json({
              data: response
            });
            _context9.next = 14;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            return _context9.abrupt("return");

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));

  return function update(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); // Delete a Location with the specified id in the request


var Delete = function Delete(req, res) {
  var id = req.params.id;
  Location.destroy({
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: 'Location was deleted successfully!'
      });
    } else {
      res.send({
        message: "Cannot delete Location with id=".concat(id, ". Maybe Location was not found!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: 'Could not delete Location with id=' + id
    });
  });
}; // Delete all Locations from the database.


var deleteAll = function deleteAll(req, res) {
  Location.destroy({
    where: {},
    truncate: false
  }).then(function (nums) {
    res.send({
      message: "".concat(nums, " Locations were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while removing all tutorials.'
    });
  });
}; // Find all published Locations


var findAllPublished = function findAllPublished(req, res) {
  Location.findAll({
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
  findAllvete_id: findAllvete_id
};
exports["default"] = _default;