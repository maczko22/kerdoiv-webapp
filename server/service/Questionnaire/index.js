const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    createUser(userObj) {
        const user = new User({
            username: userObj.username,
            password: userObj.password
        });
        return user;
    }
};
