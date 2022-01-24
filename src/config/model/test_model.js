const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("test_model", {
    title: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.TEXT,
    },
    title: {
      type: Sequelize.TEXT,
    },
    choice: {
      type: Sequelize.JSON,
    },
    answer: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
