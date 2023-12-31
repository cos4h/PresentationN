import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';


export const register = async (req, res) => {
  const { email, password, phone, username } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["correo esta en uso"])

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: passwordHash,
      phone,
      username
    })
  
    const userSaved = await newUser.save();
    const token =await createAccessToken({ id: userSaved._id });

    res.cookie('token', token)
    
    res.json({
      "email": userSaved.email,
      "phone": userSaved.phone,
      "username": userSaved.username,
      "createdAt": userSaved.createdAt,
      "updatedAt": userSaved.updatedAt,
       message: "Register success!"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
}
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    const userFound = await User.findOne({email});

    if(!userFound) return res.status(404).json({message: "User not found"});

    const isMatch = await bcrypt.compare(password, userFound.password);

    if(!isMatch) return res.status(400).json({message: "Invalid Credential"})

    const token =await createAccessToken({ id: userFound._id });

    res.cookie('token', token)
    
    res.json({
      "email": userFound.email,
      "phone": userFound.phone,
      "username": userFound.username,
      "createdAt": userFound.createdAt,
      "updatedAt": userFound.updatedAt,
      message: "Login success!" 
      
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
}

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })

  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if(!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    phone: userFound.phone,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}


export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({message: "Unauthorized"})

  
    
  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if(err) return res.status(401).json({message: "Unauthorized"})

    const userFound = await User.findById(user.id);

    if (!userFound)  return res.status(401).json({message: "Unauthorized"})

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      phone: userFound.phone
    });
  })
}