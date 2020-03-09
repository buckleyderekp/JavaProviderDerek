
const employeeObject = (employee) => {
    return `
    <div class="employee">
    <h3>${employee.firstName} ${employee.lastName}</h3>
    <h4>Employee Details</h4>
    <ul>
      <li>Job Title: ${employee.jobTitle}</li>
      <li>Hours Scheduled: ${employee.hoursScheduled}</li>
    </ul>
    </div>
    `
}

export default employeeObject