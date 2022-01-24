"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var master_friend = function master_friend(sequelize, Sequelize) {
  var collapseModel = sequelize.define('master_friend', {
    uid: {
      type: Sequelize.INTEGER
    },
    friend_id: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return collapseModel;
};

var _default = master_friend;
exports["default"] = _default;