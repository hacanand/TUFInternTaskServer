const UserRepository = require('../repository/UserRepository');
const userRepository = new UserRepository();
class UserController {
    async create(req, res) {
        try {
            const user = req.body;
            const data = await userRepository.create(user);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async findAll(req, res) {
        try {
            const data = await userRepository.findAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();

