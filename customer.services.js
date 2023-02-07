const CustomerRepo = require("./customer.repo");

class CustomerServices {
    static findAll() {
        return CustomerRepo.findAll();
    }

    static findById(id) {
        return CustomerRepo.findById(id);
    }

    static add(customer) {
        return CustomerRepo.add(customer);
    }

    static update(id, existingCustomer) {
        return CustomerRepo.update(id, existingCustomer);
    }

    static delete(id) {
        return CustomerRepo.delete(id);
    }
}

module.exports = CustomerServices;