"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var master_team = function master_team(sequelize, Sequelize) {
  var collapseModel = sequelize.define('master_team', {
    team_id: {
      type: Sequelize.INTEGER
    },
    leader_id: {
      type: Sequelize.INTEGER
    },
    members: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return collapseModel;
};

var _default = master_team;
exports["default"] = _default;