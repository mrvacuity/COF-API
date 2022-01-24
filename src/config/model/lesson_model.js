const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("lesson_model", {
    title: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
