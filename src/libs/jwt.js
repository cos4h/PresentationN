import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';


export function createAccessToken (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY, {
      expiresIn: 3600 // 1 hour
      },
      (err, token) => {
       if (err) reject(err);
       resolve(token);
      
      }
    );
  });
}