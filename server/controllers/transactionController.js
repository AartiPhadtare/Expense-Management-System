const transectionModel = require("../models/transectionModel");
const moment = require("moment");
const { customAlphabet } = require("nanoid");
const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await transectionModel.find({});
    res
      .status(200)
      .json({
        status: "success.",
        message: "All transactions fetched successfully.",
        transactions: transactions,
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        status: "failed",
        message: "Failed to fetch transactions.",
        error: error,
      });
  }
};
const getOneTransaction = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const transaction = await transectionModel.findOne({
      transactionId: transactionId,
    });
    res
      .status(200)
      .json({
        status: "success",
        message: "Transaction fetched successfully.",
        transaction: transaction,
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        status: "failed",
        message: "Failed to fetch transaction.",
        error: error,
      });
  }
};
const addTransaction = async (req, res) => {
  const { amount, type, category, refrence, description, date } = req.body;
  try {
    // Generate a Nano ID for user
    const nanoid = customAlphabet(alphabet, 10); // 10 is the length of the Nano ID
    const nanoId = nanoid();

    // const newTransection = new transectionModel(req.body);
    const newTransection = new transectionModel({
      expenseAppUserId: 'n8rLhXow8d',
      transactionId: nanoId,
      amount: amount,
      type: type,
      category: category,
      refrence: refrence,
      description: description,
      date: date,
    });
    await newTransection.save();
    res.status(201).send({
      status: "success",
      message: "Transaction created successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Failed to create transaction.",
      error: error,
    });
  }
};

const editTransaction = async (req, res) => {
  const { amount, type, category, refrence, description, date } = req.body;
  const { transactionId } = req.params;
  try {
    await transectionModel.findOneAndUpdate(
      { transactionId: transactionId},
      // req.body.payload
      {
        $set: {
          expenseAppUserId: 'n8rLhXow8d',
          amount: amount,
          type: type,
          category: category,
          refrence: refrence,
          description: description,
          date: date,
        },
      }
    );
    res.status(200).send({
      status: "success",
      message: "Transaction updated successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Failed to update transaction.",
      error: error,
    });
  }
};
const deleteTransaction = async (req, res) => {
  const { transactionId } = req.params;
  try {
    await transectionModel.findOneAndDelete({ transactionId: transactionId});
    res
      .status(200)
      .send({
        status: "success",
        message: "Transaction deleted successfully.",
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        status: "failed",
        message: "Failed to delete transaction.",
        error: error,
      });
  }
};

module.exports = {
  getAllTransaction,
  getOneTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
