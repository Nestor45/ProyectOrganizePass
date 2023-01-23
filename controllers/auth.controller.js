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
    const isCorrect = await bcrypt.compare(data.password, 'password_in_data_base');
    console.log(isCorrect)
    const credentials = {
        email: data.email,
        password: data.password
    }
    console.log(credentials)
    res.json({ok:'login',credentials:credentials})
}

export const register = async (req, res) => {
    const {name, email, password, image} = req.body
    const id = uuid()
    const passwordHash = await hashPassword(password)
    try {
        const user = new User({_id:id, name, email, password:passwordHash, image})
        console.log(user)
        await user.save();
    } catch (error) {
        console.log(error)
    } 
    res.json({ok:id,name, email})
}