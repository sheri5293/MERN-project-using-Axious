import express from 'express';        // require express module

import {getUsers,addUser} from '../Controller/user-controller.js';

const route = express.Router();         // for set routes

//Api call get 

route.get('/Users', getUsers);
route.post('/Add', addUser);


export default  route;

