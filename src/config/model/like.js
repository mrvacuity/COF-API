const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("like_model", {
    image_url: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
