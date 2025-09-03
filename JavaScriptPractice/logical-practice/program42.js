const person = {
    greet: function(){
        console.log("Thallapally");
    }
}

const family = Object.create(person);
family.name = "Prasannakumar";

console.log(family.name);
family.greet();