class UserController {
    getUserData(req, res) {
        // Simulate fetching user data
        const userData = {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com"
        };
        // res.json(userData);
    }
}

module.exports = new UserController();