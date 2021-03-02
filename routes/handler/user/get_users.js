const { User } = require('../../../models')

module.exports = async (req, res) => {

    const options = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    const userIds = req.query.user_ids || []

    if (userIds.length) {
        options.where = {
            id: userIds
        }
    }

    const users = await User.findAll(options)

    return res.status(200).json({
        status: 'success',
        data: users
    })
}