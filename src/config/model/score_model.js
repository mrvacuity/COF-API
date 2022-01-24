const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("score_model", {
    Type: {
      type: Sequelize.ENUM("PRETEST", "POSTTEST"),
      defaultValue: "PRETEST",
    },
    score: {
      type: Sequelize.INTEGER,
    },
  });

  return collapseModel;
};

export default user_model;
