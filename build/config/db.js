// const pkg = require("pg");
import dotenv from "dotenv";
import Sequelize from "sequelize";
import customerModel from "./model/user.model.js";
import even_List from "./model/even_List.js";
import event_Info from "./model/event_Info.js";
import joinModel from "./model/joinEvent.js";
import history_model from "./model/history_model.js";
import market_info from "./model/market_info.js";
import event_reward from "./model/event_reward.js";
import product_model from "./model/product_model.js";
import reciveproduct_model from "./model/reciveproduct_model.js";
import comment_model from "./model/comment.js";
import discount from "./model/master_friend.js";
import notification_model from "./model/master_team.js";
import report_model from "./model/blog_model.js";
import results_running from "./model/results_running.js";
import omise_log from "./model/omise_log.js";
import partner_model from "./model/partner_model.js";
import album_model from "./model/album_model.js";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const rdsCa = fs.readFileSync(__dirname + "/rmc-ca-certificate.crt");
dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.SQ_DIAL,
  port: process.env.DB_PORT,
  // operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: rdsCa
    }
  } // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },

});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user_accounts = customerModel(sequelize, Sequelize);
db.market_info = market_info(sequelize, Sequelize);
db.product_model = product_model(sequelize, Sequelize);
db.reciveproduct_model = reciveproduct_model(sequelize, Sequelize);
db.history_model = history_model(sequelize, Sequelize);
db.discount = discount(sequelize, Sequelize);
db.comment_model = comment_model(sequelize, Sequelize);
db.notification_model = notification_model(sequelize, Sequelize);
db.report_model = report_model(sequelize, Sequelize);
db.market_info.belongsTo(db.user_accounts, {
  as: "user_accounts",
  foreignKey: "uid"
});
db.product_model.belongsTo(db.market_info, {
  as: "market_info",
  foreignKey: "market_id"
});
db.comment_model.belongsTo(db.market_info, {
  as: "market_info",
  foreignKey: "market_id"
});
db.comment_model.belongsTo(db.user_accounts, {
  as: "user_accounts",
  foreignKey: "uid"
});

db.user_accounts.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());
  delete values.password;
  delete values.salt;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
}; // db.event_Info = event_Info(sequelize, Sequelize);
// db.userInfo = userInfo(sequelize, Sequelize);
// db.joinModel = joinModel(sequelize, Sequelize);
// db.event_reward = event_reward(sequelize, Sequelize);
// db.joinEvent = joinEvent(sequelize, Sequelize);
// db.team_model = team_model(sequelize, Sequelize);
// db.bib_running = bib_running(sequelize, Sequelize);
// db.master_friend = master_friend(sequelize, Sequelize);
// db.master_team = master_team(sequelize, Sequelize);
// db.blog_model = blog_model(sequelize, Sequelize);
// db.results_running = results_running(sequelize, Sequelize);
// db.omise_log = omise_log(sequelize, Sequelize);
// db.partner_model = partner_model(sequelize, Sequelize);
// db.album_model = album_model(sequelize, Sequelize);


export default db;