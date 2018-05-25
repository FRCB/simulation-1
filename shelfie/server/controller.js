module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then(inventoryList => res.status(200).send(inventoryList))
            .catch(() => res.status(500).send())
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { urlInput, productNameInput, priceInput } = req.body

        db.create_product([urlInput, productNameInput, priceInput])
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
        db.delete_product([id])
            .then(products => res.status(200).send(products)).catch(() => res.status(500).send())
    }
}