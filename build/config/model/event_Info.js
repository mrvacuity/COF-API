"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var location_model = function location_model(sequelize, Sequelize) {
  var Tutorial = sequelize.define('event_Info', {
    event_id: {
      type: Sequelize.INTEGER
    },
    packageList: {
      type: Sequelize.JSON
    },
    hostId: {
      type: Sequelize.STRING
    },
    imageEventList: {
      type: Sequelize.JSON
    },
    bibList: {
      type: Sequelize.JSON
    },
    ruleDetail: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = location_model;
exports["default"] = _default;