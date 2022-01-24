const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("customer_model", {
    Type: {
      type: Sequelize.STRING
    },
    telephoneNo: {
      unique: true,
      type: Sequelize.STRING
    },
    image_Profile: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    email: {
      unique: true,
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    salt: {
      type: Sequelize.STRING
    }
  });
  return collapseModel;
};

export default user_model;