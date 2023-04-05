import mongoose from "mongoose";
const  userschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
});

const User =  mongoose.model('User', userschema); //User used database collection name and userschema  which we publish on front page

export default User;