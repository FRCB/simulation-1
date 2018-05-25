module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { imageurl, productname, price } = req.body

        db.create_product([imageurl, productname, price])
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