
class CustomerService {
    constructor() {
        this.customers = [
            {
                id: 1,
                firstName: 'First Name 1',
                lastName: 'Last Name 1',
                email: 'email1@example.com',
                cart: []
            },
            {
                id: 2,
                firstName: 'First Name 2',
                lastName: 'Last Name 2',
                email: 'email2@example.com',
                cart: {}
            },
            {
                id: 3,
                firstName: 'First Name 3',
                lastName: 'Last Name 3',
                email: 'email3@example.com',
                cart: {}
            },
            {
                id: 4,
                firstName: 'First Name 4',
                lastName: 'Last Name 4',
                email: 'email4@example.com',
                cart: {}
            },
            {
                id: 5,
                firstName: 'First Name 5',
                lastName: 'Last Name 5',
                email: 'email5@example.com',
                cart: {}
            },
        ]
    }
    getAllCustomers() {
        return this.customers;
    }
    getCustomerById(id) {
        return this.customers.find((customer) => customer.id === id);
    }
    addNewCustomer(newCustomer) {
        this.customers.push(newCustomer);
    }
    removeCustomer(id) {
        this.customers = this.customers.filter(customer => customer.id !== id);
    }
}

const customerService = new CustomerService();
export default customerService;