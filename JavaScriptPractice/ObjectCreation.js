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

