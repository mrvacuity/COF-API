"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var medicine_model = function medicine_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('eventList', {
    title: {
      unique: true,
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.DATE
    },
    expireDate: {
      type: Sequelize.DATE
    },
    imageList: {
      type: Sequelize.JSON
    },
    averagePrice: {
      type: Sequelize.STRING
    },
    Type: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = medicine_model;
exports["default"] = _default;