const { errorMsg, setNotFound } = require("@/lib/functions");
const { Categories } = require("@/models");

class categoriesCtrl {
    
    // List all categories
    index = async (req, res, next) => {
        try {
            const categories = await Categories.find()
            res.send(categories)
        } catch (error) {
            errorMsg(next, error)
        }
    }

    // Add a new Categories
    store = async (req, res, next) => {
        try {
            const { name, description, status } = req.body;

            await Categories.create({
                name,
                description,
                status
            });

            res.status(201).send({ message: "Categories Added" });
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Show details of a specific Categories by ID
    show = async (req, res, next) => {
        try {
            const { id } = req.params;

            const categories = await Categories.findById(id);

            if (categories) {
                res.send(categories);
            } else {
                setNotFound(next, 'Categories');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Update details of a specific Categories by ID
    update = async (req, res, next) => {
        try {
            const { id } = req.params;

            const categories = await Categories.findById(id);

            if (categories) {
                const { name, description, status } = req.body;

                await Categories.findByIdAndUpdate(id, { name, description, status }, { runValidators: true });

                res.send({ message: "Categories updated successfully" });
            } else {
                setNotFound(next, 'Categories');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }

    // Delete a specific Categories by ID
    destroy = async (req, res, next) => {
        try {
            const { id } = req.params;

            const categories = await Categories.findById(id);

            if (categories) {
                await Categories.findByIdAndDelete(id);
                res.send({ message: "Categories deleted successfully" });
            } else {
                setNotFound(next, 'Categories');
            }
        } catch (error) {
            errorMsg(next, error);
        }
    }
}

module.exports = new categoriesCtrl
