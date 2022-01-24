const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("feed_model", {
    title: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
