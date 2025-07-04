const { errorMsg, validationError, setNotFound } = require("@/lib/functions");
const { User } = require("@/models");

class customersCtrl {
    
    // List all customers
    index = async (req, res, next) => {
        try {
            const customers = await User.find({ role: 'Customer' })
            res.send(customers)
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Add a new customer
    store = async (req, res, next) => {
        try {
            const { name, email, password, confirmPassword, phone, address, status } = req.body;

            if (password == confirmPassword) {
                const hashedPassword = bcrypt.hashSync(password, 10);
                
                await User.create({
                    name,
                    email,
                    password: hashedPassword,
                    phone,
                    address,
                    status,
                    role: 'Customer'
                });

                res.status(201).send({ message: "Customer Added" });
            } else {
                validationError(next, { message: "Password and Confirm Password do not match" });
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Show details of a specific customer by ID
    show = async (req, res, next) => {
        try {
            const { id } = req.params;

            const customer = await User.findOne({ _id: id, role: 'Customer' });

            if (customer) {
                res.send(customer);
            } else {
                setNotFound(next, 'Customer');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Update details of a specific customer by ID
    update = async (req, res, next) => {
        try {
            const { id } = req.params;

            const customer = await User.findOne({ _id: id, role: 'Customer' });

            if (customer) {
                const { name, phone, address, status } = req.body;

                await User.findByIdAndUpdate(id, { name, phone, address, status }, { runValidators: true });

                res.send({ message: "Customer updated successfully" });
            } else {
                setNotFound(next, 'Customer');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Delete a specific customer by ID
    destroy = async (req, res, next) => {
        try {
            const { id } = req.params;

            const customer = await User.findOne({ _id: id, role: 'Customer' });

            if (customer) {
                await User.findByIdAndDelete(id);
                res.send({ message: "Customer deleted successfully" });
            } else {
                setNotFound(next, 'Customer');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }
}

module.exports = new customersCtrl
