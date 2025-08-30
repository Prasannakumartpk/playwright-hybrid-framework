let fullName = "Prasannakumar Thallapally";
console.log("How are you?");

function wish(){
    console.log(this);
    console.log("Happy Birthday");
    console.log("Study Well");
}
wish();

let employee = {
    empName: fullName,
    empPhone: 8686218899,
    empAddress: "Siddapur, Warangal",
    wish: function(){
    console.log("Function Inside Object");
    console.log(`Happy Birthday ${this.empName}`);
    }
}
console.log(employee);
employee.wish();

const patient = {
    height: 162,
    weight: 62,
    "full name": "M Sarika",
}
console.log(patient);
console.log(patient["full name"]);

const person = {
    pname: "Vamika",
    page: 3,
}
console.log(person.pname);
console.log(person["page"]);


const plName= "Dhoni";
const plage= 43;
const  plRole= "Captain";
const player = {
    plName,
    plage,
    plRole
};
console.log(player);