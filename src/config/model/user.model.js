const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("customer_model", {
    Type: {
      type: Sequelize.ENUM("EMAIL", "TWITTER", "FACEBOOK", "GOOGLE", "APPLE"),
      defaultValue: "EMAIL",
    },
    role: {
      type: Sequelize.ENUM("ADMIN", "USER"),
      defaultValue: "USER",
    },
    username: {
      unique: true,
      type: Sequelize.TEXT,
    },
    first_name: {
      type: Sequelize.TEXT,
    },
    last_name: {
      type: Sequelize.TEXT,
    },
    email: {
      unique: true,
      type: Sequelize.TEXT,
    },
    birth_date: {
      type: Sequelize.TEXT,
    },
    password: {
      type: Sequelize.TEXT,
    },
    image_profile: {
      type: Sequelize.TEXT,
    },
    salt: {
      type: Sequelize.TEXT,
    },
    about_me: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
