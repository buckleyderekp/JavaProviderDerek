import equipment from "./Equipment.js";
import { useEquipment } from "./equipmentDataProvider.js";




const contentTargetEquipment = document.querySelector(".productEmployee")

const renderEquipment = () => {

    const equipmentArray = useEquipment()


    for (const singleEquipment of equipmentArray) {
        contentTargetEquipment.innerHTML += equipment(singleEquipment)
    }

}

export default renderEquipment