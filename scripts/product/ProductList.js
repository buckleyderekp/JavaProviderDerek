import singleProduct from "./Product.js";
import { useProducts } from "./productDataProvider.js";



const contentTargetProduct = document.querySelector(".productEmployee")

const renderProduct = () => {

    const productArray = useProducts()

    for (const product of productArray) {
        
        contentTargetProduct.innerHTML += singleProduct(product)

    }
}

export default renderProduct