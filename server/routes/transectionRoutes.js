const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
  getOneTransaction,
} = require("../controllers/transactionController");
const checkUserAuth = require("../middleware/userAuth");

//router object
const router = express.Router();

//routes
router.get("/get-transaction", getAllTransaction);

router.get("/get-one-transaction/:transactionId", getOneTransaction);

router.post("/add-transaction", addTransaction);

router.put("/edit-transaction/:transactionId", editTransaction);

router.delete("/delete-transaction/:transactionId", deleteTransaction);

module.exports = router;
