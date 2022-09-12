module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'pratik02',
    database: 'food-ecom',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};