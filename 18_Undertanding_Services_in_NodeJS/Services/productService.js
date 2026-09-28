const getProducts = ()=>{
return "Fetching all products";
}

const getProductsById = (id)=>{
  return `Fetching product with ID:${id}`
}

const addProduct = () => {
    return "Adding a new product";
};

module.exports={
    getProducts,
    getProductsById,
    addProduct
}