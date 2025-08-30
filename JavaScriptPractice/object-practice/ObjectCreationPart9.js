const animal = {
    eats: true,
    walk(){
        console.log("Animal Walks");
    },
};

const dog = {
    barks: true,
};
console.log(dog.eats);
Object.setPrototypeOf(dog, animal);
console.log(dog.eats);