"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var blog_model = function blog_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('blog_model', {
    title: {
      unique: true,
      type: Sequelize.STRING
    },
    "abstract": {
      type: Sequelize.STRING
    },
    info: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.DATE
    },
    expireDate: {
      type: Sequelize.DATE
    },
    imgabstract: {
      type: Sequelize.STRING
    },
    imageList: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = blog_model;
exports["default"] = _default;