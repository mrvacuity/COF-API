const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("comment_model", {
    comment: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
