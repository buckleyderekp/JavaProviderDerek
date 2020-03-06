import { useEmployee } from "./employeeDataProvider.js";
import employeeObject from "./Employee.js";


const contentTarget = document.querySelector(".body")

const interpolateEmployee = () => {
 const employeeArray = useEmployee()
 for (const singleEmployee of employeeArray) {
     contentTarget.innerHTML += employeeObject(singleEmployee)
 }
}

export default interpolateEmployee
