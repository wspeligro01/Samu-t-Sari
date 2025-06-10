import mongoose from 'mongoose';

const User = mongoose.model('User', {
    fname: String,
    lname: String,
    userType: String,
    username: String,
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true }
}, 'userData');

export default User;