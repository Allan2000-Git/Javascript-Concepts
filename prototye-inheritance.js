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
