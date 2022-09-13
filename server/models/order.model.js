module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    pincode: {
        type: Sequelize.STRING,
    },
    total: {
        type: Sequelize.STRING,
    },
    foodItems: {
        type: Sequelize.JSON,
    },
  });
  return Order;
};
