"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var user_model = function user_model(sequelize, Sequelize) {
  var collapseModel = sequelize.define('team_model', {
    Type: {
      type: Sequelize.STRING
    },
    image_team: {
      type: Sequelize.STRING
    },
    teamname: {
      unique: true,
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.DATE
    },
    expireDate: {
      type: Sequelize.DATE
    },
    description: {
      type: Sequelize.STRING
    },
    leader_id: {
      type: Sequelize.INTEGER
    },
    members: {
      type: Sequelize.JSON
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return collapseModel;
};

var _default = user_model;
exports["default"] = _default;