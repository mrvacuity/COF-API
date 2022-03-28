const user_model = (sequelize, Sequelize) => {
  const collapseModel = sequelize.define("history_model", {
    Sour: {
      type: Sequelize.TEXT,
    },
    image_url: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    brand: {
      type: Sequelize.TEXT,
    },
    species: {
      type: Sequelize.TEXT,
    },
    source: {
      type: Sequelize.TEXT,
    },
    quantity: {
      type: Sequelize.NUMERIC,
    },
    temp: {
      type: Sequelize.NUMERIC,
    },
    timeh: {
      type: Sequelize.INTEGER,
    },
    timem: {
      type: Sequelize.INTEGER,
    },
  });

  return collapseModel;
};

export default user_model;
