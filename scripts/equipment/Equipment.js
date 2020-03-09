const equipment = (equipmentObject) => {
    return `
    <div class="equipment">
    <h3>Model: ${equipmentObject.model}</h3>
    <h4>Details</h4>
    <ul> 
    <li>This machine works: ${equipmentObject.isFunctional}</li>
    <li>This has a warranty: ${equipmentObject.isUnderWarranty}</li>
    </ul>
    </div>
    `
}

export default equipment