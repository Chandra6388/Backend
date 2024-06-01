const db = require('../../Modal')
const product = db.product

class ShellerProduct {
    async AddProduct(req, res) {
        try {
            const { numReviews, rating, countInStock, brand, category, image, description, price, shellerId, name } = req.body
            if (!shellerId) {
                return res.send({ status: false, message: "Sheller Id is required", data: [] })

            }
            const newProduct = await product.create({
                numReviews: numReviews,
                rating: rating,
                countInStock: countInStock,
                brand: brand,
                category: category,
                image: image,
                description: description,
                price: price,
                shellerId: shellerId,
                name: name

            })
            await newProduct.save()
            return res.send({ status: true, message: "Product Added Successfully", data: [] })

        }
        catch (err) {
            return res.send({ status: false, message: "Internal Server Error", data: [] })
        }

    }

}

module.exports = new ShellerProduct()