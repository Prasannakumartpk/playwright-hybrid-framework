let Employee = {
    EmpName: "Prasannakumar",
    EmpPhone: 8686218899,
    EmpAddress: "Siddapur, Warangal",
}

const ename = Employee.EmpName;
console.log(Employee);
console.log(`${ename} is from ${Employee.EmpAddress}`);

if(Employee.city === undefined){
    console.log("city key is not available in the Employee object");
}else{
    console.log(Employee.city);
}

// Update value into the object
Employee.EmpPhone = 8686218800;
console.log(Employee.EmpPhone);

// Add new property into the object
Employee.EmpGender = "Male";
console.log(Employee.EmpGender);
console.log(Employee);

// Delete property into the object
delete Employee.EmpGender;
console.log(Employee);
console.log(Employee.EmpName.toUpperCase());

