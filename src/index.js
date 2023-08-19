import App from './App.js';
import { connectDB } from './db.js';

connectDB();
App.listen(4000);
console.log('server on port:', 4000);