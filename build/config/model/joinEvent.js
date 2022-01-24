"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var medicine_model = function medicine_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('join_Event', {
    event_id: {
      type: Sequelize.INTEGER
    },
    Type: {
      type: Sequelize.STRING
    },
    uid: {
      type: Sequelize.INTEGER
    },
    total_distance: {
      type: Sequelize.INTEGER
    },
    pay_status: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = medicine_model;
exports["default"] = _default;