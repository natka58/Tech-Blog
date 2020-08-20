const { User } = require('../models');

const userData = [
    {
        username: "lernan_tino",
        email: "lernan_tino@gmail.com",
        password: "password1!"
    },
    {
        username: "lernan_tino2",
        email: "lernan_tino2@gmail.com",
        password: "password2!"
    },
    {
        username: "lernan_tino3",
        email: "lernan_tino3@gmail.com",
        password: "password3!"
    },
    {
        username: "lernan_tino4",
        email: "lernan_tino4@gmail.com",
        password: "password4!"
    },
    {
        username: "lernan_tino5",
        email: "lernan_tino5@gmail.com",
        password: "password5!"
    }
];








const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;