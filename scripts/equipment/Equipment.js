const equipment = (equipmentObject) => {
    return `
    <h4>Model: ${equipmentObject.model}</h4>
    <ul> <h4>Details</h4>
    <li>This machine works: ${equipmentObject.isFunctional}</li>
    <li>This has a warranty: ${equipmentObject.isUnderWarranty}</li>
    </ul>
    `
}

export default equipment