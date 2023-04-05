import User from '../Model/user-schema.js';

export const getUsers =(req,res) => {
    
    res.send('Hello World');
}
//post//
export const addUser =async(req,res) => {
    const user = req.body;

    const newUser = new User(user);       // new object intialize with user schema


try{
    await newUser.save();
    res.json(newUser);

}catch(err){
    res.status(500).send(err);
}

}


