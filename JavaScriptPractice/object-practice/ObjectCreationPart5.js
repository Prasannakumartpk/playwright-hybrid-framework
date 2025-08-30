let employee = {
    ename : "Prasannakumar",
    ephone : 8686218899,
    eaddress : {
        city: "Siddapur",
        district: "Warangal",
    },
    /* wish: function(){
        console.log("Happy Birthday");
        console.log("Study Well")
    } */
}
let employee1 = structuredClone(employee);
console.log(employee1);
employee1.ename = "Vamika";
console.log(employee.ename);
console.log(employee1.ename);
employee1.eaddress.city = "Siddapur, Hasanparthi";
console.log(employee1.eaddress.city);
console.log(employee.eaddress.city);
