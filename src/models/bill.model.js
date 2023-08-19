import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: false,
      require: true,
    },
    description: {
      type: String,
      maxlength: 50,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
      min: 1,
    },
    price: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true
    }
  },
  {
    timestamps: true 
  }
);

export default mongoose.model("Bill", billSchema);
