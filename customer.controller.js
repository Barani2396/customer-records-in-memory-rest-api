const express = require("express");
const CustomerServices = require("./customer.services");

const router = express.Router();

router.get("/customers", (req, res) => {
    const customers = CustomerServices.findAll();
    res.status(200).json(customers);
});

router.get("/customers/:id", (req, res) => {
    const customer = CustomerServices.findById(req.params.id);
    if(!{customer}) {
        res.status(404).send("Customer not found");
    }
    else {
        res.status(200).json(customer);
    }
});

router.post("/customer", (req, res) => {
    const customer = CustomerServices.add(req.body);
    res.status(201).json(customer);
});

router.put("/customer/:id", (req, res) => {
    const customer = CustomerServices.update(req.params.id, req.body);
    if(!customer) {
        res.status(404).send("Customer not found, try with different id");
    }
    else {
        res.status(200).json(customer);
    }
});

router.delete("/customer/:id", (req, res) => {
    const customers = CustomerServices.delete(req.params.id);
    if(!customers) {
        res.status(404).send("Customer not found, try to delete with a different id");
    }
    else {
        res.status(200).json(customers);
    }
});

module.exports = router;