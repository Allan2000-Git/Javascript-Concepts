/*

Without Dependency Inversion:

Controller -----> Service -------> Database


With Dependency Inversion:

Controller -----> Interface <----- Service -------> Interface <----- Database

*/

interface Repository {
    createUser(): void;
}

class UserController {
    constructor(private userService: UserService) {}

    createUser() {
        this.userService.createUser();
    }
}

class UserService {
    constructor(private mongoRepo: MongoRepository) {}

    createUser() {
        this.mongoRepo.createUser();
    }
}

class MongoRepository implements Repository {
    createUser() {
        console.log("User created in Mongo repo")
    }
}

const mongoRepo = new MongoRepository();
const userService = new UserService(mongoRepo);
const userController = new UserController(userService);

userController.createUser();