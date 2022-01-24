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

var even_List = _db["default"].even_List;
var event_Info = _db["default"].event_Info;
var event_Reward = _db["default"].event_reward;
var Op = _db["default"].Sequelize.Op;
var joinEvent_user = _db["default"].joinEvent;
var bib_running = _db["default"].bib_running;
var results_running = _db["default"].results_running;

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
}; // Create and Save a new even_List


var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, title, description, startDate, expireDate, imageList, Type, packageList, hostId, imageEventList, bibList, ruleDetail, listBody, dataList, infoBody, dataInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, title = _req$body.title, description = _req$body.description, startDate = _req$body.startDate, expireDate = _req$body.expireDate, imageList = _req$body.imageList, Type = _req$body.Type, packageList = _req$body.packageList, hostId = _req$body.hostId, imageEventList = _req$body.imageEventList, bibList = _req$body.bibList, ruleDetail = _req$body.ruleDetail;
            console.log('Event Create >>>', req.body); // Create a even_List

            listBody = {
              title: title,
              description: description,
              startDate: startDate,
              expireDate: expireDate,
              imageList: {
                image: imageList
              },
              Type: Type
            };
            _context.next = 6;
            return even_List.create(listBody);

          case 6:
            dataList = _context.sent;
            infoBody = {
              event_id: dataList.id,
              packageList: {
                image: packageList
              },
              hostId: hostId,
              imageEventList: {
                image: imageEventList
              },
              bibList: {
                image: bibList
              },
              ruleDetail: ruleDetail
            };
            _context.next = 10;
            return event_Info.create(infoBody);

          case 10:
            dataInfo = _context.sent;
            // return data;
            res.json({
              data: _objectSpread(_objectSpread({}, dataList), dataInfo)
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred while creating the even_List.'
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addReward = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tutorial, dataList;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Validate request
            !req.body.title && res.status(400).send({
              message: 'Content can not be empty!'
            }); // Create a even_List

            tutorial = req.body;
            _context2.next = 5;
            return event_Reward.create(tutorial);

          case 5:
            dataList = _context2.sent;
            // return data;
            res.json({
              data: dataList
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              message: err.message || 'Some error occurred while creating the even_List.'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function addReward(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Retrieve all even_Lists from the database.


var findAll = /*#__PURE__*/function () {
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
              title: _defineProperty({}, Op.iLike, "%".concat(title, "%"))
            } : null; // var condition = title ? { email: title } : null;

            _context3.next = 7;
            return even_List.findAll({
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

  return function findAll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findAllvete_id = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var title, pageNo, condition, data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            title = req.params.id;
            pageNo = req.query.page;
            pageNo == undefined && res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.'
            });
            condition = title ? {
              veterinarian_id: title
            } : null; // var condition = title ? { email: title } : null;

            _context4.next = 7;
            return even_List.findAll({
              where: condition,
              offset: pageNo * 10,
              limit: 10
            });

          case 7:
            data = _context4.sent;
            res.json({
              data: data
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              message: _context4.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function findAllvete_id(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var findAllevent = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var data, numLength;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return even_List.findAll({
              offset: req.params.id * 10,
              limit: 10,
              order: [['createdAt', 'DESC']]
            });

          case 3:
            data = _context5.sent;
            _context5.next = 6;
            return even_List.findAll();

          case 6:
            numLength = _context5.sent;
            res.json({
              data: data,
              length: numLength.length
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).send({
              message: _context5.t0.message || 'Some error occurred while retrieving tutorials.'
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function findAllevent(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var getEvent = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var title, condition, data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            deleteValue(req);
            title = req.user.id;
            console.log('body >>>', req.body);
            condition = title ? {
              uid: title
            } : null;
            _context6.next = 7;
            return even_List.findAll({
              where: condition
            });

          case 7:
            data = _context6.sent;

            if (data.length > 0) {
              res.json(_objectSpread(_objectSpread({}, req.user), data[0]));
            }

            res.json(_objectSpread({}, req.user));
            _context6.next = 15;
            break;

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

  return function getEvent(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); // Update a even_List by the id in the request


var updateEvent = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, title, description, startDate, expireDate, imageList, averagePrice, Type, event_id, packageList, hostId, imageEventList, bibList, ruleDetail, listBody, infoBody, dataList, dataInfo;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, startDate = _req$body2.startDate, expireDate = _req$body2.expireDate, imageList = _req$body2.imageList, averagePrice = _req$body2.averagePrice, Type = _req$body2.Type, event_id = _req$body2.event_id, packageList = _req$body2.packageList, hostId = _req$body2.hostId, imageEventList = _req$body2.imageEventList, bibList = _req$body2.bibList, ruleDetail = _req$body2.ruleDetail;
            console.log('updateEvent', req.body); // Create a even_List

            listBody = {
              title: title,
              description: description,
              startDate: startDate,
              expireDate: expireDate,
              imageList: {
                image: imageList
              },
              averagePrice: averagePrice,
              Type: Type
            };
            infoBody = {
              event_id: event_id,
              packageList: {
                image: packageList
              },
              hostId: hostId,
              imageEventList: {
                image: imageEventList
              },
              bibList: {
                image: bibList
              },
              ruleDetail: ruleDetail
            };
            _context7.next = 8;
            return even_List.update(listBody, {
              where: {
                id: id
              }
            });

          case 8:
            dataList = _context7.sent;
            _context7.next = 11;
            return event_Info.update(infoBody, {
              where: {
                id: id
              }
            });

          case 11:
            dataInfo = _context7.sent;
            res.status(200).json(_objectSpread(_objectSpread({}, dataList), dataInfo));
            _context7.next = 18;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json({
              message: _context7.t0
            });

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 15]]);
  }));

  return function updateEvent(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var updateReward = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, update;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            console.log('body >>>', req.params);
            _context8.next = 5;
            return event_Reward.update(req.body, {
              where: {
                id: id
              }
            });

          case 5:
            update = _context8.sent;
            res.status(200).json(update);
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            res.status(500).json({
              message: _context8.t0
            });

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  }));

  return function updateReward(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var postjoinEvent = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var tutorial, _create;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context9.next = 5;
            return joinEvent_user.create(tutorial);

          case 5:
            _create = _context9.sent;
            res.status(200).json({
              data: _create
            });
            _context9.next = 12;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);
            res.status(500).json({
              message: _context9.t0
            });

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 9]]);
  }));

  return function postjoinEvent(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

var createbibrunning = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var tutorial, _create2;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context10.next = 5;
            return bib_running.create(tutorial);

          case 5:
            _create2 = _context10.sent;
            res.status(200).json({
              data: _create2
            });
            _context10.next = 12;
            break;

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](0);
            res.status(500).json({
              message: _context10.t0
            });

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 9]]);
  }));

  return function createbibrunning(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

var updatebibrunning = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var event_id, list, plus, plusnumber, infoBody, bib, listend;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            event_id = req.body.event_id;
            console.log('body >>>', req.body);
            _context11.next = 5;
            return bib_running.findAll({
              where: {
                event_id: event_id
              }
            });

          case 5:
            list = _context11.sent;
            console.log(list[0].dataValues.last_number);
            plus = list[0].dataValues.last_number;
            plusnumber = plus + 1;
            console.log(plusnumber);
            infoBody = {
              last_number: plusnumber
            };
            _context11.next = 13;
            return bib_running.update(infoBody, {
              where: {
                event_id: event_id
              }
            });

          case 13:
            bib = _context11.sent;
            _context11.next = 16;
            return bib_running.findAll({
              where: {
                event_id: event_id
              }
            });

          case 16:
            listend = _context11.sent;
            // const create = await bib_running.create(tutorial)
            res.status(200).json({
              data: listend
            });
            _context11.next = 23;
            break;

          case 20:
            _context11.prev = 20;
            _context11.t0 = _context11["catch"](0);
            res.status(500).json({
              message: _context11.t0
            });

          case 23:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 20]]);
  }));

  return function updatebibrunning(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

var resultsrunning = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var tutorial, _create3;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            tutorial = req.body;
            console.log('body >>>', req.body);
            _context12.next = 5;
            return results_running.create(tutorial);

          case 5:
            _create3 = _context12.sent;
            res.status(200).json({
              data: _create3
            });
            _context12.next = 12;
            break;

          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12["catch"](0);
            res.status(500).json({
              message: _context12.t0
            });

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 9]]);
  }));

  return function resultsrunning(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

var getmyEvent = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
    var id, _create4;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            id = req.params.id;
            console.log('body >>>', req.params.id);
            _context13.next = 5;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 5:
            _create4 = _context13.sent;
            res.status(200).json({
              data: _create4
            });
            _context13.next = 12;
            break;

          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](0);
            res.status(500).json({
              message: _context13.t0
            });

          case 12:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 9]]);
  }));

  return function getmyEvent(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

var updateresultsrunning = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
    var id, _create5;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            id = req.params.id;
            console.log('body >>>', req.params.id);
            _context14.next = 5;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 5:
            _create5 = _context14.sent;
            res.status(200).json({
              data: _create5
            });
            _context14.next = 12;
            break;

          case 9:
            _context14.prev = 9;
            _context14.t0 = _context14["catch"](0);
            res.status(500).json({
              message: _context14.t0
            });

          case 12:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 9]]);
  }));

  return function updateresultsrunning(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

var updateuserjoinEvent = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
    var id, distance, results_id, _create6, dis, discount, infoBody, info, update, updateresults, created;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            id = req.body.id;
            distance = req.body.distance;
            results_id = req.body.results;
            console.log('body >>>', req.body.id);
            _context15.next = 7;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 7:
            _create6 = _context15.sent;
            console.log("data>>>>>>>", _create6[0].dataValues.last_distance);
            dis = _create6[0].dataValues.last_distance;
            discount = dis + distance;
            console.log(discount);
            infoBody = {
              last_distance: discount
            };
            info = {
              status: "Accepted"
            };
            _context15.next = 16;
            return joinEvent_user.update(infoBody, {
              where: {
                uid: id
              }
            });

          case 16:
            update = _context15.sent;
            _context15.next = 19;
            return results_running.update(info, {
              where: {
                id: id
              }
            });

          case 19:
            updateresults = _context15.sent;
            _context15.next = 22;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 22:
            created = _context15.sent;
            res.status(200).json({
              data: created
            });
            _context15.next = 29;
            break;

          case 26:
            _context15.prev = 26;
            _context15.t0 = _context15["catch"](0);
            res.status(500).json({
              message: _context15.t0
            });

          case 29:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 26]]);
  }));

  return function updateuserjoinEvent(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

var updatebibuser = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res) {
    var id, bib, biburl, _create7, infoBody, update, created;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            id = req.body.id;
            bib = req.body.bib;
            biburl = req.body.biburl;
            console.log('body >>>', req.body.id);
            _context16.next = 7;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 7:
            _create7 = _context16.sent;
            console.log("data>>>>>>>", _create7[0].dataValues);
            infoBody = {
              bib: bib,
              biburl: biburl
            };
            _context16.next = 12;
            return joinEvent_user.update(infoBody, {
              where: {
                uid: id
              }
            });

          case 12:
            update = _context16.sent;
            _context16.next = 15;
            return joinEvent_user.findAll({
              where: {
                uid: id
              }
            });

          case 15:
            created = _context16.sent;
            res.status(200).json({
              data: created
            });
            _context16.next = 22;
            break;

          case 19:
            _context16.prev = 19;
            _context16.t0 = _context16["catch"](0);
            res.status(500).json({
              message: _context16.t0
            });

          case 22:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 19]]);
  }));

  return function updatebibuser(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  findAll: findAll,
  findAllevent: findAllevent,
  getEvent: getEvent,
  updateEvent: updateEvent,
  findAllvete_id: findAllvete_id,
  addReward: addReward,
  updateReward: updateReward,
  postjoinEvent: postjoinEvent,
  createbibrunning: createbibrunning,
  updatebibrunning: updatebibrunning,
  resultsrunning: resultsrunning,
  getmyEvent: getmyEvent,
  updateresultsrunning: updateresultsrunning,
  updateuserjoinEvent: updateuserjoinEvent,
  updatebibuser: updatebibuser
};
exports["default"] = _default;