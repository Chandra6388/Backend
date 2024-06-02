const db = require('../../Modal')
const product = db.product

class ShellerProduct {
    async AddProduct(req, res) {
        try {
            console.log(req.body)
            const { category, description, price, image, productName, shellerId } = req.body
            if (!shellerId) {
                return res.send({ status: false, message: "Sheller Id is required", data: [] })

            }

            console.log()
            const newProduct = new product({
                
                category: category,
                image: image,
                description: description,
                price: price,
                shellerId: shellerId,
                name: productName

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