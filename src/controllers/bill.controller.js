import Bill from "../models/bill.model.js";

export const getBills = async (req, res) => {
  const bills = await Bill.find({
    user: req.user.id
  }).populate('user');
  res.json(bills);
};

export const createBill = async (req, res) => {
  const { name, description, quantity, price, date } = req.body;

  console.log(name);
  const newBill = new Bill({
    name,
    description,
    quantity,
    price,
    date,
    user: req.user.id
  });

  const savedBill = await newBill.save();
  res.json(savedBill);
};

export const getBill = async (req, res) => {
  const bill = await Bill.findById(req.params.id).populate('user');

  if (!bill) return res.status(404).json({ message: "bill not found" });
  res.json(bill);
};

export const deleteBill = async (req, res) => {
  const bill = await Bill.findByIdAndDelete(req.params.id);

  if (!bill) return res.status(404).json({ message: "bill not found" });
  res.sendStatus(204);
};
export const updateBill = async (req, res) => {
  const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!bill) return res.status(404).json({ message: "bill not found" });
  res.json(bill);
};
