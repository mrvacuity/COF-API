"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var medicine_model = function medicine_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('event_package', {
    title: {
      type: Sequelize.STRING
    },
    distance: {
      type: Sequelize.INTEGER
    },
    startDate: {
      type: Sequelize.DATE
    },
    packageCost: {
      type: Sequelize.INTEGER
    },
    reward: {
      type: Sequelize.JSON
    }
  });
  return Tutorial;
};

var _default = medicine_model;
exports["default"] = _default;