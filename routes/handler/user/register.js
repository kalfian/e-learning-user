const { User } = require('../../../models')
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');

const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|empty:false|min:6',
        profession: 'string|optional'
    }

    const validate = v.validate(req.body, schema)
    if (validate.lentgh) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const user = await User.findOne({
        where: {email: req.body.email}
    })

    if (user) {
        return res.status(401).json({
            status: 'error',
            message: "Email already taken"
        })
    }

    const hashed = await bcrypt.hash(req.body.password, 10);

    const data = {
        password: hashed,
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        role: 'student'
    }

    const createdUser = await User.create(data);

    return res.status(201).json({
        status: 'created',
        data: {
            id: createdUser.id
        }
    })

}