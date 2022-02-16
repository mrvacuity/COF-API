const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("history_model", {
    Sour: {
      type: Sequelize.TEXT,
    },
    Sweet: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.TEXT,
    },
    total: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
