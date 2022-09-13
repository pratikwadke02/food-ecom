module.exports = (app) => {
    
    const user = require('../controllers/user.controller.js');
    const order = require('../controllers/order.controller.js');
    

    const router = require('express').Router();


    router.post("/register", user.register);
    router.post("/login", user.login);
    router.get("/getAllUsers", user.findAll);

    router.post("/createOrder", order.create);
    router.get("/getAllOrders", order.findAll);


    app.use("/api/food-ecom", router);
}