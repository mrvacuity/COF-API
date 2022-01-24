"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _nodeHtmlToImage = _interopRequireDefault(require("node-html-to-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var image = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var imageurl, number, _image, _image2, _image3, _image4;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            imageurl = req.params.imageurl;
            number = req.params.number;

            if (!(number.length == 1)) {
              _context.next = 11;
              break;
            }

            _context.next = 6;
            return (0, _nodeHtmlToImage["default"])({
              html: "<html>\n      <head>\n      <title>Page Title</title>\n      <style>\n      body {\n      background-image: url(\"https://63a823ee9004.ngrok.io/api/image/get/{{imageSource}}\");\n      background-position: center;\n      background-size: cover;\n      }\n      .container {\n        position: relative;\n        text-align: center;\n      }\n      .center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, 50%);\n        font-size: 150px;\n      }\n      img { \n        width: 100%;\n        height: auto;\n        opacity: 0.3;\n      }\n      </style>\n      </head>\n      <body>\n      <div class=\"container\">\n      <h1 class=\"center\" style=\"font-family:verdana;\">000{{number}}</h1>\n      </div>\n      </body>\n      </html>",
              content: {
                imageSource: imageurl,
                number: parseInt(number)
              }
            });

          case 6:
            _image = _context.sent;
            res.writeHead(200, {
              'Content-Type': 'image/png'
            });
            res.end(_image, 'binary');
            _context.next = 33;
            break;

          case 11:
            if (!(number.length == 2)) {
              _context.next = 19;
              break;
            }

            _context.next = 14;
            return (0, _nodeHtmlToImage["default"])({
              html: "<html>\n      <head>\n      <title>Page Title</title>\n      <style>\n      body {\n      background-image: url(\"https://63a823ee9004.ngrok.io/api/image/get/{{imageSource}}\");\n      background-position: center;\n      background-size: cover;\n      }\n      .container {\n        position: relative;\n        text-align: center;\n      }\n      .center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, 50%);\n        font-size: 150px;\n      }\n      img { \n        width: 100%;\n        height: auto;\n        opacity: 0.3;\n      }\n      </style>\n      </head>\n      <body>\n      <div class=\"container\">\n      <h1 class=\"center\" style=\"font-family:verdana;\">00{{number}}</h1>\n      </div>\n      </body>\n      </html>",
              content: {
                imageSource: imageurl,
                number: parseInt(number)
              }
            });

          case 14:
            _image2 = _context.sent;
            res.writeHead(200, {
              'Content-Type': 'image/png'
            });
            res.end(_image2, 'binary');
            _context.next = 33;
            break;

          case 19:
            if (!(number.length == 3)) {
              _context.next = 27;
              break;
            }

            _context.next = 22;
            return (0, _nodeHtmlToImage["default"])({
              html: "<html>\n      <head>\n      <title>Page Title</title>\n      <style>\n      body {\n      background-image: url(\"https://63a823ee9004.ngrok.io/api/image/get/{{imageSource}}\");\n      background-position: center;\n      background-size: cover;\n      }\n      .container {\n        position: relative;\n        text-align: center;\n      }\n      .center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, 50%);\n        font-size: 150px;\n      }\n      img { \n        width: 100%;\n        height: auto;\n        opacity: 0.3;\n      }\n      </style>\n      </head>\n      <body>\n      <div class=\"container\">\n      <h1 class=\"center\" style=\"font-family:verdana;\">0{{number}}</h1>\n      </div>\n      </body>\n      </html>",
              content: {
                imageSource: imageurl,
                number: parseInt(number)
              }
            });

          case 22:
            _image3 = _context.sent;
            res.writeHead(200, {
              'Content-Type': 'image/png'
            });
            res.end(_image3, 'binary');
            _context.next = 33;
            break;

          case 27:
            if (!(number.length >= 4)) {
              _context.next = 33;
              break;
            }

            _context.next = 30;
            return (0, _nodeHtmlToImage["default"])({
              html: "<html>\n      <head>\n      <title>Page Title</title>\n      <style>\n      body {\n      background-image: url(\"https://63a823ee9004.ngrok.io/api/image/get/{{imageSource}}\");\n      background-position: center;\n      background-size: cover;\n      }\n      .container {\n        position: relative;\n        text-align: center;\n      }\n      .center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, 50%);\n        font-size: 150px;\n      }\n      img { \n        width: 100%;\n        height: auto;\n        opacity: 0.3;\n      }\n      </style>\n      </head>\n      <body>\n      <div class=\"container\">\n      <h1 class=\"center\" style=\"font-family:verdana;\">{{number}}</h1>\n      </div>\n      </body>\n      </html>",
              content: {
                imageSource: imageurl,
                number: parseInt(number)
              }
            });

          case 30:
            _image4 = _context.sent;
            res.writeHead(200, {
              'Content-Type': 'image/png'
            });
            res.end(_image4, 'binary');

          case 33:
            _context.next = 38;
            break;

          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              message: _context.t0.message || 'Some error occurred while creating the even_List.'
            });

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 35]]);
  }));

  return function image(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var date;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              date = new Date().getTime() + req.body.name;

              _fs["default"].writeFile("src/uploads/".concat(date, ".png"), req.body.base64, {
                encoding: 'base64'
              }, function (err, data) {
                if (err) {
                  res.json({
                    message: err
                  });
                } else {
                  res.json({
                    imageRefId: date
                  });
                }
              });
            } catch (error) {
              res.status(500).send({
                message: error.message || 'Some error occurred while creating the even_List.'
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getImage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              _fs["default"].readFile('src/uploads/' + req.params.id + '.png', function (err, data) {
                if (err) {
                  res.writeHead(404, {
                    'Content-Type': 'image/png'
                  });
                  res.end('err');
                } else {
                  res.writeHead(200, {
                    'Content-Type': 'image/png'
                  });
                  res.end(data);
                }
              });
            } catch (error) {
              res.json({
                message: 'err'
              });
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getImage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var Delete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              id = req.params.id + '.png';

              _fs["default"].unlinkSync('src/uploads/' + id);

              res.json({
                message: 'delete success'
              });
            } catch (err) {
              res.status(500).json({
                message: 'file not found'
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function Delete(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  getImage: getImage,
  Delete: Delete,
  image: image
};
exports["default"] = _default;