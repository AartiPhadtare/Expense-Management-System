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
router.post("/get-transaction", getAllTransaction);

router.get("/get-one-transaction/:transactionId", getOneTransaction);

router.post("/add-transaction", addTransaction);

router.post("/edit-transaction/:transactionId", editTransaction);

router.post(
  "/delete-transaction/:transactionId",
  deleteTransaction
);

module.exports = router;
