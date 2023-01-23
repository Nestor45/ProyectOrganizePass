import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{type:String},
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique:true },
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    status: {type:String,default:1}
})

export const User = mongoose.model('users', userSchema)