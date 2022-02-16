const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("component_model", {
    video_url: {
      type: Sequelize.TEXT,
    },
    video_name: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.JSON,
    },
    title: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
