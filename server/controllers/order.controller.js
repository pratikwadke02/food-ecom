const db = require('../models');
const Order = db.order;

exports.create = async (req, res) => {
    try{
        console.log(req.body);
        await Order.create({
            ...req.body,
        });
        res.send({data: req.body});
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

exports.findAll = async (req, res) => {
    try{
        const orders = await Order.findAll();
        res.send(orders);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
