const employees = []
const fs = require('fs')
employees.push({
    name: 'John',
    salary: 1000,
    id: 1
})
const employee2 = {
    name: 'Jane',
    salary: 1500,
    id: 2
}
employees.push(employee2)
const employee3 = {
    name: 'Mary',
    salary: 2000,
    id: 3
}
employees.push(employee3)

fs.writeFileSync('employees.json', JSON.stringify(employees))
console.log(JSON.stringify(employees))