const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new mongoose.Schema({
  expenseId: { type: Date, default: Date.now },
  cost: Number,
  category: String,
  description: String,
});

const userSchema = new Schema({
  userData: {
    name: String,
    password: String,
    savingsGoal: Number,
    income: Number,
    currency: String,
  },
  expenses: {
    january: { type: [expenseSchema], default: [] },
    february: { type: [expenseSchema], default: [] },
    march: { type: [expenseSchema], default: [] },
    april: { type: [expenseSchema], default: [] },
    may: { type: [expenseSchema], default: [] },
    june: { type: [expenseSchema], default: [] },
    july: { type: [expenseSchema], default: [] },
    august: { type: [expenseSchema], default: [] },
    september: { type: [expenseSchema], default: [] },
    october: { type: [expenseSchema], default: [] },
    november: { type: [expenseSchema], default: [] },
    december: { type: [expenseSchema], default: [] },
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = { Users };
