const User = {
    name:"allan",
    email:"allan@gmail.com"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    isFullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // assign which to which

// attach a property to our object, so that we can access it
// arr (custom array); arr.__proto__ = Array.prototype
// arr.__proto__.__proto__ = Object.prototype
