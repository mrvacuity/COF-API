"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var user_model = function user_model(sequelize, Sequelize) {
  var collapseModel = sequelize.define('user_info', {
    Type: {
      type: Sequelize.STRING
    },
    uid: {
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    lineID: {
      type: Sequelize.STRING
    },
    fullAddress: {
      type: Sequelize.STRING
    },
    province: {
      type: Sequelize.STRING
    },
    district: {
      type: Sequelize.STRING
    },
    subDistrict: {
      type: Sequelize.STRING
    },
    postcode: {
      type: Sequelize.STRING
    }
  });
  return collapseModel;
};

var _default = user_model;
exports["default"] = _default;