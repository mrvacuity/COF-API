// const pkg = require("pg");
import dotenv from "dotenv";
import Sequelize from "sequelize";
import customerModel from "./model/user.model.js";
import bannerModel from "./model/like.js";
import component_model from "./model/component_model.js";
import comment_model from "./model/comment_model.js";

import feed_model from "./model/feed_model.js";
import history_model from "./model/history_model.js";
import lesson from "./model/lesson_model.js";
import report_model from "./model/report_model.js";
import score_model from "./model/score_model.js";
import test_model from "./model/test_model.js";
import fs from "fs";
// 062 791 7111
import path from "path";
const __dirname = path.resolve();
const rdsCa = fs.readFileSync(__dirname + "/ca-certificate.crt");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.SQ_DIAL,
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: rdsCa,
      },
    },
  }
);
console.log(process.env);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lesson = lesson(sequelize, Sequelize);
db.component_model = component_model(sequelize, Sequelize);
db.bannerModel = bannerModel(sequelize, Sequelize);
db.comment_model = comment_model(sequelize, Sequelize);
db.customerModel = customerModel(sequelize, Sequelize);
db.feed_model = feed_model(sequelize, Sequelize);
db.history_model = history_model(sequelize, Sequelize);
db.report_model = report_model(sequelize, Sequelize);
db.score_model = score_model(sequelize, Sequelize);
db.test_model = test_model(sequelize, Sequelize);

db.test_model.belongsTo(db.lesson, {
  as: "test_model",
  foreignKey: "lesson_id",
});

db.lesson.hasOne(db.test_model, {
  as: "test_model",
  foreignKey: "lesson_id",
});

db.component_model.belongsTo(db.lesson, {
  as: "lesson",
  foreignKey: "lesson_id",
});

db.lesson.hasMany(db.component_model, {
  as: "lesson",
  foreignKey: "lesson_id",
});

db.comment_model.belongsTo(db.feed_model, {
  as: "comment_model",
  foreignKey: "feed_id",
});

db.feed_model.hasMany(db.comment_model, {
  as: "comment_model",
  foreignKey: "feed_id",
});

db.feed_model.belongsTo(db.customerModel, {
  as: "user_model",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.feed_model, {
  as: "user_model",
  foreignKey: "uid",
});

db.history_model.belongsTo(db.customerModel, {
  as: "history_model",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.history_model, {
  as: "history_model",
  foreignKey: "uid",
});

db.report_model.belongsTo(db.customerModel, {
  as: "report_model",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.report_model, {
  as: "report_model",
  foreignKey: "uid",
});

db.score_model.belongsTo(db.lesson, {
  as: "test_models",
  foreignKey: "lesson_id",
});

db.lesson.hasOne(db.score_model, {
  as: "test_models",
  foreignKey: "lesson_id",
});

db.score_model.belongsTo(db.customerModel, {
  as: "score_model",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.score_model, {
  as: "score_model",
  foreignKey: "uid",
});

db.bannerModel.belongsTo(db.customerModel, {
  as: "like_model",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.bannerModel, {
  as: "like_model",
  foreignKey: "uid",
});

db.comment_model.belongsTo(db.customerModel, {
  as: "comment_models",
  foreignKey: "uid",
});

db.customerModel.hasOne(db.comment_model, {
  as: "comment_models",
  foreignKey: "uid",
});

db.bannerModel.belongsTo(db.feed_model, {
  as: "like_models",
  foreignKey: "feed_id",
});

db.feed_model.hasMany(db.bannerModel, {
  as: "like_models",
  foreignKey: "feed_id",
});

db.customerModel.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());
  delete values.password;
  delete values.salt;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

// db.test_model.sync({ force: true });
// db.component_model.sync({});

export default db;
