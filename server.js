const express = require("express");
const CustomerController = require("./customer.controller");

const app = express();

app.use(express.json());
app.use("/api", CustomerController);

app.listen(3000, () => {
    console.log("Customer API server started on port 3000");
});