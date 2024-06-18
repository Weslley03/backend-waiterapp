import mongoose, { mongo } from "mongoose";

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

const User = mongoose.model('User', UserSchema)

export default User;