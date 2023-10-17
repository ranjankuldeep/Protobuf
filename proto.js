const Schema = require("./employees_pb");
const fs = require("fs");

const kuldeep = new Schema.Employee();

kuldeep.setId(1);
kuldeep.setName("Kuldeep");
kuldeep.setSalary(1000);

const ranjan = new Schema.Employee();
~
    ranjan.setId(2);
ranjan.setName("Ranjan");
ranjan.setSalary(2000);

const employees = new Schema.EmployeeList();

employees.addEmployees(kuldeep);
employees.addEmployees(ranjan);

const binaryData = employees.serializeBinary();
fs.writeFileSync("employees.bin", binaryData);
console.log("binary data: ", binaryData);

const employeesDeserialized = Schema.EmployeeList.deserializeBinary(binaryData);
console.log("employees deserialized: ", employeesDeserialized);