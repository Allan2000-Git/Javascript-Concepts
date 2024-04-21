/*
    The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.
*/

function Developer(name){
    this.name = name
    this.type = "Developer"
}

function Tester(name){
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1: return new Developer(name)
            case 2: return new Tester(name)
        }
    }
}

function say(){
    console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.map( emp => {
    say.call(emp)
})