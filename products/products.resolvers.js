const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            return productsModel.getAllProducts();
        },
        prouctsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max);
        },
        productsById: (_, args) => {
            return productsModel.getProductById(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
}