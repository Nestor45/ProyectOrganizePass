import bcrypt from 'bcryptjs'
import { User } from '../models/User.js'
import { uuid } from 'uuidv4';


async function hashPassword(pwd) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pwd, salt);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    const data = req.body
    
    try {
        const dataUser = await User.scan("email").contains(data.email).exec()
        const match = await bcrypt.compare(data.password, dataUser[0].password);
        if (!match) {
            return res.status(400)
        }
        const dataInfo = {id:dataUser[0]._id, email:dataUser[0].email, name:dataUser[0].name}
        return res.status(200).send(dataInfo)
    } catch (error) {
        console.log(error)
    }
}

export const register = async (req, res) => {
    const {name, email, password, image} = req.body
    const id = uuid()
    try {
        const passwordHash = await hashPassword(password)
        const scan_test = await User.scan("email").contains(email).exec()
        if (scan_test.count >= 1) {
            return res.json({
                status: 'ok',
                message: 'email invalid'
            })
        }
        const user = new User({_id:id, name, email, password:passwordHash, image})
        console.log(user)
        await user.save();
        return res.json({ok:id,name, email})
    } catch (error) {
        console.log(error)
    }
}