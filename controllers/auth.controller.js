import bcrypt from 'bcryptjs'
import { User } from '../models/User.js'
import { uuid } from 'uuidv4';


async function hashPassword(pwd) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pwd, salt);
    return hashedPassword;
}

export const login = async (req, res) => {
    const data = req.body

    const credentials = {
        email: data.email,
        password: data.password
    }
    const dataUser = await User.scan("email").contains(credentials.email).exec()
    const match = await bcrypt.compare(credentials.password, dataUser[0].password);
    if (!match) {
        res.status(400).send(credentials)
    }
    res.status(200).send(credentials)
}

export const register = async (req, res) => {
    const {name, email, password, image} = req.body
    const id = uuid()
    try {
        const passwordHash = await hashPassword(password)
        const scan_test = await User.scan("email").contains(email).exec()
        if (scan_test.count > 1) {
            res.json({
                status: 'ok',
                message: 'email invalid'
            })
        } else {
            const user = new User({_id:id, name, email, password:passwordHash, image})
            console.log(user)
            await user.save();
            res.json({ok:id,name, email})
        }
    } catch (error) {
        console.log(error)
    }
}