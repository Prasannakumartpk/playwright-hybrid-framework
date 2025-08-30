let employee = {
    ename : "Prasannakumar",
    ephone : 8686218899,
    eaddress: "Siddapur, Warangal"
}

console.log(employee);
let employee2 = {...employee};
console.log(employee2);
employee2.ename = "Sarika";
console.log(employee2.ename);
console.log(employee.ename);


