const { User } = require('../models');

class UserRepository {
    async create(user) {
        try {
            const data = await User.create(user);
            return data;
        } catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const data = await User.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;
