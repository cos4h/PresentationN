import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: false,
    trim: true,
    maxlength: 10,
    minlength: 10
  }
},{
  timestamps: true,
}
 
)

export default mongoose.model('User', userSchema);