const singleProduct = (productObject) => {
    return `
    <h4>Model: ${productObject.name}</h4>
    <ul> <h4>Details</h4>
    <li>Bean Type: ${productObject.beanType}</li>
    <li>Roast: ${productObject.roastType}</li>
    <li>Price: ${productObject.price}</li>
    </ul>
    `
}

export default singleProduct