/* const dhoni = {
    pname: "Mahendra Singh Dhoni",
    age: 42,
    isCaptainColl: true,
    teams: ["India", "CSK"],
    stats:{
        matches: 538,
        runs: 17266,
        centuries: 16,
    },
    retire: function(){
        return `${this.pname} retired from international cricket in 2020`;
    },
}
console.log(dhoni.pname);
console.log(dhoni.stats.runs);
console.log(dhoni.teams[0]);
console.log(dhoni.retire); */

/* const calculator = {
    add: function(a, b){
        return a+b;
    },
    subtract: function(a, b){
        return a-b;

    },
    multiple: function(a, b){
        return a*b;

    },
}
console.log(calculator.add(5,3));
console.log(calculator.subtract(10,5));
console.log(calculator.multiple(5,5)); */

const library = {
    name: "Prasannakumar",
    books: [],
    totalBooks: 0,
    addBook: function(title){
        this.books.push(title);
        this.totalBooks++;
    },

};

library.addBook("Python 11 hours");
library.addBook("C programming 18 hours");
library.addBook("JavaScript 25 hours");
console.log(library.books);
console.log(library.totalBooks);