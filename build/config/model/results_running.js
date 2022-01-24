"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var results_running = function results_running(sequelize, Sequelize) {
  var Tutorial = sequelize.define('results_running', {
    event_id: {
      type: Sequelize.INTEGER
    },
    event_name: {
      type: Sequelize.STRING
    },
    running_Time: {
      type: Sequelize.STRING
    },
    distance: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    }
  });
  return Tutorial;
};

var _default = results_running;
exports["default"] = _default;