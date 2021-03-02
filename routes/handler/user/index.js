const register = require('./register')
const login = require('./login')
const update = require('./update')
const getUserByID = require('./get_user_by_id')
const getUsers = require('./get_users')

module.exports = {
    register,
    login,
    update,
    getUserByID,
    getUsers
}