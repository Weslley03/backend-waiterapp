import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    userCategory: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('User', UserSchema)

export default User;