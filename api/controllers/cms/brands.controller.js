const { errorMsg, setNotFound } = require("@/lib/functions")
const { Brands } = require("@/models")

class brandsCtrl {
    
    // List all Brandss
    index = async (req, res, next) => {
        try {
            const brands = await Brands.find()
            res.send(brands)
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Add a new Brands
    store = async (req, res, next) => {
        try {
            const { name, description, status } = req.body;

            await Brands.create({
                name,
                description,
                status
            })

            res.status(201).send({ message: "Brands Added" })
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Show details of a specific Brands by ID
    show = async (req, res, next) => {
        try {
            const { id } = req.params;

            const brands = await Brands.findById(id)

            if (brands) {
                res.send(brands)
            } else {
                setNotFound(next, 'Brands');
            }
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Update details of a specific Brands by ID
    update = async (req, res, next) => {
        try {
            const { id } = req.params;

            const brands = await Brands.findById(id)

            if (brands) {
                const { name, description, status } = req.body;

                await Brands.findByIdAndUpdate(id, { name, description, status }, { runValidators: true });

                res.send({ message: "Brands updated successfully" });
            } else {
                setNotFound(next, 'Brands');
            }
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Delete a specific Brands by ID
    destroy = async (req, res, next) => {
        try {
            const { id } = req.params;

            const brands = await Brands.findById(id)

            if (brands) {
                await Brands.findByIdAndDelete(id);
                res.send({ message: "Brands deleted successfully" });
            } else {
                setNotFound(next, 'Brands');
            }
        } catch (error) {
            errorMsg(next, error)
        }
    }
}

module.exports = new brandsCtrl
