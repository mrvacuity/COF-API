"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var medicine_model = function medicine_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('running_bib', {
    event_id: {
      unique: true,
      type: Sequelize.INTEGER
    },
    last_number: {
      type: Sequelize.INTEGER
    },
    expireDate: {
      type: Sequelize.DATE
    },
    imageList: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = medicine_model;
exports["default"] = _default;