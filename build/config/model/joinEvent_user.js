"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var medicine_model = function medicine_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('joinEvent_user', {
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
    last_distance: {
      type: Sequelize.INTEGER
    },
    reward_Info: {
      type: Sequelize.JSON
    },
    fullAddress: {
      type: Sequelize.JSON
    },
    tracking: {
      type: Sequelize.STRING
    },
    bib: {
      unique: true,
      type: Sequelize.STRING
    },
    biburl: {
      type: Sequelize.STRING
    },
    pay_status: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = medicine_model;
exports["default"] = _default;