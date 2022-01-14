const productsDB = [
    {
        id: 'redshoe',
        description: 'Red shoe',
        price: 42.12,
        reviews: [],
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.23,
        reviews: [],
    }
];

function getAllProducts() {
    return productsDB;
}

function getProductsByPrice(min, max) {
    return productsDB.filter((product) => {
        return product.price >= min && product.price <= max; 
    });
}

function getProductById(productId) {
    return productsDB.find((product) => {
        return product.id === productId
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        reviews: [],
        price
    };

    productsDB.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const targetProduct = getProductById(id);
    if(targetProduct) {
        const newReview = { 
            rating, 
            comment
        };
        targetProduct.reviews.push(newReview);
    }
    return targetProduct;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}