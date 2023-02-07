const customers = [
    {
        id: 1,
        "name": "John",
        "age": 27,
        "street": {
            "city": "Kanata",
            "state": "ON",
            "country": "Canada"
        }
    },
    {
        id: 2,
        "name": "Chris",
        "age": 28,
        "street": {
            "city": "Toronto",
            "state": "ON",
            "country": "Canada"
        }
    },
    {
        id: 3,
        "name": "Jane",
        "age": 28,
        "street": {
            "city": "Kamloops",
            "state": "BC",
            "country": "Canada"
        }
    }
];

function createNewCustomer(customer) {
    var newCustomer = {};
    newCustomer.id = customers.length + 1;
    for(var key in customer) {
        newCustomer[key] = customer[key];
    }
    return newCustomer;
}

class CustomerRepo {
    static findAll() {
        return customers;
    }

    static findById(id) {
        return customers.find((customer) => customer.id == id);
    }

    static add(customer) {
        customers.push(createNewCustomer(customer));
        return customer;
    }

    static update(id, existingCustomer) {
        const index = customers.findIndex((customer) => customer.id == id);
        customers[index] = existingCustomer;
        customers[index].id = id;
        return customers[index];
    }

    static delete(id) {
        const index = customers.findIndex((customer) => customer.id == id);
        customers.splice(index, 1);
        return customers;
    }
}

module.exports = CustomerRepo;