const singleProduct = (productObject) => {
    return `
    <div class="product">
    <h3>Model: ${productObject.name}</h3>
    <h4>Details</h4>
    <ul> 
    <li>Bean Type: ${productObject.beanType}</li>
    <li>Roast: ${productObject.roastType}</li>
    <li>Price: ${productObject.price}</li>
    </ul>
    </div>
    `
}

export default singleProduct