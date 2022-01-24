const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("report_model", {
    title: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
  });

  return collapseModel;
};

export default user_model;
