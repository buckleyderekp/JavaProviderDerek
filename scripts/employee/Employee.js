
const employeeObject = (employee) => {
    return `
    <h3>${employee.firstName} ${employee.lastName}</h3>
    <ul><h4>Employee Details</h4>
      <li>Job Title: ${employee.jobTitle}</li>
      <li>Hours Scheduled: ${employee.hoursScheduled}</li>
    </ul>
    `
}

export default employeeObject